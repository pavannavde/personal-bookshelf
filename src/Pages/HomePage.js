import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import Card from '../Card';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loader from '../Loader';

function HomePage() {
    const [data,setData] = useState([]);
    const [isloading , setIsloading] = useState(true)
    const [search,setSearch] = useState('book');

    useEffect(()=>{
      getData()
    },[search])

    //get data from api
    async function getData(){
       try{
           const res = await axios.get(`https://openlibrary.org/search.json?q=${search}&limit=10&page=1.`);
           console.log(res.data.docs);
           setData(res.data.docs);
           setIsloading(false);
       }
       catch(err){
           console.log(err);
       }
    }
    //set search value
    function handleChange(e){
      setSearch(e.target.value);
      setIsloading(true);
    }
    //add book to my bookshelf
    function handleClick(id){
        let item = data.find((item)=>item.author_key === id);
        if(localStorage.getItem('mybookshelf')){
          let mybookshelf = JSON.parse(localStorage.getItem('mybookshelf'));
          mybookshelf.push(item);
          localStorage.setItem('mybookshelf',JSON.stringify(mybookshelf));
        }
        else{
          localStorage.setItem('mybookshelf', JSON.stringify([item]));
        }
        toast.success('Book added to Mybookshelf');
      }
  return (
    <div>
      <div className='Navbar'>
        <h2>Book<span style={{color:'tomato'}}>Store</span></h2>
        <Link to='/Mybookshelf'><button>Mybookshelf</button></Link>
      </div>
      {/* search element */}
      <div className='search'>
        <input type='text' placeholder='Search book ' onChange={handleChange}/>
      </div>
      {/* card element */}
      <div className='container'>
        {
          isloading ? <Loader/> : data.map((item)=>{
            return(
              <Card item={item} Btext={'Add to Mybookshelf'} handleClick={handleClick} isButton={true}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default HomePage
