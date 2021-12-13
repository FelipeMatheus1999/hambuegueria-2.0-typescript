import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import api from "../../services/api";
import hamburguer from "../../assets/202109090436_skn5yx754p 1.png";
import xKenzie from "../../assets/202109200440_749eet5vy86 1.png";
import bigKenzie from "../../assets/202109200440_8fcy91zr6le 1.png";
import comboKenzie from "../../assets/202110050424_xijoowz172 1.png";
import fanta from "../../assets/202108180426_tbwjnwcd1zq 1.png";
import coca from "../../assets/202108180426_861zezb4bh 1.png";
import mcShake from "../../assets/202108250455_4498m9wq98e 1.png";
import sundae from "../../assets/202110110503_g22mtz565td 1.png";
import { useAuth } from "../Auth";

interface product {
  name: string;
  id: number;
  price: number;
  image: string;
  category: string;
  number: number;
  userId?: string;
}

interface CartContextData {
  cart: product[];
  addToCart: (product: product) => void;
  removeToCart: (product: product) => void;
  removeAll: (product: product) => void;
  removeAllItems: () => void;
  filteredCart: product[];
  setCart: (props: product[]) => void;
  setCartApi: (props: product[]) => void;
}

interface CartProviderProps {
  children: ReactNode;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export const CartProvider = ({ children }: CartProviderProps) => {
  const { tokenDecode, token } = useAuth();
  const [cart, setCart] = useState<product[]>([]);
  const [cartApi, setCartApi] = useState<product[]>([]);

  useEffect(() => {
    if (tokenDecode.sub) {
      getUserCart();
    }
  });

  const getUserCart = () => {
    if (tokenDecode) {
      api
        .get(`users/${tokenDecode.sub}/cart`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setCartApi([...res.data]);
          setCart([...res.data]);
          filterItens();
        })
        .catch((error) => console.log(error));
    }
  };

  const filterItens = () => {
    return cartApi.filter((value) => value.number !== 0);
  };

  const filteredCart = filterItens();

  const addToCart = (product: product) => {
    if (cart.length >= 8) {
      const patchProduct = cart.find((value) => value.name === product.name);
      const patchProductNumber = { number: patchProduct!.number + 1 };

      api
        .patch(`/cart/${patchProduct!.id}`, patchProductNumber, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          getUserCart();
          setCart([...cart]);
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
          console.log(cart);
        });
    } else {
      const newCart = [
        {
          name: "Hamburger",
          price: 14.0,
          image: hamburguer,
          category: "sanduíche",
          number: 0,
        },
        {
          name: "X-Kenzie",
          price: 16.0,
          image: bigKenzie,
          category: "sanduíche",
          number: 0,
        },
        {
          name: "Big Kenzie",
          price: 18.0,
          image: xKenzie,
          category: "sanduíche",
          number: 0,
        },
        {
          name: "Combo Kenzie",
          price: 28.0,
          image: comboKenzie,
          category: "combo",
          number: 0,
        },
        {
          name: "Fanta Laranja",
          price: 5.0,
          image: fanta,
          category: "bebidas",
          number: 0,
        },
        {
          name: "Coca-Cola",
          price: 7.0,
          image: coca,
          category: "bebidas",
          number: 0,
        },
        {
          name: "McShake OvoMaltine",
          price: 10.0,
          image: mcShake,
          category: "sobremesas",
          number: 0,
        },
        {
          name: "Sundae",
          price: 10.0,
          image: sundae,
          category: "sobremesas",
          number: 0,
        },
      ];
      newCart.map((value) => {
        if (value.name !== product.name) {
          api
            .post(`users/${tokenDecode.sub}/cart`, value, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            })
            .then((res) => {
              getUserCart();
            })
            .catch((error) => console.log(error.response.data));
        } else {
          const newProduct = {
            name: product.name,
            price: product.price,
            category: product.category,
            image: product.image,
            number: 1,
          };
          api
            .post(`users/${tokenDecode.sub}/cart`, newProduct, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            })
            .then((res) => {
              getUserCart();
            })
            .catch((error) => console.log(error.response.data));
        }
      });
    }
  };

  const removeToCart = (product: product) => {
    const patchProduct = cart.find((value) => value.name === product.name);
    const patchProductNumber = { number: patchProduct!.number };

    if (patchProductNumber.number > 0) {
      const newPatchNumber = { number: patchProductNumber!.number - 1 };

      api
        .patch(`/cart/${patchProduct!.id}`, newPatchNumber, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          console.log(res.data);
          getUserCart();
        })
        .catch((error) => console.log(error.response.data));
    }
  };

  const removeAll = (product: product) => {
    const patchProduct = cart.find((value) => value.name === product.name);
    const patchProductNumber = { number: patchProduct!.number };

    if (patchProductNumber.number > 0) {
      const newPatchNumber = { number: 0 };

      api
        .patch(`/cart/${patchProduct!.id}`, newPatchNumber, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          console.log(res.data);
          getUserCart();
        })
        .catch((error) => console.log(error));
    }
  };

  const removeAllItems = () => {
    const numberApi = {
      number: 0,
    };

    filteredCart.map((value) => {
      return api
        .patch(`cart/${value.id}/`, numberApi, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          getUserCart();
          console.log(response.data);
        })
        .catch((error) => console.log(error));
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        filteredCart,
        addToCart,
        removeToCart,
        removeAll,
        removeAllItems,
        setCart,
        setCartApi,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
