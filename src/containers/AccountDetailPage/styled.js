import styled from "styled-components";

const AccountDetailPage = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #f5f7f9;
  width: 100vw;
  height: 100%;
  font-size: 16;
  font-weight: 500;

  /* justify-content: flex-start; */
  .containerForm {
    padding: 40px 75px 0;
    display: flex;
    flex-direction: column;

    min-height: 508px;
    width: 100%;
    border-radius: 15px;
    /* align-items: center; */
    padding-bottom: 100px;
    /* justify-content: flex-start; */
  }
  .pageTitle {
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 32px;
  }

  .itemTitle {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 16px;
  }
  .back {
    display: flex;
    flex-direction: row;
    align-items: center;
    img {
      margin-right: 10px;
    }
    .button {
      border: 0px;
      background-color: transparent;
    }
  }
  .selectInput {
    width: 350px;
    p {
      font-size: 16px;
      font-weight: 500;
      margin-bottom: 4px;
    }
    input {
      height: 34px;
    }
  }

  .filterSection {
    display: flex;
    min-height: 508px;
    flex-direction: row;
    justify-content: space-between;
  }

  .filterButton {
    width: 228px;
    height: 48px;
    background-color: #feba46;
    border: 0px;
    color: white;
    border-radius: 5px;
  }
`;

export default AccountDetailPage;
