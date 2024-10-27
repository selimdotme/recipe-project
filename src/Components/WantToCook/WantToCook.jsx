import CurrentProduct from "../CurrentProduct/CurrentProduct";

export default function WantToCook({wantProduct,handleCurrentProduct,currentProduct}) {
  return (
    <div>
      <h1 className='border-b-2 py-3 font-semibold text-xl text-gray-800 text-center'>Want to cook : {wantProduct.length}</h1>
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
        <th></th>
      </tr>
    </thead>
    <tbody>

    {
        wantProduct.map((item,index)=><tr key={index}>
        <th>{index+1}</th>
        <td>{item.recipe_name}</td>
        <td>{item.preparing_time}</td>
        <td>{item.calories}</td>
        <td><button onClick={()=>handleCurrentProduct(item.recipe_id)} className="btn btn-primary">Preparing</button></td>
      </tr>)
    } 

    </tbody>
  </table>
      </div> 
      <CurrentProduct currentProduct={currentProduct}></CurrentProduct>
    </div>
  )
}
