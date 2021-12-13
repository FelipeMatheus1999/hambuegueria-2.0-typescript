import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  header {
    width: 324px;
    height: 150px;

    .title {
      width: 210px;
      height: 50px;
      display: flex;
      justify-content: space-between;

      h1 {
        color: var(--gray1);
      }

      h2 {
        color: var(--color-secondary);
        margin-top: 8px;
      }
    }

    .title__sub {
      width: 100%;
      height: 80px;
      display: flex;
      border: 2px solid var(--gray3);
      border-radius: 5px;
      justify-content: space-around;
      align-items: center;
      padding: 10px;

      .divIcon {
        background: #d8f3dc;
        font-size: 20px;
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
      }

      .title__sub__text {
        text-align: start;
        width: 230px;
        height: 50px;
        color: var(--gray4);
        font-size: 13px;
        padding-left: 10px;
      }
    }
  }

  form {
    width: 324px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 10px;
    border-radius: 5px;
    border: 2px solid var(--gray3);

    h2 {
      font-size: 20px;
    }

    main {
      height: 150px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      input {
        background: var(--gray0);
        color: var(--gray2);
        font-size: 16px;
        font-weight: 400;
        width: 100%;
        height: 50px;
        border: 2px solid var(--gray0);
        border-radius: 5px;
        padding-left: 10px;

        :hover {
          background: white;
          border: 2px solid var(--gray1);
        }
      }
    }

    span {
      color: var(--gray4);
      text-align: center;
      font-size: 12px;
      padding: 0 15px;
    }
  }

  @media (min-width: 768px) {
    width: 850px;
    flex-direction: row-reverse;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;

    header {
      margin-bottom: 240px;
    }

    form {
      width: 400px;
    }
  }
`;
