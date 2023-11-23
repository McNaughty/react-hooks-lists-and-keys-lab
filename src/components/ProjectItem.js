import React from "react";
import {name, about, technologies} from "./ProjectList";

function ProjectItem({name,about,technologies}) {
  // const techOPt = technologies.map((techItem) =>{
    
  //   return  <div key={techItem.id}>{techItem}</div>
   
  // })

  return (
    <div className="project-item">
      <div className="technologies">
        <h3>{name}</h3>
        <p>{about}</p>
        {technologies.map((technology, index) => {
          //return (<span key={technology+'-'+index}>{technology}</span>); 
          return (<span key={technology}>{technology}</span>)
        })}
        
      </div>
    </div>
  );
}

export default ProjectItem;
