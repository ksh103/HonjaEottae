import type { NextPage } from 'next';
import CourseForm from './CourseForm';
import { CourseFormWrapper } from './Course.style';
import useDrag from './useDrag';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

const CourseList: NextPage = () => {
  // NOTE: for drag by mouse
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
        </ScrollMenu>
      </div>
    </>
  );
};

export default CourseList;
