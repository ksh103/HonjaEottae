import type { NextPage } from 'next';
import { Space, Card } from 'antd';
import { ImageWrapper } from '../Register/Register.style';

const CourseForm: NextPage = () => {
  return (
    <Space id="space" direction="vertical" style={{ height: '211px' }}>
      <ImageWrapper>
        <div id="image">
          <img src="/images/1.png" />
        </div>
        <div id="title">원주에서 만나는 역사와 문학의 향기</div>
      </ImageWrapper>
    </Space>
  );
};

export default CourseForm;
