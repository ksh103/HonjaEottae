import Link from 'next/link';
import React from 'react';
import { TypeCourseBlock } from './Travel.style';

interface TypeCourseType {
  no: number;
  title: string;
  image: string;
}

export default function TypeCourse({ no, title, image }: TypeCourseType) {
  return (
    <TypeCourseBlock>
      <Link href={`/course/${no}`}>
        <img src={image} />
      </Link>
      <div className="type-title">{title}</div>
    </TypeCourseBlock>
  );
}
