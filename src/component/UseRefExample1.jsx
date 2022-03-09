import { useRef } from 'react';

//* Form alternative to useState where usually every input has a piece of state with the onchange event setting the state.

// * useRef gets the value with out being connected to the state
// * useRef doesn't change the state or rerender

// * When text entered into the text box and submit clicked the inputRef returns an object with one property called current...can be accessed like console.log(inputRef.current.value);

export const UseRefExample1 = () => {
  const inputRef = useRef();

  // An additional reference to useRef in a paragraph
  const paraRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(inputRef.current.value);
    // inputRef.current.style.backgroundColor='red'

    // When click submit paragraph says GoodBye
    paraRef.current.innerText = 'GoodBye';
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          id='name'
          ref={inputRef}
          className='form-control mb-2'
        />
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
        {/* <p ref={paraRef}></p> GoodBye example */}
        {/* focus example below */}
        <p onClick={() => inputRef.current.focus()} ref={paraRef}></p>
      </form>
    </div>
  );
};
export default UseRefExample1;
