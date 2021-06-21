import React from 'react';
import classes from './modal.module.css';

export function Modal(props: {
  isOpen: boolean;
  children: React.ReactNode | React.ReactNodeArray;
  className?: string;
  title?: string;
  onClose?(): void;
}) {
  const [isOpen, setIsOpen] = React.useState(props.isOpen);

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

  return (
    <>
      <div
        className={`${classes.modal_wrapper} ${isOpen ? '' : classes.close} ${
          props.className
        }`}
      >
        <div className={classes.modal}>
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
