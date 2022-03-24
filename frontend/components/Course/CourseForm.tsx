import { Space } from 'antd';
import { ImageWrapper } from '../Register/Register.style';
import Link from 'next/link';

export interface CourseFormProps {
  courseName: string;
  courseId: number;
}
const CourseForm = ({ courseName, courseId }: CourseFormProps) => {
  return (
    <Space id="space" direction="vertical" style={{ height: '211px' }}>
      <Link href={`/course/${courseId}`}>
        <ImageWrapper>
          <div id="image">
            <img src="/images/1.png" />
          </div>
          <div id="title">{courseName}</div>
        </ImageWrapper>
      </Link>
    </Space>
  );
};

export default CourseForm;
