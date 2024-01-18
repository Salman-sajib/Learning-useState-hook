// useState() is a React hook that allows the creation of a stateful
// variable and a setter function to update it's value in the
// virtual DOM [name, setName]

import MyComponent from './MyComponent';
import Counter from './Counter';

function App() {
  return (
    <div className=' min-h-dvh flex flex-col items-center justify-center'>
      {/* <MyComponent /> */}
      <Counter />
    </div>
  );
}

export default App;
