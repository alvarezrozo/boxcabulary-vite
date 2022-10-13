function debounce<Params extends unknown[]>(
  func: (...args: Params) => unknown,
  timeout: number
): (...args: Params) => void {
  let timer: number;

  return (...args: Params) => {
    window.clearTimeout(timer);

    timer = window.setTimeout(() => {
      func(...args);
    }, timeout);
  };
}

export default debounce;