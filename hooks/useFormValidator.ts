import { useToasts } from 'react-toast-notifications';

export function useFormValidator() {
  const toast = useToasts();

  return <T>(value: any, validatorFn: (value: any) => boolean): T => {
    if (validatorFn(value)) {
      return value as T;
    }

    toast.addToast('Form Input Validation Failed', { appearance: 'error' });
    throw Error('Form Input Validation Failed');
  };
}

// validators ..

function fnValidateString(value: any) {
  return value && typeof value === 'string';
}

export const validators = {
  fnValidateString,
};
