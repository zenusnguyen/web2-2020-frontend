import styled from "styled-components";

const PopUp = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 493px;
  height: 280px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 24px 48px rgba(35, 35, 35, 0.08);
  /* padding-right: 32px;
  padding-left: 32px; */
  .bot {
    flex: 2;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 30%;
    background-color: #f5f7f9;
    padding-right: 32px;
    /* padding-left: 32px; */
  }
  .top {
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    margin-top: 40px;
    margin-left: 32px;
    flex: 3;
    padding-right: 32px;
    padding-left: 32px;
  }
  .title {
    font-size: 32px;
    line-height: 150%;
    font-style: normal;
    font-weight: 600;
  }
  .detail {
    font-size: 16px;
    line-height: 150%;
  }
`;

export default PopUp;
