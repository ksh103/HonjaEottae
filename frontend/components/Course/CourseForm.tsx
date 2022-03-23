import { Space } from 'antd';
import { ImageWrapper } from '../Register/Register.style';

export interface CourseFormProps {
  courseName: string;
}
const CourseForm = (courseName: CourseFormProps) => {
  const name = courseName.courseName;
  return (
    <Space id="space" direction="vertical" style={{ height: '211px' }}>
      <ImageWrapper>
        <div id="image">
          <img src="/images/1.png" />
        </div>
        <div id="title">{name}</div>
      </ImageWrapper>
    </Space>
  );
};

export default CourseForm;
