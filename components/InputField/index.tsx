import React from 'react';
// import classes from './input-field.module.css';

interface PropType extends React.InputHTMLAttributes<HTMLInputElement> {
  errormessage?: string;
  validator?(val: any): boolean;
}

export function InputField(props: PropType) {
  const [isValidValue, setIsValidValue] = React.useState<boolean>();

  return (
    <>
      <input
        {...props}
        style={{
          ...props.style,
          ...(isValidValue === false ? { border: '1px solid red' } : {}),
        }}
        onChange={(ev) => {
          if (typeof props.onChange === 'function') {
            props.onChange(ev);
          }

          if (typeof props.validator === 'function') {
            const result = props.validator(ev.target.value);

            if (result) setIsValidValue(true);
            else setIsValidValue(false);
          }
        }}
      />
    </>
  );
}

InputField.defaultProps = {
  errormessage: '',
  validator: undefined,
};
