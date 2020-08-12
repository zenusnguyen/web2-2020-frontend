import styled from "styled-components";

const MaganerAccountStyled = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #f5f7f9;
  width: 100%;
  height: 100%;
  min-height: 100vh;

  .containerForm {
    padding: 64px 75px;
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .SignInTitle {
    font-weight: 600;
    font-size: 32px;
    line-height: 150%;
    margin: 0;
  }
  .titleWithButton {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    margin-bottom: 32px;
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
