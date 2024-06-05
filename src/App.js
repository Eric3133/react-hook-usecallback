import { memo, useState, useCallback} from 'react';
import './App.css';

const Input = memo(function Input({onChange}){
  console.log('Input rendered');
  return <input type= "text" onChange = {(e) => onChange(e.target.value)} />
})
function App() {
  const [count, setCount] = useState(0);
  const changeHandler = useCallback((value) => {
    console.log(value);
  }, [])
  return (
    <div className="App">
      <Input  onChange = {changeHandler}/>
      <button onClick = {() => {setCount(count + 1)}}>{count}</button>
    </div>
  );
}

export default App;
