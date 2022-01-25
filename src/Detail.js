import React, { useState } from "react";
import styled from "styled-components";
import { useHistory, useParams } from "react-router-dom";

const Detail = (props) => {
  const history = useHistory();
  const param = useParams();
  const [rate, setRate] = useState(0);

  return (
    <>
      <DetailWrap>
        <DetailTitle>{param.week_day}요일 평점 남기기</DetailTitle>
        <StarWrap>
          {/* 아래 DetailStar 는 map 을 돌려서 붙여야 할 듯함
        인덱스 넘버를 받아 오고 그걸 이용해서 색깔이 칠해지는 방향으로 생각해보자 */}
          {Array.from({ length: 5 }, (value, index) => {
            return (
              <DetailStar
                key={index}
                onClick={() => {
                  setRate(index + 1);
                }}
                style={{ backgroundColor: rate < index + 1 ? "red" : "yellow" }}
              ></DetailStar>
            );
          })}
        </StarWrap>
        <DetailBtn
          onClick={() => {
            history.goBack();
          }}
        >
          평점 남기기
        </DetailBtn>
      </DetailWrap>
    </>
  );
};

const DetailWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-top: 5vh;
`;

const DetailTitle = styled.h3`
  font-size: 1em;
`;
const StarWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: 10px;
`;

const DetailStar = styled.div`
  width: 1em;
  height: 1.5em;
  background-color: #4f403e;
  opacity: 0.5;
  border: 1px solid white;
  border-radius: 0.5em;
  margin: 3px;
`;

const DetailBtn = styled.button`
  background-color: purple;
  border: purple;
  border-radius: 1.5em;
  color: white;
  padding: 16px 32px;
`;
export default Detail;
