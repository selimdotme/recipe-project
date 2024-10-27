import React, { useState } from 'react'
import Header from './Components/Header/Header'
import Banner from './Components/Banner/Banner'
import Recipes from './Components/Recipes/Recipes'
import Projects from './Components/Projects/Projects'
import Sidebar from './Components/Sidebar/Sidebar'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const [wantProduct,setWantProduct] = useState([]);
  const [currentProduct,setCurrentProduct]=useState([]);
  const handleWantProduct = (product) =>{
    const isExist = wantProduct.find(previousProduct => previousProduct.recipe_id === product.recipe_id )
    if(!isExist){
      setWantProduct([...wantProduct,product]);
    }
    else{
      toast.warn('Already you want this Product');
    }
  }

  // current Product handle bar

  const handleCurrentProduct = (id)=>{
    const delate = wantProduct.find(pd => pd.recipe_id === id);
    const update = wantProduct.filter(pd => pd.recipe_id !== id);
    setWantProduct(update);
    setCurrentProduct([...currentProduct,delate])
  }
  return (
    
    <div>
      {/* header */}
      <Header/>
      {/* banner */}
      <Banner/>
      {/* recipes */}
      <Recipes/>
      {/*  */}
      <div className='my-6 flex gap-5 w-11/12 mx-auto'>
        <Projects handleWantProduct = {handleWantProduct}></Projects>
        <Sidebar currentProduct={currentProduct} wantProduct={wantProduct} handleCurrentProduct={handleCurrentProduct}></Sidebar>
      </div>
      <ToastContainer
      position="top-center"
      />
    </div>
  )
}
