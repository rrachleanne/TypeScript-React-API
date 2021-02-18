import Button from "@material-ui/core/Button";
//Import the Types from App Component
//Types
import { UserType } from "../App";
import { Wrapper } from "./User.styles";

//will take in two props the item itself
type Props = {
  user: UserType;
//   handleAddToCart: (clickedItem: UserType) => void;
};

// const User: React.FC<Props> = ({ user, handleAddToCart }) => (
const User: React.FC<Props> = ({ user }) => (
  <Wrapper>
    <div>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </div>
    {/* <Button onClick={() => handleAddToCart(user)}>Add to Cart</Button> */}
  </Wrapper>
);

export default User;
