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
  .icon {
    width: 32px;
    height: 32px;
    img {
      width: 32px;
      height: 32px;
    }
  }

  p {
    font-size: 20px;
    font-weight: 500;
    line-height: 150%;
    margin-bottom: 0;
    color: #333435;
  }

  .detail-left {
    margin-left: 24px;
    display: flex;
    flex-direction: column;
  }

  .detail-right {
    display: flex;
    flex-direction: column;
    text-align: right;
    margin-left: auto;
  }

  p.subtext {
    font-size: 14px;
    font-weight: 500;
    line-height: 140%;
    color: #828485;
  }
  .withStatus {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-right: auto;

  }
  .status {
    width: 52px;
    height: 24px;
    background: #56cd67;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 12px;
    p {
      margin: 0;
      font-weight: normal;
      font-size: 12px;
      line-height: 130%;
      color: #ffffff;
    }
  }
`;

export default CardStyled;
