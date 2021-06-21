import React from 'react';
import { useRouter } from 'next/router';
import classes from './modal.module.css';

export function Modal(props: {
  isOpen: boolean;
  children: React.ReactNode | React.ReactNodeArray;
  className?: string;
  title?: string;
  onClose?(): void;
}) {
  const router = useRouter();
  const [isOpen, setIsOpen] = React.useState(props.isOpen);
  const [isOppPageLoading, setIsOppPageLoading] = React.useState(false);

  React.useEffect(() => {
    setIsOpen(props.isOpen);
  }, [props.isOpen]);

  React.useEffect(() => {
    if (!isOpen) {
      window.document.body.classList.remove('modal-is-open');

      if (typeof props.onClose === 'function') {
        props.onClose();
      }
    } else {
      window.document.body.classList.add('modal-is-open');
    }
  }, [isOpen]);

  React.useEffect(() => {
    router.events.on('routeChangeStart', () => setIsOppPageLoading(true));
    router.events.on('routeChangeComplete', () => setIsOppPageLoading(false));
    router.events.on('routeChangeError', () => setIsOppPageLoading(false));

    return () => {
      router.events.off('routeChangeStart', () => setIsOppPageLoading(true));
      router.events.off('routeChangeComplete', () => setIsOppPageLoading(false));
      router.events.off('routeChangeError', () => setIsOppPageLoading(false));
    };
  }, []);

  return (
    <>
      <div
        className={`${classes.modal_wrapper} ${isOpen ? '' : classes.close} ${
          props.className
        }`}
      >
        <div className={classes.modal}>
          <div
            style={{ height: '5px' }}
            className={isOppPageLoading ? 'page_loader' : ''}
          />

          <div className={classes.modal_meta}>
            <strong>{props.title}</strong>
            <button
              type="button"
              className={classes.close_btn}
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>
          </div>
          <div>{props.children}</div>
        </div>
      </div>
    </>
  );
}

Modal.defaultProps = {
  className: '',
  title: '',
  onClose: () => {},
};
