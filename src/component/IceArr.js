import { useEffect, useState } from "react";
import Icecream from "./IceCream";

export default function IceArr() {

    const [ arr, setArr] = useState([]);


    useEffect(() => {
            fetch('http://localhost:8000/menuData').then( res => res.json()).then(data => {
                console.log(data);
                console.log(arr);
                setArr(data);

            });
    }, []);

    const iceCreamList = arr.map( el => {
        return (
            <div className="ice-cream" key={el.id}>
            
            <Icecream image={`img/ice-cream-${el.iceCream.id}.svg`}  name= {el.iceCream.name} price={el.price} description=     {el.description} />
            
       
           

            </div>
        )
    })


    return (
        <div className="App">
            {iceCreamList}
        </div>
    )
};