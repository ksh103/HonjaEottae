import type { NextPage } from 'next';
import CourseComp from '../../components/Course/CourseComp';
import MainManual from '../../components/Main/MainManual';
const Course: NextPage = () => {
  return (
    <>
      <CourseComp />
      <MainManual />
    </>
  );
};

export default Course;
