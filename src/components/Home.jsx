import React from 'react'
import Cards from './Cards';

function Home(props) {
  return (
    <div>
      <Cards addToCart={props.addToCart}/>
    </div>
  )
}

export default Home;
