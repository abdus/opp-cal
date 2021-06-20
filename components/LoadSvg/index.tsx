import React from 'react';
// import classes from './load-svg.module.css';

type PropType = {
  className?: string;
  svg: string;
  strokeColor?: string;
  fillColor?: 'none' | string;
  strokeWidth?: number;
  width?: number;
  height?: number;
  opacity?: number;
};

export function LoadSvg(props: PropType) {
  const dp = LoadSvg.defaultProps;
  const finalSvg = props.svg
    ?.replace('%SVG_FILL%', props.fillColor || dp.fillColor)
    .replace('%SVG_STROKE%', props.strokeColor || dp.strokeColor)
    .replace('%SVG_STROKE_WIDTH%', props.strokeWidth?.toString() || '')
    .replace('%SVG_WIDTH%', props.width?.toString() || dp.width)
    .replace('%SVG_HEIGHT%', props.height?.toString() || dp.height);

  return (
    <>
      <span
        style={{ opacity: props.opacity || 1 }}
        className={props.className}
        dangerouslySetInnerHTML={{ __html: finalSvg }} // eslint-disable-line
      />
    </>
  );
}

LoadSvg.defaultProps = {
  fillColor: 'none',
  strokeColor: 'currentColor',
  strokeWidth: 1,
  width: '',
  height: '',
  className: '',
  opacity: 1,
};
