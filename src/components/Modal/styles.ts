import styled from "styled-components";

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100%;
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  bottom: 0;
  overflow-y: auto;
  align-content: center;
  justify-content: center;
`;

export const ContainerModal = styled.div`
  background: white;
  width: 90%;
  height: max-content;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;
  border-radius: 5px;

  header {
    background: var(--color-primary);
    font-size: 16px;
    font-weight: bold;
    color: white;
    width: 100%;
    height: 45px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    padding: 0 15px;
    border-radius: 5px 5px 0 0;
  }

  .cartMain {
    width: 90%;
    display: flex;
    flex-direction: column;
    grid-gap: 1rem;

    hr {
      border-color: var(--gray3);
      border-width: 1px;
      border-style: solid;
    }

    .cartPrice {
      color: var(--gray1);
      font-weight: 600;

      display: flex;
      justify-content: space-between;
      align-items: center;

      .cartPrice--price {
        color: var(--gray2);
      }
    }
  }
`;
