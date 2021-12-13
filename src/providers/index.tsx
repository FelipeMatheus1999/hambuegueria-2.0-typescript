import { ReactNode } from "react";
import { MenuProvider } from "./Menu";
import { CartProvider } from "./Cart";
import { ActionsProvider } from "./Actions";
import { UserProvider } from "./User";
import { AuthProvider } from "./Auth";

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <AuthProvider>
      <CartProvider>
        <UserProvider>
          <MenuProvider>
            <ActionsProvider>{children}</ActionsProvider>
          </MenuProvider>
        </UserProvider>
      </CartProvider>
    </AuthProvider>
  );
};

export default Providers;
