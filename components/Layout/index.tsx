import React from 'react';
import classes from './layout.module.css';

type PropType = {
  style?: React.CSSProperties;
  left?: React.ReactChild | React.ReactChildren;
  right?: React.ReactChild | React.ReactChildren;
  children: React.ReactNode | React.ReactNodeArray;
};

export function Layout(props: PropType) {
  return (
    <div className={classes.wrapper} style={props.style}>
      <aside>{props.left}</aside>
      <main>{props.children}</main>
      <aside>{props.right}</aside>
    </div>
  );
}

Layout.defaultProps = {
  left: 'left column',
  right: 'right column',
  style: {},
};
