import axios from 'axios'
import React, { useState ,useEffect } from 'react'
import '../Styles/Details.css'

function Details({Details}) {

  const [detail , setDetail] = useState('')
  const [ability , setAbility] = useState([])
  const [forms , setForms] = useState('')
  const [height , setHeight] = useState('')
  const [species , setSpecies] = useState('')
  const [weight , setWeight] = useState('')

    useEffect(() => {
        axios.get(Details)
             .then(res => {
              setDetail(res.data)
              setForms(res.data.forms[0].name)
              setAbility(...ability , res.data.abilities.map(item => item.ability.name))
              setHeight(res.data.height)
              setSpecies(res.data.species.name)
              setWeight(res.data.weight)
             })
             .catch(error => {
                console.log(error)
             })
      },[])

  return(
    <div className='container'>
      <table className='list-Container'>
        <tr>
          <th>Title</th>
          <th>About</th>
        </tr>
        <tr>
          <td>Abilities</td>
          <td>{ability.map(item => {return(<li>{item}</li>)})}</td>
        </tr>
        <tr>
          <td>Forms</td>
          <td>{forms}</td>
        </tr>
        <tr>
          <td>Height</td>
          <td>{height} Feet</td>
        </tr>
        <tr>
          <td>Species</td>
          <td>{species}</td>
        </tr>
        <tr>
          <td>Weight</td>
          <td>{weight}</td>
        </tr>
      </table>
    </div>
  )
}

export default Details
