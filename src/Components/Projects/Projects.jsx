import React, { useEffect, useState } from 'react'
import Project from '../Project/Project'

export default function Projects({handleWantProduct}) {
    const [projects,setProjects] = useState([])
    useEffect(()=>{
        fetch("./fakeData.json")
        .then(res => res.json())
        .then(data => setProjects(data))
    },[])
  return (
    <div className='w-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
      {
        projects.map(project => <Project key={project.recipe_id} project={project} handleWantProduct={handleWantProduct}></Project>)
      }
    </div>
  )
}
