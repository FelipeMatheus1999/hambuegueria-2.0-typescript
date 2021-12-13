import { Container } from "./styles";
import { IoSearchSharp } from "react-icons/io5";
import { MdShoppingCart } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { useActions } from "../../providers/Actions";
import { useUser } from "../../providers/User";
import { useCart } from "../../providers/Cart";
import { useAuth } from "../../providers/Auth";

const Header = () => {
  const { handleCart, setHandleCart } = useActions();
  const { setUser } = useUser();
  const { setToken, RemoveTokenDecode } = useAuth();
  const { filteredCart } = useCart();

  const numberProductsCart = filteredCart.reduce(
    (acc, cur) => acc + cur.number,
    0
  );

  const logout = () => {
    localStorage.clear();
    setToken("");
    setUser([]);
    RemoveTokenDecode();
  };

  return (
    <Container>
      <div className="title">
        <h1>Burguer</h1>
        <h2>kenzie</h2>
      </div>

      <div className="containerIcons">
        <IoSearchSharp color="gray" style={{ cursor: "pointer" }} />
        <div className="countProducts">
          <MdShoppingCart
            color="gray"
            style={{ cursor: "pointer" }}
            onClick={() => {
              if (handleCart === "none") {
                setHandleCart("visible");
              }
            }}
          />
          <div className="countProducts--count">{numberProductsCart}</div>
        </div>

        <FiLogOut color="gray" style={{ cursor: "pointer" }} onClick={logout} />
      </div>
    </Container>
  );
};

export default Header;
