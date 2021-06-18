interface ICallBack {
  callbackFn(): void;
}

export const throttle = (() => {
  let timer: ReturnType<typeof setTimeout> | undefined;

  return (callback: ICallBack['callbackFn'], time = 1000) => {
    if (timer) return;

    timer = setTimeout(() => {
      callback.call(null);
      timer = undefined;
    }, time);
  };
})();
