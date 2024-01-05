import { connect } from 'react-redux';
import { ProjectList } from '../components/ProjectList/ProjectList';
import { addProjectAction, deleteProjectAction } from '../redux/actions/actions';

const mapStateToProps = (state) => {
  return {
    projects: state.projects.projects,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addProject: (values) => dispatch(addProjectAction(values)),
    removeProject: (id) => dispatch(deleteProjectAction(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);