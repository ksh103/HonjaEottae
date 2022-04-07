import Link from 'next/link';
import { CourseImageWrapper } from './Course.style';

export interface CourseFormProps {
  courseName: string;
  courseId: number;
  imgSrc: string;
}
const CourseForm = ({ courseName, courseId, imgSrc }: CourseFormProps) => {
  return (
    <Link href={`/course/${courseId}`}>
      <CourseImageWrapper>
        <div className="course-card-image">
          <img src={imgSrc} />
        </div>
        <div className="course-card-name">{courseName}</div>
      </CourseImageWrapper>
    </Link>
  );
};

export default CourseForm;
