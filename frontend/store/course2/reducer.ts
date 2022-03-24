import { createReducer } from 'typesafe-actions';
import { Course2Action, Course2State } from './types';
import produce from 'immer';
import { GET_POPULAR_COURSES_SUCCESS } from './actions';

const initialState: Course2State = {
  popularCourses: [],
};

const course2 = createReducer<Course2State, Course2Action>(initialState, {
  [GET_POPULAR_COURSES_SUCCESS]: (state, action) =>
    produce(state, draft => {
      draft.popularCourses = action.payload;
    }),
});

export default course2;
