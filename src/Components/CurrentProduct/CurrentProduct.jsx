import React from 'react'

export default function CurrentProduct({currentProduct}) {
  return (
    <div className='mt-6'>
      <h1 className='border-b-2 py-3 font-semibold text-xl text-gray-800 text-center'>Current Cooking : {currentProduct.length}</h1>
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
      </tr>
    </thead>
    <tbody>

    {
        currentProduct.map((item,index)=><tr key={index}>
        <th>{index+1}</th>
        <td>{item.recipe_name}</td>
        <td>{item.preparing_time}</td>
        <td>{item.calories}</td>
        
      </tr>)
    } 

    </tbody>
  </table>
      </div> 
    </div>
  )
}
