import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./UseAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";

const useCarts = () => {
  // tan stack query
  const axiosSecure = useAxiosSecure();
  const {user} = useContext(AuthContext);
  console.log(user?.email);
  const { data: cart = [] } = useQuery({
    queryKey: ['cart', user?.email],
    queryFn: async() => {
      const res = await axiosSecure.get(`/carts?email=${user.email}`);
      return res.data;
    },
  });

  return [cart];
};

export default useCarts;
