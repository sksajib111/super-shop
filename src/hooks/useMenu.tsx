import { useEffect, useState } from "react";


const useMenu = () =>{
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    fetch('menu.json')
    .then(data => data.json())
    .then(data => {
      setMenu(data)
      setLoading(false)
    })
  },[])
  return[ menu, loading ]
}

export default useMenu;
