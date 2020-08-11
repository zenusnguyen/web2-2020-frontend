import styled from "styled-components";

const LandingPageStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 1;
  font-family: "Red Hat Display", sans-serif;
  background: #ffffff;

  h1 {
    margin: auto;
    font-style: normal;
    font-weight: 700;
    font-size: 100px;
    line-height: 100%;
    display: flex;
    text-align: center;
    color: #3540a8;
    margin-bottom: 32px;
  }

  h2 {
    margin: 0;
    font-style: normal;
    font-weight: 700;
    font-size: 60px;
    line-height: 100%;
    text-align: center;
    color: #3540a8;
  }

  h3 {
    margin: 0;
    font-style: normal;
    font-weight: 700;
    font-size: 44px;
    line-height: 100%;
    text-align: left;
    color: #3540a8;
  }

  h4 {
    margin: 0;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 160%;
    color: #3540a8;
  }

  .CTAbutton {
    width: 214px;
    height: 56px;
    background: #feba46;
    box-shadow: 0px 16px 64px rgba(35, 35, 35, 0.16);
    border: none;
    border-radius: 8px;
    text-align: center;
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 150%;
    color: #ffffff;
    margin: 0;
  }

  .cardPlus {
    display: flex;
    flex-direction: row;
    margin: 120px 165px;
    align-items: center;
    justify-content: center;
    border: none;
  }

  .card-left {
    display: flex;
    flex-direction: column;
  }

  .card-right {
    display: flex;
    flex-direction: column;
    text-align: right;
    margin-left: auto;
  }

  #container-limit {
    width: 1440px;
  }
`;

export default LandingPageStyle;
