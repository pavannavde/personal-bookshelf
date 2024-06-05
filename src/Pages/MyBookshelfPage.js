import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Card from '../Card';

function MyBookshelfPage() {
   
    const [mybook,setMybook] = useState([]);

    function getItems(){
      const dataArr = JSON.parse(localStorage.getItem('mybookshelf'));
      if(dataArr === null) return;
      setMybook(dataArr);
      console.log(dataArr.length)
    }
    useEffect(()=>{
      getItems();
    },[])

   

  return (
    <div>
      <div className='Navbar'>
        <h2>Book<span style={{color:'tomato'}}>Store</span></h2>
        <h3>My Bookshelf Page</h3>
        <Link to='/'><button>Home</button></Link>
      </div>
       {/* card element */}
       <div className='container'>
        {
         mybook.length === 0 ? (<h1>No Books Found</h1>) : (mybook.map((item)=>{
            return(
              <Card item={item} isButton={false}/>
            )
          }))
        }
      </div>
    </div>
  )
}

export default MyBookshelfPage
