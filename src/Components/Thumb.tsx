import React, { useState } from 'react'
import Recipes from '../Utils/Recipes.json'
import '../Styles/Thum.css'
// {
//   Recipes.map((info) => {
//     return (
//       <img className='background' src={info.background} alt="" />

//     )
//   })
// }


function Thumb() {
  return (
    <div className='thumb'>
      <div className="content-thumb">
        <h1 className='title-thumb'>Lorem ipsum dolor sit amet</h1>
        <p className='desc-thumb'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate beatae accusamus quis quia, aspernatur enim facilis pariatur nostrum neque. Vero, dolore quia soluta cum facere quas in unde ipsa aliquam?</p>
      </div>
    </div>
  )
}

export default Thumb