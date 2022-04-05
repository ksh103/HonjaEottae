import styled from 'styled-components';

const ChatWrapper = styled.div``;

const ChatBlock = styled.div`
  .app__wrap {
    color: white;
    margin: 0 auto;
    padding: 60px 0 0;
    position: relative;
    max-width: 350px;
    min-width: 200px;
    font-size: 14px;
    box-sizing: border-box;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  }
  .app__info {
    position: absolute;
    top: 0;
    width: 100%;
    text-align: center;
    line-height: 50px;
    color: #fff;
    font-size: 30px;
    font-family: 'Jalnan';
    background: ${props => props.theme.colors.pointColor};
  }
  .app__title {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    background: #ff9999;
    color: white;
    text-align: center;
  }
  .app__window {
    color: black;
    overflow-y: auto;
    padding: 10px 20px;
    height: 350px;
    background: #ffffff;
  }
  .username {
    font-size: 12px;
    padding-left: 5px;
  }
  .message {
    text-align: right;
    margin-top: 5px;
  }
  .message .message-text {
    display: inline-block;
    background-color: #f8ff36;
    padding: 6px 10px;
    border-radius: 10px;
    margin-top: 3px;
  }
  .my-message {
    margin-top: 5px;
  }
  .my-message .message-text {
    display: inline-block;
    background-color: #6e6e6e;
    padding: 5px 10px;
    border-radius: 10px;
    margin-top: 3px;
  }
  .output__user {
    margin: 0;
    margin-bottom: 10px;
  }
  .output__user__name {
    margin-right: 10px;
    font-weight: 700;
  }
  .app__input__wrap {
    height: 60px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 10px;
    background: #ff9999;
  }
  .app__input__wrap:after {
    content: '';
    display: block;
    clear: both;
  }
  .app__input {
    color: black;
    width: 80%;
    height: 30px;
    border: 1px solid #ccc;
    box-sizing: border-box;
  }
  .app__button {
    color: white;
    width: 20%;
    margin-left: 10px;
    height: 30px;
    border: 1px solid #ccc;
    border-left: 0;
    background: ${props => props.theme.colors.pointColor};
    box-sizing: border-box;
    cursor: pointer;
    border-radius: 10px;
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
  @media ${props => props.theme.mobile} {
    font-size: 35px;
    bottom: 20px;
    right: 20px;
  }
`;

export { ChatWrapper, ChatBlock, ChatIcons };
