import styled from "styled-components";

const CardStyled = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  padding: 32px;
  border-radius: 16px;
  margin-bottom: 40px;
  align-items: center;
  box-shadow: 0px 4px 16px rgba(35, 35, 35, 0.06);
  .Card {
    width: 240px;
    height: 150px;
    img {
      width: 240px;
      height: 150px;
    }
  }

  .detail {
    margin-left: 32px;
    display: flex;
    flex-direction: column;
    p {
      font-size: 16px;
      font-weight: 500;
      line-height: 150%;
      margin-bottom: 12px;
    }
  }
`;

export default CardStyled;
