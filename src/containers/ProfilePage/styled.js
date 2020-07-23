import styled from "styled-components";

const PersonalPage = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #f5f7f9;
  width: 100%;
  margin-bottom: 40px;
  /* justify-content: flex-start; */
  .bodyContainer {
    margin-top: 65px;
    display: flex;
    flex-direction: column;
    padding-left: 75px;
    margin-bottom: 60px;
  }

  .pageTitle {
    font-size: 32px;
    font-weight: bold;
  }
  .title {
    font-size: 24px;
    font-weight: 600;
  }
`;

export default PersonalPage;
