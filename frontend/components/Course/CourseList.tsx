import CourseForm from './CourseForm';
import { CourseFormWrapper } from './Course.style';
import useDrag from './useDrag';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>; // 가로스크롤

export interface CourseListProps {
  data: {
    courseId: number;
    courseName: string;
    image: string;
  }[];
}

const CourseList = (data: CourseListProps) => {
  const datas = data.data;
  const { dragStart, dragStop, dragMove, dragging } = useDrag();
  const handleDrag =
    ({ scrollContainer }: scrollVisibilityApiType) =>
    (ev: React.MouseEvent) =>
      dragMove(ev, posDiff => {
        if (scrollContainer.current) {
          scrollContainer.current.scrollLeft += posDiff;
        }
      });

  return (
    <>
      <div onMouseLeave={dragStop}>
        <ScrollMenu
          onMouseDown={() => dragStart}
          onMouseUp={() => dragStop}
          onMouseMove={handleDrag}
        >
          <CourseFormWrapper>
            {datas.map((data, idx) => (
              <CourseForm
                courseName={data.courseName}
                courseId={data.courseId}
                imgSrc={data.image}
                key={idx}
              />
            ))}
          </CourseFormWrapper>
        </ScrollMenu>
      </div>
    </>
  );
};

export default CourseList;
