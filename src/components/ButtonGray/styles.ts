import styled from "styled-components";

export const Container = styled.button`
  background: var(--gray4);
  color: white;
  font-size: 16px;
  font-weight: bold;
  width: 100%;
  height: 50px;
  border: none;
  border-radius: 5px;

  :active {
    transition: 0.2s;
    background: var(--color-primary);
  }
`;
