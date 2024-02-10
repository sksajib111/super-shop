import { useQuery } from "@tanstack/react-query";

const useCarts = () => {
  // tan stack query
  
  const {data: cart = []} = useQuery({
    queryKey:['carts'],
    queryFn: () =>{
      fetch('http://localhost:5000/carts')
      .then(res => res.json())
      .then(data => console.log(data))
    }
  })

  return [cart];
};

export default useCarts;
