import React from 'react';
import { Loader } from '../Loader';
import { StopEventPropagation } from '../StopEventPropagation';
import classes from './opportunity-card.module.css';
import { generateComponentKey } from '../../utils/generateComponentKey';

function isLast3Days(date: Date): boolean {
  const now = new Date();
  return now.getDate() - date.getDate() > 3;
}

type PropType = {
  oppTitle: string;
  organisation: string;
  logoURL: string;
  location: string;
  eligibility: string;
  description: string;
  type: string;
  lastDate: Date;
  apply: string;
};

export function OpportunityCard(props: PropType) {
  const imgRef = React.createRef<HTMLImageElement>();
  const generateKey = generateComponentKey();

  const [showDesc, setShowDesc] = React.useState(false);
  const [imgLoaded, setImgLoaded] = React.useState(false);

  React.useEffect(() => {
    if (imgRef.current?.complete === true) {
      setImgLoaded(true);
    }
  }, []);

  return (
    <div
      tabIndex={0}
      role="button"
      id={props.organisation}
      className={classes.card}
      onClick={() => setShowDesc(!showDesc)}
      onKeyDown={(ev) => ev.key === 'Enter' && setShowDesc(!showDesc)}
    >
      {console.log(props.logoURL)}
      <span className={classes.expand_handler} />
      <div className={classes.header}>
        <div className={classes.image}>
          <img
            alt=""
            ref={imgRef}
            src={props.logoURL}
            onLoad={() => {
              setImgLoaded(true);
            }}
            style={{
              visibility: imgLoaded ? 'visible' : 'hidden',
              position: imgLoaded ? 'relative' : 'absolute',
            }}
          />
          <Loader style={{ display: imgLoaded ? 'none' : 'block' }} />
        </div>
        <div className={classes.content}>
          <h3>{props.oppTitle}</h3>
          <span>{props.organisation}</span>
        </div>
      </div>

      <div className={classes.meta}>
        {props.lastDate && new Date(props.lastDate) && (
          <StopEventPropagation inline>
            <small
              title={
                isLast3Days(props.lastDate) ? 'Deadline Close!' : 'Deadline'
              }
              style={{
                backgroundColor: isLast3Days(props.lastDate)
                  ? '#741515'
                  : undefined,
                color: isLast3Days(props.lastDate) ? '#fff' : undefined,
              }}
            >
              {`📅 ${props.lastDate.toLocaleDateString()}`}
            </small>
          </StopEventPropagation>
        )}

        {props.location && (
          <StopEventPropagation inline>
            <small>{`🌍 ${props.location}`}</small>
          </StopEventPropagation>
        )}

        {props.eligibility && (
          <StopEventPropagation inline>
            <small>{`📚 ${props.eligibility}`}</small>
          </StopEventPropagation>
        )}

        {props.type && (
          <StopEventPropagation inline>
            <small style={{ background: 'lightblue', color: '#000' }}>
              {`😎 ${props.type.toLowerCase()}`}
            </small>
          </StopEventPropagation>
        )}
      </div>

      {showDesc && (
        <StopEventPropagation>
          <div className={classes.desc}>
            {props.description.split('\\n').map((sentance) => (
              <React.Fragment key={generateKey.next().value || ''}>
                {sentance}
                <br />
                {console.log(generateKey.next().value)}
              </React.Fragment>
            ))}

            <a
              className={classes.apply}
              href={props.apply}
              target="_blank"
              rel="noreferrer"
            >
              <button className="gradient" type="button">
                APPLY
              </button>
            </a>
          </div>
        </StopEventPropagation>
      )}
    </div>
  );
}
