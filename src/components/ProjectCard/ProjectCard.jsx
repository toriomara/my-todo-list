import { IoTrashOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

export const ProjectCard = ({ removeProject, id, title }) => {
  return (
    <div className='project-card'>
      <div className='project-cards'>
        <Link to={`/project/${id}`}>{title}</Link>
        <i className='delete-icon' onClick={() => removeProject(id)}>
          <IoTrashOutline size={20} />
        </i>
      </div>
    </div>
  );
};
