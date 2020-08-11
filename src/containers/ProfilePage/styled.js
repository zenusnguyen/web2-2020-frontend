import styled from "styled-components";

const PersonalPage = styled.div`
  display: flex;
  /* flex: 1; */
  padding-right: 30%;
  flex-direction: row;
  background-color: #f5f7f9;
  width: 100%;
  height: 100vh;
  .bodyContainer {
    padding-top: 40px;
    display: flex;
    flex-direction: column;
    padding-left: 75px;
    /* margin-bottom: 60px; */
  }

  .pageTitle {
    font-size: 32px;
    font-weight: bold;
  }
  .title {
    font-size: 24px;
    font-weight: 600;
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
  .titleWithButton {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 55px;
    width: 100%;
  }
  .buttonGroup {
    display: flex;
    flex-direction: row;
  }
`;

export default PersonalPage;
