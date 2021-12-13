import styled from "styled-components";

export const Container = styled.div`
  color: var(--gray3);
  width: 95%;
  height: 50px;
  display: flex;
  position: fixed;
  top: 5px;
  left: 50%;
  transform: translateX(-50%);
  align-items: center;
  border: 2px solid var(--gray3);
  border-radius: 5px;
  margin: 0 auto;
  z-index: 2;

  :hover {
    border-color: var(--gray1);
  }

  input {
    color: var(--gray2);
    font-size: 16px;
    font-weight: 400;
    width: 100%;
    height: 100%;
    border: none;
    padding: 0 10px;
  }
`;

export const SearchIcon = styled.div`
  background: var(--color-primary);
  font-size: 14px;
  width: 40px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;
