import {ADD_PROJECT, DELETE_PROJECT} from '../actions/actionTypes';

const inititalState = {
  projects: [
    {
      id: 1,
      title: 'Hello',
    }, 
    {
      id: 2,
      title: 'we',
    }, 
    {
      id: 3,
      title: 'are',
    },
    {
      id: 4,
      title: 'the',
    },
    {
      id: 5,
      title: 'hight',
    }
  ],
}

const projects = (state = inititalState, action) => {
  switch (action.type) {
    case ADD_PROJECT:
      return {...state, projects: [...state.projects, action.payload]};
    case DELETE_PROJECT:
      return {...state, projects: state.projects.filter(project => project.id !== action.payload) };
    default:
      return state
  }
};

export default projects;