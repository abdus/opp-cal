import React from 'react';
// import classes from './Image.module.css';
import { Loader } from '../Loader';

type PropType = {
  src: string;
  alt?: string;
};

export function Image(props: PropType) {
  const imgRef = React.createRef<HTMLImageElement>();
  const [imgLoaded, setImgLoaded] = React.useState(false);

  React.useEffect(() => {
    if (imgRef.current?.complete === true) {
      setImgLoaded(true);
    }
  }, []);

  return (
    <>
      <img
        alt={props.alt}
        ref={imgRef}
        src={props.src}
        onLoad={() => {
          setImgLoaded(true);
        }}
        style={{
          visibility: imgLoaded ? 'visible' : 'hidden',
          position: imgLoaded ? 'relative' : 'absolute',
        }}
      />
      <Loader style={{ display: imgLoaded ? 'none' : 'block' }} />
    </>
  );
}

Image.defaultProps = {
  alt: '',
};
