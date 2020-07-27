import styled from "styled-components";

const MaganerAccountStyled = styled.div`
  /* position: absolute; */
  /* z-index: 2; */
  display: flex;
  flex-direction: row;
  background-color: #f5f7f9;
  width: 100%;
  height: 100vh;
  /* justify-content: flex-start; */
  .containerForm {
    padding-top: 40px;
    padding-left: 75px;
    display: flex;
    flex-direction: column;
    /* min-height: 508px; */
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
    height: 55px;
    width: 100%;
    padding-right: 25%;
  }
  .listCard {
    height: 100%;
  }
  .detailCard {
    position: absolute;
  }
`;

export default MaganerAccountStyled;
