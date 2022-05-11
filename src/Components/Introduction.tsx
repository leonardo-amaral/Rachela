import React from 'react'
import '../Styles/Introduction.css'
import Recipes from '../Utils/Recipes.json'

function Introduction() {
  return (
    <div className='Introduction'>
      <div className="content-introduction">
        {
          Recipes.map((info) => {
            return (
              <div className="content-intro">
                <img className='thumb-food' src={info.img} alt="" />
                <h1 className='title-intro'>{info.title}</h1>
                <p className='desc-intro'>{info.description}</p>
              </div>

            )
          })
        }
      </div>
    </div>
  )
}

export default Introduction