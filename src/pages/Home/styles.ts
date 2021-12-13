import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
`;

export const MenuContainer = styled.div`
  width: 100%;
  display: flex;
  overflow-x: scroll;
  margin-top: 80px;

  ::-webkit-scrollbar {
    display: none;
    scroll-behavior: smooth;
  }

  @media (min-width: 768px) {
    max-width: 1400px;
    justify-content: space-around;
    height: 100%;
    flex-wrap: wrap;
  }
`;

export const Card = styled.div`
  width: 324px;
  height: 346px;
  border-radius: 5px;
  border: 2px solid var(--gray0);
  margin: 10px 10px;
  display: flex;
  flex-wrap: wrap;

  :hover {
    transition: 0.3s;
    border-color: var(--color-primary);
  }

  .divImage {
    background: var(--gray0);
    width: 324px;
    height: 140px;
    border-radius: 5px 5px 0 0;
    display: flex;
    justify-content: center;
    align-items: center;

    .imageCart {
      width: 50px;
      height: 50px;
    }
  }

  .divBuy {
    width: 100%;
    height: 180px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 10px;
  }

  h4 {
    color: var(--gray1);
  }

  span {
    color: var(--gray2);
    font-size: 12px;
  }

  .price {
    color: var(--color-primary);
    font-size: 14px;
    font-weight: bold;
  }

  button {
    width: 130px;
    height: 40px;
  }
`;

export const CardProduct = styled.div`
  height: 70px;
  display: flex;
  margin-bottom: 10px;

  main {
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;

    .divImage--cart {
      background: var(--gray0);
      width: 70px;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
      margin: 0 7px;

      .imageCart {
        width: 50px;
        height: 50px;
      }
    }

    .divProduct {
      font-size: 18px;
      width: 200px;
      height: 70px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
    }

    .productPrice {
      color: var(--gray4);
      font-size: 14px;
    }

    .scoreboard {
      width: 90px;
      height: 30px;
      display: flex;

      .scoreboard--less {
        background: var(--gray0);
        color: var(--color-secondary);
        cursor: pointer;
        width: 25px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .scoreboard--plus {
        background: var(--gray0);
        color: var(--color-secondary);
        cursor: pointer;
        width: 25px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .scoreboard--number {
        background: white;
        font-size: 12px;
        width: 40px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 2px solid var(--gray0);
      }
    }
  }
`;
