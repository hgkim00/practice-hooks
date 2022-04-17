import { useEffect, useRef } from 'react';

const useClick = (onClick) => {
    const element = useRef();
    /*
    useEffect는 componentWillUnmount 때 발생한다.
    그래서 useEffect 안에 func을 넣으면 그 func들은
    componentDidMount, componentDidUpdate 때 호출된다.
    */
    useEffect(() => {
      if (typeof onClick !== 'function') {
        return ;
      }
      if (element.current) {
        element.current.addEventListener("click", onClick);
      }
      // dependency가 존재할 경우 componentDidMount일 떄만 호출될 것.
  
      // return func은 componentWillUnMount로부터 호출됨.
      return () => {
        if (element.current) {
          element.current.removeEventListener("click", onClick);
        }
      };
      // useEffect를 return 받은 함수는 componentWillUnMount때 호출될 것.
    }, []);
  
    return typeof onClick !== "function" ? element : undefined;
};

export default useClick;