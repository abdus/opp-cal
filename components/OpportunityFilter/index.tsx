import React from 'react';
// import classes from './opportunity-filter.module.css';

type PropType = {
  onChange?(value: string): void;
};

export function OpportunityFilter(props: PropType) {
  return (
    <>
      {/*

      <div className={classes.container}>
            <div className={classes.row}>
        <input type="checkbox" />
        <span>Female Only</span>
        </div>
      </div>
      */}
      <input
        type="search"
        name=""
        placeholder="search..."
        onChange={(ev) => {
          if (typeof props.onChange === 'function') {
            props.onChange(ev.target.value);
          }
        }}
      />
    </>
  );
}

OpportunityFilter.defaultProps = {
  onChange: () => {},
};
