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
  justify-content: flex-start;
  
  img {
    height: 48px;
    width: 186px;
    text-align: left;
  }

  #logo {
    margin-left: 24px;
  }

  .listMenu {
    margin-top: 24px;
    padding-left: 24px;
    width: 260px;
    display: flex;
    flex-direction: column;
  }
`;

export default SideMenuStyle;
