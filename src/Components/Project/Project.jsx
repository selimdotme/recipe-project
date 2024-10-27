import React from 'react'

export default function Project({project,handleWantProduct}) {
    
    const {calories,ingredients,preparing_time,recipe_img,recipe_name,short_description} = project;
  return (
    <div className=''>
      <div className="card bg-base-100 border-2 shadow-xl">
  <figure className='h-[300px] p-4'>
    <img
    className='h-full rounded-2xl'
      src={recipe_img}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{recipe_name}</h2>
    <p>{short_description}</p>
    <h2>ingredient : {ingredients.length}</h2>
    <ul>
        {ingredients.map(item =><li className='list-disc'>{item}</li>)}
    </ul>
    <div className="card-actions">
      <button onClick={()=>{handleWantProduct(project)}} className="btn btn-primary">Want to Cook</button>
    </div>
  </div>
</div>
    </div>
  )
}
