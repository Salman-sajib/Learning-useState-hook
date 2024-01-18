import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((c) => c + 1);
  };

  const decrement = () => {
    setCount((c) => c + 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className=' border-4 border-green-800 p-4 rounded-lg flex flex-col items-center'>
      <h1 className=' font-bold text-teal-900 text-[8rem] mb-8'>{count}</h1>
      <div className='flex items-center gap-2'>
        <button
          className='text-white bg-green-600 px-4 py-2 rounded'
          onClick={decrement}
        >
          Decrement
        </button>

        <button
          className='text-white bg-red-800 px-4 py-2 rounded'
          onClick={reset}
        >
          Reset
        </button>

        <button
          className='text-white bg-green-600 px-4 py-2 rounded'
          onClick={increment}
        >
          Increment
        </button>
      </div>
    </div>
  );
}
