import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Main = (props) => {
  const history = useHistory();
  //   const [날짜] = useState(["월", "화", "수", "목", "금", "토", "일"]);
  const [날짜] = useState([
    { day: "월", rate: Math.floor(Math.random() * 5) },
    { day: "화", rate: Math.floor(Math.random() * 5) },
    { day: "수", rate: Math.floor(Math.random() * 5) },
    { day: "목", rate: Math.floor(Math.random() * 5) },
    { day: "금", rate: Math.floor(Math.random() * 5) },
    { day: "토", rate: Math.floor(Math.random() * 5) },
    { day: "일", rate: Math.floor(Math.random() * 5) },
  ]);
  // let random_week_day = 날짜.map((date, i) => {
  //   return {
  //     day: date,
  //     rate: Math.floor(Math.random() * 4),
  //   };
  // });

  // console.log(random_week_day);
  return (
    <>
      <Wrapper>
        <Title>내 일주일의 점수는???</Title>
        {날짜.map((date, i) => {
          return (
            <Week key={i}>
              <Date>{date.day}</Date>
              {Array.from({ length: 5 }, (value, index) => {
                return (
                  <Star
                    key={index}
                    style={{
                      backgroundColor: date.rate < index ? "#eee" : "yellow",
                    }}
                  ></Star>
                );
              })}
              <Triangle
                onClick={() => {
                  history.push(`/detail/${date.day}`);
                }}
              ></Triangle>
            </Week>
          );
        })}
      </Wrapper>
    </>
  );
};

// style={{
//     width: "30px",
//     height: "30px",
//     borderRadius: "30px",
//     margin: "5px",
//     backgroundColor: w.rate < idx ? "#ddd" : "#ffeb3b",
//   }}

const Wrapper = styled.div`
  height: 80%;
`;
const Title = styled.h3`
  font-size: 1em;
  text-align: center;
  padding-top: 5vh;
`;

const Week = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 3em;
  width: 90%;
  padding: 5px;
  background-color: #ccc;
  margin: 5px auto;
  border-radius: 10px;
`;

const Date = styled.h5`
  font-weight: bold;
  font-size: 1.2em;
`;

const Star = styled.div`
  height: 2em;
  width: 2em;
  background-color: #eee;
  border: 1px solid #eee;
  border-radius: 50%;
`;

const Triangle = styled.div`
  width: 0px;
  height: 0px;
  border-left: 2em solid #333;
  border-top: 1em solid transparent;
  border-bottom: 1em solid transparent;
`;

export default Main;
