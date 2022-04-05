import { Space } from 'antd';
import Link from 'next/link';
import { CourseImageWrapper } from './Course.style';

export interface CourseFormProps {
  courseName: string;
  courseId: number;
  imgSrc: string;
}
const CourseForm = ({ courseName, courseId, imgSrc }: CourseFormProps) => {
  return (
    <Space id="space" direction="vertical" style={{ height: '211px' }}>
      <Link href={`/course/${courseId}`}>
        <CourseImageWrapper>
          <div id="image">
            <img src={imgSrc} />
          </div>
          <div id="title">{courseName}</div>
        </CourseImageWrapper>
      </Link>
    </Space>
  );
};

export default CourseForm;
