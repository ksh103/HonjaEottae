import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 150px;
  background-color: #f5f5f5;
  div {
    padding-top: 10px;
  }
`;
const ChatIcons = styled.div`
  position: fixed;
  bottom: 50px;
  right: 70px;
  font-size: 60px;
  color: #5496ff;
  cursor: pointer;
  :hover {
    color: #2666fc;
    transform: scale(1.1);
    transition: 0.5s linear;
  }
`;

export { Wrapper, ChatIcons };
