import React from 'react'

export default function Header() {
  return (
    <div className='w-11/12 mx-auto'>
     <div className="navbar bg-base-100">
  <div className="navbar-start">   
    <a className="text-xl text-slate-950 font-bold md:text-3xl">Recipe Calories</a>
  </div>
  <div className="navbar-center lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>
      <li><a>About</a></li>
      <li><a>Recipe</a></li>
      <li><a>Search</a></li>
    </ul>
  </div>
  <div className="navbar-end gap-3">
  <label className="rounded-full input input-bordered flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      fillRule="evenodd"
      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      clipRule="evenodd" />
  </svg>
  <input type="text" className="grow" placeholder="Search" />
  
</label>
  </div>
</div>
    </div>
  )
}
