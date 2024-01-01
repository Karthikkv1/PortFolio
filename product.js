import { useEffect,useState } from "react";

function Product(){


    let [name,setName]=useState("Karthik ")       //22-12-2023

    let[age,setAge]=useState(20)        //223-12-2023



    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())  //export data
      .then(json => console.log(json));   //handling data

      return function(){
        console.log(" dummy Unmounted")
      }

    },[age])         //To call data from internet using API  23-12-2023

    useEffect(()=>{
        console.log("Component rendered");
    })             //22-12-2023


    return(


        <div className="product">

         <h3>Google Pixel</h3>
         <h2>{name}</h2>                             {/* 22-12-2023 */}

         <button onClick={()=>{
            setName("KARTHIK");
         }}> Click

         </button>

         <h2>{age}</h2>

         <button onClick={()=>{
            setAge(21);
         }}> Click

         </button>

        </div>
    )
}

export default Product;   //To export this file and made it available to other javascript file