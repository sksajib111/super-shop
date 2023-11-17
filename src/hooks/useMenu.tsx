import { useEffect, useState } from "react";


const useMenu = () =>{
  const [menu, setMenu] = useState([]);

  useEffect(()=>{
    fetch('menu.json')
    .then(data => data.json())
    .then(data => {
      const popularItem = data.filter(item => item.category === 'popular');
      setMenu(popularItem)})
  },[])
  return[ menu ]
}

export default useMenu;
