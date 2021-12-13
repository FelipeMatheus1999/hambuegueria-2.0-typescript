import { ReactNode, useState, createContext, useContext } from "react";
import api from "../../services/api";
import { useCart } from "../Cart";
import { useAuth } from "../Auth";

interface user {
  age?: number;
  email: string;
  id: number;
  name: string;
}

interface UserContextData {
  user: user;
  setUser: (prop: user) => void;
}

interface UserProviderProps {
  children: ReactNode;
}

const UserContext = createContext<UserContextData>({} as UserContextData);

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<user>({} as user);
  const { tokenDecode, token } = useAuth();
  const { setCart, setCartApi } = useCart();
  const [verify, setVerify] = useState<boolean>(false);

  if (!verify && tokenDecode) {
    api
      .get(`/users/${tokenDecode.sub}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const user = {
          email: response.data.email,
          id: response.data.id,
          name: response.data.name,
        };
        setUser(user);
        setVerify(true);
      });

    api
      .get(`users/${tokenDecode.sub}/cart`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setCartApi([...res.data]);
        setCart([...res.data]);
      })
      .catch((error) => console.log(error));
  }

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
