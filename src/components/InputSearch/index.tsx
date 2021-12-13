import { Container, SearchIcon } from "./styles";
import { FaSearch } from "react-icons/fa";
import { ReactNode, InputHTMLAttributes } from "react";

interface InputSearchProps extends InputHTMLAttributes<HTMLInputElement> {
  children?: ReactNode;
}

const InputSearch = ({ onClick, ...rest }: InputSearchProps) => {
  return (
    <Container>
      <input type="text" placeholder="search..." {...rest} />
      <SearchIcon onClick={onClick}>
        <FaSearch color="white" />
      </SearchIcon>
    </Container>
  );
};

export default InputSearch;
