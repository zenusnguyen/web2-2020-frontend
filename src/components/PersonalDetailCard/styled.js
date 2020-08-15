import styled from "styled-components";

export const InforLineStyled = styled.div`
  display: flex;
  flex-direction: row;
  .title2 {
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
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0px 4px 16px rgba(35, 35, 35, 0.06);
  .groupImage {
    margin-top: 16px;
    display: flex;
    flex-direction: row;
  }
  .identificationImage {
    width: 440px;
    height: 280px;
    border-radius: 8px;

    object-fit: cover !important;
  }
`;

export default CardStyled;
