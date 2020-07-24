import styled from "styled-components";

const CardStyled = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  padding: 16px 32px;
  border-radius: 16px;
  margin-bottom: 16px;
  align-items: center;
  box-shadow: 0px 4px 16px rgba(35, 35, 35, 0.06);
  height: 90px;
  justify-content: space-between;
  .icon {
    width: 32px;
    height: 32px;
    img {
      width: 32px;
      height: 32px;
    }
  }

  p {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 140%;
    /* color: #333435; */
    padding: 0px;
  }

  .detail-left {
    margin-left: 24px;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  }

  .detail-right {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .left {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  p.subtext {
    font-size: 14px;
    font-weight: 500;
    line-height: 140%;
    color: #828485;
  }
`;

export default CardStyled;
