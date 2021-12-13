import jwtDecode from "jwt-decode";
import { useState, useContext, createContext, ReactNode } from "react";

interface AuthContextData {
  token: string;
  setToken: (props: string) => void;
  RemoveTokenDecode: () => void;
  tokenDecode: TokenDecode;
}

interface AuthProviderProps {
  children: ReactNode;
}

interface TokenDecode {
  iat: string;
  exp: number;
  sub: number;
  email: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("@token:hamburgueria") as string) || ""
  );
  const [tokenDecode, setTokenDecode] = useState<TokenDecode>(
    {} as TokenDecode
  );

  if (token && !tokenDecode.iat) {
    setTokenDecode(jwtDecode(token));
  }

  const RemoveTokenDecode = () => {
    setTokenDecode({} as TokenDecode);
  };

  return (
    <AuthContext.Provider
      value={{ token, setToken, RemoveTokenDecode, tokenDecode }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
