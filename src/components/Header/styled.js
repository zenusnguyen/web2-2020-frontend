import styled from "styled-components";

const HeaderStyle = styled.div`
  width: 100%;
  height: ${(props) => props.Height || "64px"};
  background-color: #ffffff;
  display: flex;
  box-shadow: ${(props) =>
    props.Shadow || "0px 4px 16px rgba(35, 35, 35, 0.06)"};
  display: flex;
  align-items: center;

  .logo {
    margin-left: 64px;
    width: 118px;
    height: 48px;
  }

  .cta {
    display: ${(props) => props.CTA || "none"};
    flex-direction: column;
    margin-right: 64px;
    margin-left: auto;
    align-items: center;
    p {
      margin: 0;
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 160%;
      text-align: right;
      color: #3540a8;
    }
  }
`;

export default HeaderStyle;
