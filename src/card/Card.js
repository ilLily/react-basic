import {useState} from 'react'
// import './card.css';

export default function Card() {
    const getRandNum = ()=> {
        let newNum = Math.floor(Math.random()*151)+1;
        let newUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/'+newNum+'.png'
        return [newNum, newUrl]
    };
    let randNum = 1
    let url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${randNum}.png`

    const [pokeId, setPokeId] = useState("1");
    const [pokeUrl, setPokeUrl] =useState(url);
  return (
    <div >
    <h2>#{pokeId}</h2>
        <img src={pokeUrl} alt="" />
        <input type="text" id="inp"/>
        <label htmlFor="inp">Name</label>
        <button onClick = {()=>{
            const newPoke = getRandNum();
            setPokeId(newPoke[0])
            setPokeUrl(newPoke[1])
        }}>change</button>
    </div>
  );
}
