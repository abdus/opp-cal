import React from 'react';
// import classes from './stop-event-propagation.module.css';

type PropType = {
  inlineBlock?: boolean;
  inline?: boolean;
  children: React.ReactNode | React.ReactNodeArray;
};

const STYLE = {
  inline: {
    display: 'inline',
  },

  inlineBlock: {
    display: 'inline-block',
  },
};

export function StopEventPropagation(props: PropType) {
  return (
    <div
      style={
        // eslint-disable-next-line
        props.inline ? STYLE.inline : props.inlineBlock ? STYLE.inlineBlock : {}
      }
      tabIndex={0}
      role="button"
      onKeyDown={(ev) => ev.stopPropagation()}
      onClick={(ev) => ev.stopPropagation()}
    >
      {props.children}
    </div>
  );
}

StopEventPropagation.defaultProps = {
  inlineBlock: false,
  inline: false,
};
