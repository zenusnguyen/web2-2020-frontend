import styled from "styled-components";

const PersonalPage = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #f5f7f9;
  height: 100vh;
  width: 100%;

  .bodyContainer {
    /* margin-top: 64px; */
    display: flex;
    flex-direction: column;
    padding: 40px 75px 0;
    width: 100%;
  }

  .pageTitle {
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 32px;
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
