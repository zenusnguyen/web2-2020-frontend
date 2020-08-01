import styled from "styled-components";

const TransactionHistoryPage = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #eff1f2;
  width: 100%;

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




  .selectInput {
    width: 350px;
    padding-bottom: 20px;
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
    flex-direction: row;
    justify-content: space-between;
  }
`;

export default TransactionHistoryPage;
