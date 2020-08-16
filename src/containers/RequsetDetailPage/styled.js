import styled from "styled-components";

const PersonalPage = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #f5f7f9;
  width: 100%;
  min-height: 100vh;
  height: 100%;

  .bodyContainer {
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
  .title {
    font-size: 24px;
    font-weight: 600;
  }
  .back {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: #828485;
    img {
      margin-right: 10px;
    }
    .button {
      border: 0px;
      background-color: transparent;
    }
  }
  .titleWithButton {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 32px;
  }
  .buttonGroup {
    display: flex;
    flex-direction: row;
  }
`;

export default PersonalPage;
