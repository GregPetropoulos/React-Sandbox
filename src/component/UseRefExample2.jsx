import { useRef, useState, useEffect } from 'react';

// * 3 hooks here, set a references to a number of renders and get the previous state

const UseRefExample2 = () => {
  // handling the count of renders
  const renders = useRef(1);

  //   handling the previous state
  const prevName = useRef('');

  const [name, setName] = useState('');

  useEffect(() => {
    // count of renders
    renders.current = renders.current + 1;
    // previous state on render
    prevName.current = name;
  }, [name]);

  return (
    <div>
      <h1>Renders : {renders.current}</h1>
      <h2>Previous Name State : {prevName.current}</h2>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
        className='form-control mb-3'
      />
    </div>
  );
};

export default UseRefExample2;
