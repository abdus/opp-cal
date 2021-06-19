import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import classes from './file-upload.module.css';
import { supabase } from '../../utils/supabase';
import { Loader } from '../Loader';

type PropType = {
  className?: string;
  acceptedMime?: string;
  onUpload(publicURI: string): void;
};

export function FileUpload(props: PropType) {
  const [error, setError] = React.useState<string>();
  const [file, setFile] = React.useState<File | null>(null);
  const [isUploading, setIsUploading] = React.useState(false);

  const uploadFile = async (fileData: File) => {
    setError(undefined);
    setIsUploading(true);

    const resp = await supabase.storage
      .from('opp_images')
      .upload(uuidv4(), fileData);

    if (resp.error) {
      setError(resp.error.message);
    }

    if (resp.data) {
      const getPublicUriResp = await supabase.storage
        .from('opp_images')
        .getPublicUrl(resp.data.Key.split('/')[1]);

      if (getPublicUriResp.publicURL) {
        props.onUpload(getPublicUriResp.publicURL);
        setFile(null);
      }

      if (getPublicUriResp.error) {
        setError(getPublicUriResp.error.message);
      }
    }

    setIsUploading(false);
  };

  return (
    <>
      {error && <div className={classes.error_msg}>{error}</div>}
      <div className={`${props.className} ${classes.container}`}>
        <span className={classes.filename}>
          {file?.name || 'Select a File'}
          <input
            type="file"
            accept={props.acceptedMime}
            onChange={(ev) => {
              const selected = ev.target.files && ev.target.files[0];

              if (selected) {
                setFile(selected);
              }
            }}
          />
        </span>
        <div className={classes.action_btn}>
          {isUploading && <Loader style={{ minWidth: '1.4rem' }} />}

          <button
            disabled={!file}
            style={{ background: 'red' }}
            type="button"
            onClick={() => setFile(null)}
          >
            ✖
          </button>
          <button
            disabled={!file}
            style={{ background: 'lime' }}
            type="button"
            onClick={() => {
              if (file) {
                uploadFile(file);
              }
            }}
          >
            ✓
          </button>
        </div>
      </div>
    </>
  );
}

FileUpload.defaultProps = {
  className: '',
  acceptedMime: '',
};
