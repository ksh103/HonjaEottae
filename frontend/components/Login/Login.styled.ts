import styled from 'styled-components';

const LoginWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${props => props.theme.colors.pointColor};
  #title {
    font-family: 'Jalnan';
    font-size: 50px;
    color: white;
    margin-bottom: 50px;
    cursor: pointer;
  }
`;

const LoginBlock = styled.div`
  width: 400px;
  height: 500px;
  background-color: ${props => props.theme.colors.backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 1vw;
  #loginName {
    font-family: 'Jalnan';
    font-size: 35px;
    color: ${props => props.theme.colors.pointColor};
    margin-bottom: 50px;
  }
  input {
    margin-top: 10px;
    width: 80%;
    height: 45px;
    border-radius: 0.2vw;
    border: none;
    outline: 1px solid gray;
    padding-left: 10px;
  }
  #loginBtn {
    margin-top: 50px;
    :active {
      transform: scale(0.98);
    }
  }
  #signup {
    margin-top: 50px;
    cursor: pointer;
  }
  @media ${props => props.theme.mobile} {
    width: 300px;
  }
`;

const SignupBlock = styled.div`
  width: 400px;
  height: 500px;
  background-color: ${props => props.theme.colors.backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 1vw;
  #loginName {
    font-family: 'Jalnan';
    font-size: 35px;
    color: ${props => props.theme.colors.pointColor};
    margin-bottom: 25px;
  }
  input {
    margin-top: 10px;
    width: 80%;
    height: 45px;
    border-radius: 0.2vw;
    border: none;
    outline: 1px solid gray;
    padding-left: 10px;
  }
  #loginBtn {
    margin-top: 40px;
  }
`;

const Button = styled.button`
  font-size: 15px;
  border: 0;
  height: 50px;
  width: 80%;
  border-radius: 0.3vw;
  background-color: ${props => props.theme.colors.pointColor};
  color: white;
  cursor: pointer;
`;

export { LoginWrapper, LoginBlock, SignupBlock, Button };
