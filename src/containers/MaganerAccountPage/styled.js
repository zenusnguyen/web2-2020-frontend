import styled from "styled-components";

const MaganerAccountStyled = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #f5f7f9;
  width: 100%;
  height: 100vh;

  .containerForm {
    padding: 64px 75px;
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .pageTitle {
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
    height: 100%;
  }
  .detailCard {
    width: 85%;
    position: absolute;
  }
`;

export default MaganerAccountStyled;
