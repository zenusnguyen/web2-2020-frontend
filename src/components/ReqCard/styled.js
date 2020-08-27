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
  min-width: 700px;
  width: 100%;
  justify-content: space-between;
  .icon {
    width: 32px;
    height: 32px;
    img {
      width: 32px;
      height: 32px;
    }
  }

  .detail-left {
    margin-left: 24px;
    display: flex;
    flex-direction: column;
    p {
      font-size: 20px;
      font-weight: 500;
      line-height: 150%;
      margin-bottom: 0;
      color: #333435;
    }
  }

  .detail-right {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    font-size: 14px;
    line-height: 140%;
  }
  .left {
    margin-top: 0px;
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
