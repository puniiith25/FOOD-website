import React, { useState } from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import Exploremenu from '../../Components/Exploremenu/Exploremenu'
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay'




const Home = () => {

  const [category , setcategory] = useState('all');

  return (
    <div className='Home'>
      <Header/> 
      <Exploremenu category={category} setcategory={setcategory} />
      <FoodDisplay category={category} />
    </div>
  )
}

export default Home
