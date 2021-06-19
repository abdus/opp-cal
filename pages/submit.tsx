import React from 'react';
import { v4 as uuidV4 } from 'uuid';
import { useToasts } from 'react-toast-notifications';
import { Layout } from '../components/Layout';
import classes from '../styles/Submit.module.css';
import { ThemeSwitcher } from '../components/ThemeSwitcher';
import { EmailSubscription } from '../components/EmailSubscription';
import { Loader } from '../components/Loader';
import { ProfileCard } from '../components/ProfileCard';
import { InputField } from '../components/InputField';
import { FileUpload } from '../components/FileUpload';
import { Dropdown } from '../components/Dropdown';

import { AuthUserContext } from '../context';
import { useInsertIntoDB } from '../hooks/useInsertIntoDB';
import { definitions } from '../types/supabase-types';
import { useFormValidator, validators } from '../hooks/useFormValidator';
import { throttle } from '../utils/throttle';

// eslint-disable-next-line
export default function Submit() {
  const toast = useToasts();
  const formValidator = useFormValidator();
  const authUser = React.useContext(AuthUserContext);
  const insertOppToDb = useInsertIntoDB<definitions['opportunities']>();

  const [companyLogoUri, setCompanyLogoUri] = React.useState<string>('');
  const [opportunityType, setOpportunityType] = React.useState<string>('');
  const [selectedLocation, setSelectedLocation] = React.useState<string>('');
  const [suggestedLocations, setSuggestedLocations] = React.useState<
  { label: React.ReactNode; value: string }[]
  >([{ label: '', value: '' }]);

  React.useEffect(() => {
    const uid = uuidV4();

    if (!authUser) {
      toast.addToast('You must be logged in to submit an Opportunity', {
        appearance: 'error',
        autoDismiss: false,
        id: uid,
      });
    }

    return () => {
      toast.removeToast(uid);
    };
  }, [authUser]);

  return (
    <>
      <ThemeSwitcher />
      <Layout left={<EmailSubscription />} right={<ProfileCard />}>
        <form
          className={classes.form}
          onReset={() => setCompanyLogoUri('')}
          onSubmit={(ev) => {
            ev.preventDefault();

            if (authUser?.id) {
              const formData = new FormData(ev.target as HTMLFormElement);
              const opportunityData: definitions['opportunities'] = {
                author: authUser.id,
                id: uuidV4(),
                type: formValidator<string>(
                  formData.get('opp-type'),
                  validators.fnValidateString,
                ),
                location: formValidator<string>(
                  formData.get('location'),
                  validators.fnValidateString,
                ),
                opp_name: formValidator(
                  formData.get('opportunity-title'),
                  validators.fnValidateString,
                ),
                company_name: formValidator(
                  formData.get('company-name'),
                  validators.fnValidateString,
                ),
                apply_at: formValidator(
                  formData.get('apply-at'),
                  validators.fnValidateString,
                ),
                eligibility: formData.get('eligibility')?.toString(),
                opp_deadline: formValidator(
                  formData.get('last-date'),
                  validators.fnValidateString,
                ),
                opp_description: formData
                  .get('description')
                  ?.toString()
                  .replace(/\n/g, '\\n'),
                company_logo_url: formData.get('company-logo')?.toString(),
              };

              insertOppToDb('opportunities', opportunityData).then(
                (val) => val.data && (ev.target as HTMLFormElement).reset(),
              );
            }
          }}
        >
          <h3>Add a new Opportunity</h3>

          {/* <img src="https://i.ibb.co/g70HK8V/2021-06-15-11-38-11.png" alt="" /> */}
          <p>
            Saw an opportunity? Help others by listing it here! Let us rise by
            lifting others.
          </p>

          <div className={classes.row}>
            <label htmlFor="opp-type">
              <span>
                Opportunity Type
                <span className={classes.color_red}>*</span>
              </span>

              <Dropdown
                onChange={(data) => setOpportunityType(data?.value || '')}
                data={[
                  { label: 'Full Time', value: 'FULLTIME' },
                  { label: 'Part Time', value: 'PARTTIME' },
                  { label: 'INTERNSHIP', value: 'INTERNSHIP' },
                ]}
              />
              <input type="hidden" name="opp-type" value={opportunityType} />
            </label>

            {/* eslint-disable-next-line */}
            <label htmlFor="location">
              <span>
                Location
                <span className={classes.color_red}>*</span>
              </span>
              <InputField
                type="hidden"
                id="location"
                name="location"
                value={selectedLocation}
                placeholder="Mumbai, Maharashtra"
                validator={validators.fnValidateString}
              />

              <Dropdown
                data={suggestedLocations}
                onChange={(data) => setSelectedLocation(data?.value || '')}
                onFilterTextChange={(filterText) => throttle(async () => {
                  try {
                    const raw = await fetch(
                      `/api/get-location-autocomplete?search=${filterText}`,
                    );
                    const json = await raw.json();
                    const ddData = [];

                    /* eslint-disable */
                      filterText &&
                        ddData.push({
                          label: filterText,
                          value: filterText,
                        });
                      /* eslint-enable */

                    for (let i = 0; i < json?.suggestions?.length; i += 1) {
                      const place = json?.suggestions[i];
                      const fullAddr: string[] = [];
                      const addr = place.address;

                      /* eslint-disable */
                        addr.street && fullAddr.push(addr.street);
                        addr.county && fullAddr.push(addr.county);
                        addr.city && fullAddr.push(addr.city);
                        addr.district && fullAddr.push(addr.district);
                        addr.state && fullAddr.push(addr.state);
                        addr.country && fullAddr.push(addr.country);
                        addr.postalCode && fullAddr.push(addr.postalCode);
                        /* eslint-enable */

                      const tmp = {
                        label: fullAddr.join(', ').replace(/<\/?b>/gi, ''),
                        value: fullAddr.join(', ').replace(/<\/?b>/gi, ''),
                      };

                      ddData.push(tmp);
                    }

                    setSuggestedLocations(ddData);
                  } catch (err) {
                    setSuggestedLocations([
                      { label: filterText, value: filterText },
                    ]);
                  }
                }, 400 /* throttle at 0.4s */)}
              />
            </label>
          </div>

          {/* eslint-disable-next-line */}
          <label htmlFor="opportunity-title">
            <span>
              Job Title/Opportunity Name
              <span className={classes.color_red}>*</span>
            </span>
            <InputField
              id="opportunity-title"
              type="text"
              name="opportunity-title"
              placeholder="SDE-I/Hackathon etc"
              validator={validators.fnValidateString}
            />
          </label>

          <div className={classes.row}>
            {/* eslint-disable-next-line */}
            <label htmlFor="company">
              <span>
                Company
                <span className={classes.color_red}>*</span>
              </span>
              <InputField
                id="company"
                type="text"
                name="company-name"
                placeholder="Google"
                validator={validators.fnValidateString}
              />
            </label>

            {/* eslint-disable-next-line */}
            <label htmlFor="eligibility">
              <span>
                Eligibility
                <span className={classes.color_red}>*</span>
              </span>
              <InputField
                id="eligibility"
                type="text"
                name="eligibility"
                placeholder="BTech"
              />
            </label>
          </div>

          <label htmlFor="desc">
            <span>Job Description</span>
            <textarea
              style={{ resize: 'vertical' }}
              id="desc"
              rows={7}
              placeholder="A detailed description"
              name="description"
            />
          </label>

          {/* eslint-disable-next-line */}
          <label htmlFor="logo">
            <span>Company Logo</span>
            {!companyLogoUri && (
              <FileUpload
                className={classes.file_upload}
                onUpload={(uri: string) => setCompanyLogoUri(uri)}
              />
            )}
            <input type="hidden" name="company-logo" value={companyLogoUri} />

            {companyLogoUri && (
              <div
                className={`${classes.file_upload} ${classes.clear_selected_file}`}
              >
                <span>Logo Selected!</span>
                <button type="button" onClick={() => setCompanyLogoUri('')}>
                  ✕
                </button>
              </div>
            )}
          </label>

          <div className={classes.row}>
            {/* eslint-disable-next-line */}
            <label htmlFor="apply">
              <span>
                Apply at
                <span className={classes.color_red}>*</span>
              </span>
              <InputField
                id="apply"
                type="text"
                name="apply-at"
                placeholder="https://jobs.lever.com/path/to/job"
                validator={validators.fnValidateString}
              />
            </label>

            {/* eslint-disable-next-line */}
            <label htmlFor="last-date">
              <span>
                Last Date
                <span className={classes.color_red}>*</span>
              </span>
              <InputField
                type="date"
                id="last-date"
                name="last-date"
                validator={validators.fnValidateString}
              />
            </label>
          </div>

          <div className={`${classes.row} ${classes.submit_reset_btn}`}>
            {/* eslint-disable-next-line */}
            <button type="reset">RESET</button>
            <button className="gradient" type="submit">
              SUBMIT
            </button>
          </div>
        </form>

        <div
          style={{
            margin: '5rem 0',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Loader />
        </div>
      </Layout>
    </>
  );
}
