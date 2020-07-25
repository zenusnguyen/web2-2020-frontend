import styled from "styled-components";

const TransferStyled = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #f5f7f9;
  width: 100%;
  /* justify-content: flex-start; */
  .containerForm {
    padding-top: 40px;
    padding-left: 75px;
    display: flex;
    flex-direction: column;

    min-height: 508px;
    width: 100%;
    border-radius: 15px;
    /* align-items: center; */
    padding-bottom: 100px;
    /* justify-content: flex-start; */
  }
  .title {
    font-size: 32px;
    font-weight: bold;
  }
  .titleType{
    font-size: 16px;
    font-weight: 500;
  }
  .extraBanking {
    width: 350px;
    /* height: 50px; */
    /* height: 80px; */

    p {
      font-size: 16px;
      font-weight: 500;
    }
    .css-yk16xz-control {
      height: 50px;
    }
  }
`;

export default TransferStyled;
