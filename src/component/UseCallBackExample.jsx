import React, { useState, useCallback } from 'react';

// * useCallback returns a memoized callback function, returns a function when the dependency changes

// * React.Memo HOC High Order Component= takes in a component as prop and prevents
// * the re-rendering, essentially memoized a whole react component

const UseCallBackExample = () => {
  const [tasks, setTasks] = useState([]);

  //   Because of this useCallback the button is not rerendered every time the state is updated by adding a task
  const addTask = useCallback(() => {
    setTasks((prevState) => [...prevState, 'Some Task']);
  }, [setTasks]);

  return (
    <div>
      <Button addTask={addTask} />
      {tasks.map((task, index) => (
        <p key={index}>{task}</p>
      ))}
    </div>
  );
};

// A Button component here for this demo wrapped in React.memo
const Button = React.memo(({ addTask }) => {
  console.log('Button Rendered');

  return (
    <div>
      <button className='btn btn-primary' onClick={addTask}>
        Add Task
      </button>
    </div>
  );
});
export default UseCallBackExample;
