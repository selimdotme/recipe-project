import React from 'react'
import WantToCook from '../WantToCook/WantToCook'

export default function Sidebar({wantProduct,handleCurrentProduct,currentProduct}) {
  console.log(wantProduct)
  return (
    <div className='w-1/3'>
      <WantToCook wantProduct={wantProduct} handleCurrentProduct={handleCurrentProduct} currentProduct={currentProduct}></WantToCook>
    </div>
  )
}
