import logo from './logo.svg';
import './App.css';
import {Context} from './Components/Context';
import { useContext } from 'react';
import Comments from './Components/Comments';


function App() {
  let {data, data1} = useContext(Context);
  // console.log(data,'dataapp')
  console.log(data1,'data1app')
  return (
    <div className='main'>
      <div className='body '>
        <Comments comment = {data} reply={data1}/>
      </div>
    </div>
  );
}

export default App;


