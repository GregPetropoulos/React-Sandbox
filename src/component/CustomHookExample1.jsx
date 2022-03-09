import React from 'react';
import useFetch from './hooks/useFetch';

const CustomHookExample1 = () => {
  // here is where the url and options are put in, notice the options object is empty
  // destructured data, loading and error out of the useFetch
  const { data, loading, error } = useFetch(
    'https://jsonplaceholder.typicode.com/posts',
    {}
  );
  // was res before destructure console.log(res);

  if (loading) {
    return <h3>Loading.......</h3>;
  }

  return (
    <div>
      {data.map((post) => (
        <h3 key={post.id}>{post.title}</h3>
      ))}
    </div>
  );
};

export default CustomHookExample1;
