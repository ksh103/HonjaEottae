import { Spin } from 'antd';
import { NextPage } from 'next';
import { LoadingWrapper } from './Loading.style';

const Loading: NextPage = () => {
  return (
    <>
      <LoadingWrapper>
        <Spin size="large" />
      </LoadingWrapper>
    </>
  );
};

export default Loading;
