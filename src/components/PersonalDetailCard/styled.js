import styled from "styled-components";

export const InforLineStyled = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  .title {
    width: 200px;
    font-size: 16px;
    font-weight: 500;
    color: #828485;
  }
  .detail {
    font-size: 16px;
    font-weight: 600;
    color: #333435;
  }
`;

const CardStyled = styled.div`
  width: 1040px;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 16px;
  padding: 32px;
  margin-bottom: 40px;
`;

export default CardStyled;
