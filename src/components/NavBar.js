import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const navTag = links.map((link) => {
    return <a key={link} href={"#" + link}>{link}</a> ;
    
  });
  
  return <nav>{navTag}</nav>
  
  
}

export default NavBar;
