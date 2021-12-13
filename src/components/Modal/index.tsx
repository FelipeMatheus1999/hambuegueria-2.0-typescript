import { Container, ContainerModal } from "./styles";
import { AiOutlineClose } from "react-icons/ai";
import { InputHTMLAttributes, ReactNode } from "react";
import { useActions } from "../../providers/Actions";

interface ModalProps extends InputHTMLAttributes<HTMLInputElement> {
  children?: ReactNode;
  title: string;
}

const Modal = ({ children, title }: ModalProps) => {
  const { handleCart, setHandleCart } = useActions();

  const handleModalFunction = () => {
    if (handleCart === "none") {
      setHandleCart("visible");
    } else {
      setHandleCart("none");
    }
  };

  return (
    <Container style={{ display: handleCart }}>
      <ContainerModal>
        <header>
          {title}
          <div>
            <AiOutlineClose
              onClick={handleModalFunction}
              style={{ cursor: "pointer" }}
            />
          </div>
        </header>
        <main className="cartMain">{children}</main>
      </ContainerModal>
    </Container>
  );
};

export default Modal;
