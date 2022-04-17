const usePreventLeave = () => {
    const listener = (event) => {
      event.preventDefault();
      event.returnValue = "";
      // 원래는 없어도 되야되는데 없으면 작동 안함 그래서 추가함.
    };
  
    const enablePrevent = () => window.addEventListener("beforeunload", listener);
    const disablePrevent = () =>
      window.removeEventListener("beforeunload", listener);
  
    return { enablePrevent, disablePrevent };
};

export default usePreventLeave;  