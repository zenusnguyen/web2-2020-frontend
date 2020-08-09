import styled from "styled-components";

const SideMenuStyle = styled.div`
  /* position: absolute; */
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  width: 260px !important;
  /* position: absolute; */
  min-height: 508px;
  background-color: #ffffff;

  /* align-items: center; */
  justify-content: flex-start;
  align-items: center;
  img {
    height: 48px;
    width:90%;
  }
  .listMenu {
    margin-top: 24px;
    padding-left: 24px;
    width: 250px;
    display: flex;
    flex-direction: column;
  }
`;

export default SideMenuStyle;
