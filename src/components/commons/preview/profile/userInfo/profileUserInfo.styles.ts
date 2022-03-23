import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
`;
export const WrapperHeader = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 36px;
`;
export const ImgBox = styled.div`
  width: 35%;
  height: 30vw;
  margin-left: 20px;
  img {
    width: 85%;
    height: 100%;
    border-radius: 50%;
  }
`;

export const InfoBox = styled.div`
  width: 65%;
  /* border: 1px solid black; */
  margin-top: 2px;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Name = styled.div`
  width: 100%;

  span {
    font-size: 24px;
    font-weight: bold;
    color: #c4c4c4;
  }
`;
export const Position = styled.div`
  width: 100%;
  padding: 10px 0px;
  span {
    font-size: 16px;
    margin-right: 12px;
  }
  img {
    margin-right: 8px;
  }
`;
export const Tag = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const LineBox = styled.div`
  width: 100%;
  display: flex;
  border-top: 0.75px solid #ededed;
  border-bottom: 0.75px solid #ededed;
  /* transform: rotate(0.05deg); */
`;

export const Detail = styled.div`
  width: 100%;
  display: flex;
  padding: 15px 0px 15px 0px;
  span {
    font-size: 16px;
    color: #bbbbbb;
    display: block;
    width: 50%;
    text-align: center;
    :hover{
      cursor: pointer;
      color: #0D223A;
    }
  }
`;
export const WrapperDetail = styled.div``;
