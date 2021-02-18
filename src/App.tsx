import { useState } from "react";
import { useQuery } from "react-query";
//components
import Drawer from "@material-ui/core/Drawer";
import LinearProgress from "@material-ui/core/LinearProgress";
import Grid from "@material-ui/core/Grid";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Badge from "@material-ui/core/Badge";
import User from './Users/User'
import Random from './Random/Random'
//Stylings
import { Wrapper } from "./App.styles";


//Types - All the properties you get back from the API > we set a type so TypeScript doesnt error out
//We then pass that in the arrow function below
export type UserType = {
  id: number;
  name: string;
  email: string;
};

//Async fucntion as we are fetching from an API
//convert to json
//:Promise with the return type<> where we pass the CartItemType types in an array
const getProducts = async (): Promise<UserType[]> =>
  await (await fetch("https://jsonplaceholder.typicode.com/users")).json();

export default function App() {
  // we use react-query to fetch the data
  //call the useQuery hook and pass types/ array
  const { data, isLoading, error } = useQuery<UserType[]>(
    "products",
    getProducts
  );
  console.log(data);

  const getTotalUsers = () => null;
  const handleAddToCart = () => null;
  const handleRemoveFromCart = () => null;

  if (isLoading) return <LinearProgress />;
  if (error) return <div> Something went wrong...</div>;
  return (
    <Wrapper>
      <Random/>
      <Grid container spacing={3}>
        {data?.map(user => (
          <Grid item key={user.id}>
            <User user={user} />
            {/* <User user={user} handleAddToCart={handleAddToCart}/> */}
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
}
