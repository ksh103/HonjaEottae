import type { NextPage } from 'next';
import CourseForm from './CourseForm';

import { CourseFormWrapper } from './CourseComp.style';
const CourseList: NextPage = () => {
  return (
    <>
      <CourseFormWrapper>
        <CourseForm />
        <CourseForm />
        <CourseForm />
        <CourseForm />
        <CourseForm />
        <CourseForm />
        <CourseForm />
        <CourseForm />
        <CourseForm />
        <CourseForm />
        <CourseForm />
      </CourseFormWrapper>
    </>
  );
};

export default CourseList;
