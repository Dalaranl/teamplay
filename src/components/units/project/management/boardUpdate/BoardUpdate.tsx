import { Wrapper } from "../../../../../commons/styles/commonStyls";
import SubmitButton from "../../../../commons/inputs/component/submitbutton/submit.container";
import TypingInput from "../../../../commons/inputs/component/typinginput/typinginput.container";
import styled from "@emotion/styled";
import { useContext } from "react";
import { breakPoints } from "../../../../../commons/styles/breakpoint";
import { ProjectManageContext } from "../projectManage.container";
import { FETCH_PROJECT } from "../projectManage.queries";
import { gql, useMutation } from "@apollo/client";

const UPDATE_BOARD = gql`
  mutation updateBoard($boardId: String!, $title: String!, $content: String!) {
    updateBoard(boardId: $boardId, title: $title, content: $content) {
      id
    }
  }
`;

const BoardAddStyle = styled.div`
  width: 100%;
  background-color: #fff;
  flex-direction: column;
  border-radius: 20px 20px 0 0;
  display: flex;
  align-items: center;
  position: fixed;
  transition: 0.4s;
  bottom: 0;
  left: 0;
  opacity: 1;
  & > div {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  & > div > div {
    width: 100%;
  }
  z-index: 2;
  @media ${breakPoints.web} {
    bottom: 50%;
    left: 50%;
    transform: translate(-50%, 50%);
    width: 30vw;
    border-radius: 12px;
    opacity: 1;
  }
`;

const OffAdd = styled.button`
  width: 20px;
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  & > img {
    width: 100%;
  }
`;

const ModalBackground = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  display: block;
`;

interface IPropsBoardUpdate {
  boardId?: string;
}

export default function BoardUpdate(props: IPropsBoardUpdate) {
  const [updateBoard] = useMutation(UPDATE_BOARD);
  const {
    setContent,
    setTitle,
    setOnUpdate,
    setValidTitle,
    setValidContent,
    title,
    content,
    validTitle,
    validContent,
  } = useContext(ProjectManageContext);

  const onClickBoardUpdate = async () => {
    if (title === "") {
      setValidTitle && setValidTitle(true);
    } else {
      setValidTitle && setValidTitle(false);
    }

    if (content === "") {
      setValidContent && setValidContent(true);
    } else {
      setValidContent && setValidContent(false);
    }

    if (title && content) {
      try {
        await updateBoard({
          variables: {
            title,
            content,
            boardId: props.boardId,
          },
          refetchQueries: [FETCH_PROJECT],
        });

        alert("???????????? ?????????????????????.");
        setOnUpdate && setOnUpdate(false);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <ModalBackground id="modalBackground"></ModalBackground>
      <BoardAddStyle id="onBoardAdd">
        <OffAdd
          onClick={() => {
            setOnUpdate && setOnUpdate(false);
          }}
        >
          <img
            src="/img/down-arrow-black.svg"
            className="Xmark"
            alt="down-arrow"
          />
        </OffAdd>
        <Wrapper paddingTop="5px">
          <TypingInput
            label="??????"
            type="text"
            placeholder="????????? ??????????????????."
            setValues={setContent}
            id="name"
            valid={validTitle}
            errorMessage="????????? ??? ?????? ?????? ???????????? ?????????."
          />
          <TypingInput
            label="??????"
            type="text"
            placeholder="????????? ??????????????????."
            setValues={setTitle}
            id="name"
            valid={validContent}
            errorMessage="????????? ??? ?????? ?????? ???????????? ?????????."
          />
          <SubmitButton
            onClick={onClickBoardUpdate}
            btnvalue="????????? ????????????"
          />
        </Wrapper>
      </BoardAddStyle>
    </>
  );
}
