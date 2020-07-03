import styled from "styled-components";

const SideMenuStyle = styled.div`
  padding-top: 24px;
  padding-left: 24px;
  display: flex;
  flex-direction: column;
  width: 250px;
  min-height: 508px;
  background-color: #ffffff;

  /* align-items: center; */
  justify-content: flex-start;
  img {
    width: 130px;
    height: 42px;
  }
  .ListMenu {
    margin-top: 24px;
    width: 250px;
    display: flex;
    flex-direction: column;
  }
`;

export default SideMenuStyle;
