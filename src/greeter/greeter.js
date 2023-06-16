// import {useState} from 'react'
// import './card.css';

// export default function Greeter({props}) {
//     const n = props.name;

//   return (
//     <div >Hello {n}</div>
//   );
// }

export default function Greeter({name="Lily", age}) {
    const n = name;
    const a = age+1;

  return (
    <div >Hello {a} years old {n}</div>
  );
}
