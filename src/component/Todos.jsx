import { useState, useRef, useEffect } from 'react';

//* Heres the error when it's fetching on load and I click the toggle button
// react_devtools_backend.js:4061 Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.
//at Todos (http://localhost:3000/static/js/bundle.js:106:80)

const Todos = () => {
  const [loading, setLoading] = useState(true);
  const [todo, setTodo] = useState({});

  //   A boolean reference set to isMounted
  const isMounted = useRef(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          // Checks if we are mounted if so update the state
          if (isMounted.current) {
            setTodo(data);
            setLoading(false);
          }
        }, 3000);
      });

    // If you want something to happen when component is unmounted then return in useEffect
    return () => {
      // console.log(123)
      // * Three changes are needed to fix error 1-Setting isMounted to false here, 2-Add is Mounted to dependency array, 3-if check before state is updated in the fetch call
      isMounted.current = false; // return cleanup
    };
  }, [isMounted]);

  return loading ? <h3>Loading...</h3> : <h1>{todo.title}</h1>;
};

export default Todos;
