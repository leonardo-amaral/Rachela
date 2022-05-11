import React from 'react'
import Introduction from '../Components/Introduction'
import Nav from '../Components/Nav'
import Thumb from '../Components/Thumb'
import Recipes from '../Utils/Recipes.json'

function Home() {
  return (
    <div>
      <Nav />
      <Thumb />
      <Introduction />
    </div>
  )
}

export default Home