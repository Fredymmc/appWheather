import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

const PokeApi = () => {

    const [ poke, setPoke ] = useState({});
    const [ isDecimeters, setIsDecimeters ] = useState(true);



    useEffect( () => {
        const id = Math.floor(Math.random() * 600 ) + 1;
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
       .then(res => setPoke(res.data))
       }, [ ] )

    console.log(poke);
    const decimeters = poke.height;
    const meters = poke.height/10;

    const changeUnits =  () => {
        setIsDecimeters(!isDecimeters) 
    }

    const [ isHg, setIsHg ] = useState(true);

    const hectogramos = poke.weight;
    const kilogramos = poke.weight / 10;

    const changePoke = () => {
        const id = Math.floor(Math.random() * 600 ) + 1;
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
       .then(res => setPoke(res.data))
    }

    return (
        <div>
            <div className="card1">
<h3 style={{color: "#fff", backgroundColor:"#000", fontSize:"30px", padding:"20px" }}  > {poke.name} </h3> <br />
<img   style={{width: "200px" }}  src={poke.sprites?.other.dream_world.front_default} alt="" />
<h3> peso: {isHg ? hectogramos : kilogramos} 
    {" "} 
    {isHg ? 'hectogramos' : 'Kilogramos' } </h3>
<h3> altura: {isDecimeters ? decimeters : meters} 
            {" "} 
            {isDecimeters ? 'decimeters' : 'meters' } </h3>
<h3> tipo: {poke.types?.[0].type.name} </h3>
<button onClick={changeUnits}  > change height units</button> <br />
<button onClick={() => setIsHg(!isHg) }  > change weight units</button> <br /> <br />
<button style={{color: "#fff", backgroundColor:"red" }} onClick={changePoke}  > change pokemon</button>
</div>
        </div>
    );
};

export default PokeApi;