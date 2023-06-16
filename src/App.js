// import {useState} from 'react'
import Card from './card/Card'
import Greeter from './greeter/greeter'
import GreeterB from './greeter/greeterB'
// import './App.css';

function App() {
  const users = [1,2,3];
  // const users = [
  //   {
  //     "id": 1,
  //     "name": "金妮",
  //     "email": "ginny@test.com",
  //     "username": "ginny",
  //     "password": "11111",
  //     "r_date": "2023-01-01"
  //   },
  //   {
  //     "id": 2,
  //     "name": "哈利",
  //     "email": "herry@test.com",
  //     "username": "herry",
  //     "password": "22222",
  //     "r_date": "2023-06-03"
  //   }]


  return (
    <div >
      <Card/>
      <Greeter name="Bill" age={30}></Greeter>
      <Greeter name="Bill" age="30"></Greeter>
      <Greeter name="Jane" age={10}></Greeter>
      <Greeter name="" age={10}></Greeter>
      <Greeter age={10}></Greeter>
      <GreeterB values={users}></GreeterB>
      <GreeterB values={["a","b","c","d"]}></GreeterB>
    </div>
  );
}

export default App;
