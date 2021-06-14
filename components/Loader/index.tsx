import React from 'react';
import classes from './loader.module.css';

type PropType = {
  size?: number;
  style?: React.CSSProperties;
};

export function Loader(props: PropType) {
  const SIZE = (props.size || 1) * 20;

  return (
    <div
      style={{ width: SIZE, height: SIZE, ...props.style }}
      className={classes.wrapper}
    />
  );
}

Loader.defaultProps = {
  size: 1,
  style: {},
};
