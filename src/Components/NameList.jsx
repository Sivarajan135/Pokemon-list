import React, {useEffect,useState} from 'react'
import axios, { Axios } from 'axios'
import { Link } from 'react-router-dom';
import '../Styles/NameList.css'

function NameList({setdetailsApi , setshowpopup}) {
    const [data , setData] = useState({})
    const [name , setName] = useState([])
    const [page , setPage] = useState(1)
    const [api , setApi] = useState("https://pokeapi.co/api/v2/pokemon")
    const [numberOrder , setNumberOrder] = useState(1)
  
    useEffect(() => {
      axios.get(api)
           .then(res => {
              setData(res.data)
              setName(res.data.results)
           })
           .catch(error => {
              console.log(error)
           })
    },[api])

    function pageInitialization(e){
            return(
            <React.Fragment>
            <button onClick={HandlePage} className='active'>{e}</button>
            <button onClick={HandlePage}>{e+1}</button>
            </React.Fragment>
            )
       }
       console.log(data);

    function HandlePage(e)
    {
        const currentPage = Number(e.target.innerText);
        setPage(currentPage)
        if(currentPage < page)
        {
            setApi(data.previous)
            setNumberOrder(prev => prev - 20)
        }
        else if(currentPage > page)
        {
            setApi(data.next)
            setNumberOrder(prev => prev + 20)
        }
        else
        {
            setPage(page)
        }
    }

    function prevClick(){
        if(page > 1)
        {
            setPage(pre => pre - 1)
            setApi(data.previous)
            setNumberOrder(prev => prev - 20)
        }
    }

    function nextClick(){
        if(page < 64)
        {
            setPage(pre => pre + 1)
            setApi(data.next)
            setNumberOrder(prev => prev + 20)
        }
    }

    function handleDetails(url)
    {
        setdetailsApi(url);
    }
  
    return (
      <div className='container'>
         <div className='list-container'>
         <h1 className='Heading'>Pokemon List</h1>
         <ul className='pokemon-list'>
          {
            name.map((item, index) => {return (<div className='num'><span>{index+numberOrder}</span><Link to = '/Details' key = {index} onClick={() => handleDetails(item.url)}>{item.name}</Link></ div>)})
          }
         </ul>
         </div>

         <div className='pagination'>
             <button onClick={prevClick}>Prev</button>
             {
               pageInitialization(page)
             }
             <button onClick={nextClick}>Next</button>
         </div>
      </div>
    );
}

export default NameList
