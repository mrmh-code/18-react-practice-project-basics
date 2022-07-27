import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {
  const {cocktail, loading}=useGlobalContext();
 
  if(loading){
    return <Loading/>
  }

  if(cocktail.length< 1){

    return (
      <h2 className='section-title'>
        No Cocktails Matched Your Search Criteria
      </h2>
    )
  }
  return (
    <div className='section'>
      <h2 className='section-title'>cocktails</h2>
      <div className='cocktails-center'>
        {cocktail.map((item)=>{
          return <Cocktail key={item.id} {...item}/>
        })}
      </div>
      
    </div>
  )
}

export default CocktailList
