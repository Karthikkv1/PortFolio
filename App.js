

import { useEffect, useState } from 'react';
import './App.css';
import Product from './product';  //To import product.js file 

function App() {

  // let[productVisible,setProductVisible] = useState(false);

let[users,setUsers]=useState([]);  //state variable

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response)=>response.json())
    .then((data)=>{
      console.log(data);

      setUsers(data);
    })

    .catch((err)=>{
      console.log(err);
    })

  },[])

  return (

   

    <div className="App">

      {
        users.map((user)=>{
          return(
            <div className='user' key={user.id}>
              <h1>{user.name}</h1>
              <p>{user.username}</p>
              <p>{user.website}</p>
            </div>
          )
        })
      }
      
   
  
    </div>
  );
}

export default App;



// <h1>Welcome</h1>


// {/* Mounting */}
// <button onClick={()=>{
// setProductVisible(true);
// }}> Show Product</button>

// {/* Un-Mounting */}

// <button onClick={()=>{
// setProductVisible(false);
// }}> Hide Product</button>


// {

// productVisible==true?

// (
// <Product/>
// )
// :null

// }                                            {/**In line 18 to 25 we used ternary operator concept of javascript */}