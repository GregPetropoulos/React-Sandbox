import { useState, useEffect, useMemo, useRef } from 'react';
// * MEMOIZATION is an optimization technique to speed up performance for storing or caching results for  large expensive function call (searching thousands of records in db)
// 1-Only use for performance issues
// 2-In this example the square root is the expensive function and we dont want to be calculated on very re-render since we already have it, must cache or store it.

const UseMemoExample = () => {
  const [number, setNumber] = useState(1);

  //   increment for Re-render button click
  const [inc, setInc] = useState(0);

  // dummy expensive function
  // const sqrt = getSqrt(number)
  const sqrt = useMemo(() => getSqrt(number), [number]);
  // useMemo, takes in a function and dependency array

  // Value for number of renders
  const renders = useRef(1);

  useEffect(() => {
    renders.current = renders.current + 1;
  });
  const onClick = () => {
    // get previous number plus 1 in the inc state
    setInc((prevState) => {
      console.log(prevState + 1);
      return prevState + 1;
    });
  };
  return (
    <div>
      <input
        type='number'
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        className='form-control w-25'
      />
      <h2 className='my-3'>
        {' '}
        The square root of {number} is {sqrt}
      </h2>
      <button className='btn btn-primary' onClick={onClick}>
        Re-Render
      </button>
      <h3>Renders: {renders.current}</h3>
    </div>
  );
};

// expensive function
function getSqrt(n) {
  // for loop to make an expensive
  for (let i = 0; i <= 10000; i++) {
    console.log(i);
  }
  console.log('Expensive Function Called');
  return Math.sqrt(n);
}

export default UseMemoExample;
