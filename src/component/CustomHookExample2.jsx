// import { useState } from 'react';

// Brought in custom hook dont need useState
import useLocalStorage from './hooks/useLocalStorage';

// Using a form for example

// The state as seen in dev tools updating when typing in input field is updated and the useLocalStorage hook will set the local storage to the same value at the same time

function CustomHookExample2() {
  // PASSING IN A SPECIFIC KEY AND INITIAL VALUE ON RIGHT SIDE, WILL CATCH IN THE CUSTOM HOOK
  const [task, setTask] = useLocalStorage('task', '');
  const [title, setTitle] = useLocalStorage('title', []);

  const onSubmit = (e) => {
    e.preventDefault();

    // Create a new object on submit
    const titleObj = {
      title: task,
      completed: false,
      date: new Date().toLocaleTimeString()
    };
    // Set the state with the new title object
    setTitle([...title, titleObj]);
    // Because of the custom hook we can stringify the submitted array of data into local storage and then parse it back out to show up in the UI
  };

  return (
    <>
      <form onSubmit={onSubmit} className='w-50'>
        <div className='mb-3'>
          <label htmlFor='' className='form-label'>
            Task
          </label>
          <input
            type='text'
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className='form-control'
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
      <hr />
      {title.map((item) => (
        <h3 key={item.date}>{item.title}</h3>
      ))}
    </>
  );
}

export default CustomHookExample2;
