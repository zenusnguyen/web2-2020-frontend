import styled from "styled-components";

const CardStyled = styled.div`
  width: 950px;
  height: 210px;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  padding: 16px;
  border-radius: 16px;
  margin-bottom:40px;
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
      font-size: 14px;
      font-weight: 500;
    }
  }
`;

export default CardStyled;
