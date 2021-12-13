import styled from "styled-components";

export const Container = styled.div`
  background: var(--gray0);
  width: 100vw;
  height: 50px;
  display: flex;
  position: fixed;
  top: 0;
  justify-content: space-between;
  align-items: center;

  .title {
    width: 160px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-left: 10px;

    h1 {
      color: var(--gray1);
      font-size: 24px;
    }

    h2 {
      color: var(--color-secondary);
      font-size: 16px;
      margin-top: 5px;
    }
  }

  .containerIcons {
    font-size: 20px;
    width: 100px;
    display: flex;
    justify-content: space-between;
    margin-right: 5px;

    .countProducts {
      color: var(--gray3);
      width: 20px;
      display: flex;

      .countProducts--count {
        background: var(--color-primary);
        font-size: 10px;
        font-weight: bold;
        width: 15px;
        height: 15px;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        margin-left: 15px;
      }
    }

    @media (min-width: 468px) {
      width: 150px;
      margin-right: 20px;
    }
  }
`;
