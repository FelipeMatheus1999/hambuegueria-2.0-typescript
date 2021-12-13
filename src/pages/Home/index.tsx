import { Container, MenuContainer, Card, CardProduct } from "./styles";
import Modal from "../../components/Modal";
import ButtonGreen from "../../components/ButtonGreen";
import { FaTrash } from "react-icons/fa";
import { useMenu } from "../../providers/Menu";
import { useCart } from "../../providers/Cart";
import { useActions } from "../../providers/Actions";
import Header from "../../components/Header";
import ButtonGray from "../../components/ButtonGray";
import { Redirect } from "react-router-dom";
import { useAuth } from "../../providers/Auth";

const Home = () => {
  const { token } = useAuth();
  const { menu } = useMenu();
  const { addToCart, removeToCart, removeAll, removeAllItems, filteredCart } =
    useCart();
  const { handleCart } = useActions();

  const currentCartPrice = filteredCart.reduce(
    (acc, current) => acc + current.number * current.price,
    0
  );

  if (!token) {
    return <Redirect to="/login" />;
  }

  return (
    <Container>
      <Header />
      <MenuContainer>
        {menu &&
          menu.map((value, index) => {
            return (
              <Card key={index}>
                <div className="divImage">
                  <img src={value.image} alt="" />
                </div>
                <div className="divBuy">
                  <h4>{value.name}</h4>
                  <span>{value.category}</span>
                  <span className="price">R$: {value.price.toFixed(2)}</span>
                  <ButtonGreen onClick={() => addToCart(value)}>
                    Adicionar
                  </ButtonGreen>
                </div>
              </Card>
            );
          })}
        {handleCart === "visible" && (
          <Modal title="Carrinho de compras">
            {filteredCart.map((value, index) => {
              return (
                <CardProduct key={index}>
                  <main>
                    <div className="divImage--cart">
                      <img className="imageCart" src={value.image} alt="" />
                    </div>
                    <div className="divProduct">
                      <h5>{value.name}</h5>
                      <span className="productPrice">
                        R$: {value.price.toFixed(2)}
                      </span>
                      <div className="scoreboard">
                        <div
                          className="scoreboard--less"
                          onClick={() => removeToCart(value)}
                        >
                          -
                        </div>
                        <div className="scoreboard--number">{value.number}</div>
                        <div
                          className="scoreboard--plus"
                          onClick={() => addToCart(value)}
                        >
                          +
                        </div>
                      </div>
                    </div>
                  </main>
                  <FaTrash
                    style={{ cursor: "pointer" }}
                    color="gray"
                    onClick={() => removeAll(value)}
                  />
                </CardProduct>
              );
            })}
            {filteredCart.length !== 0 && (
              <>
                <hr />
                <div className="cartPrice">
                  <span>Total</span>{" "}
                  <span className="cartPrice--price">
                    R$:{currentCartPrice.toFixed(2)}
                  </span>
                </div>
                <ButtonGray onClick={removeAllItems}>REMOVER TODOS</ButtonGray>
              </>
            )}
            {filteredCart.length === 0 && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-between",
                  height: "50px",
                }}
              >
                <span style={{ fontWeight: "bold" }}>
                  Sua sacola está vazia!
                </span>
                <span style={{ fontSize: "14px", color: "#828282" }}>
                  Adicione items
                </span>
              </div>
            )}
          </Modal>
        )}
      </MenuContainer>
    </Container>
  );
};

export default Home;
