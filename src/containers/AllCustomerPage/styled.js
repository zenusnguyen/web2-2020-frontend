import styled from "styled-components";

const MaganerAccountStyled = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #f5f7f9;
  width: 100%;
  height: 100%;

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
  .SignInTitle {
    font-size: 32px;
    font-weight: bold;
  }
  .titleWithButton {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-right: 25%;
    height: 55px;
    width: 100%;
  }
  .listCard {
  }
  .detailCard {
    position: absolute;
  }
  .searchBar {
    input {
      width: 320px;
      height: 48px;
      border: 1px solid #d9dadb;
      box-sizing: border-box;
      border-radius: 4px;
      padding: 12px;
      padding-left: 45px;
    }
    img {
      position: relative;
      left: 30px;
    }
  }
`;

export default MaganerAccountStyled;
