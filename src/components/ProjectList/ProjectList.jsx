import { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ProjectCard } from '../ProjectCard/ProjectCard';
import { Modal } from '../Modal/Modal';
import { useForm } from '../../hooks/useForm';

export const ProjectList = ({ projects, addProject, removeProject }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { values, setValues, handleChange } = useForm();

  const handleOpen = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const handleAddProject = (evt) => {
    evt.preventDefault();
    addProject(values.title);
    setValues('');
    handleOpen();
  };

  const handleRemoveProject = (id) => {
    removeProject(id);
  };

  // Close by Esc & Click
  useEffect(() => {
    function closeByEscape(evt) {
      if (evt.key === 'Escape' || evt.target.classList.contains('modal')) {
        handleOpen();
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', closeByEscape);
      document.addEventListener('mouseup', closeByEscape);

      return () => {
        document.removeEventListener('keydown', closeByEscape);
        document.removeEventListener('mouseup', closeByEscape);
      };
    }
  }, [handleOpen, isOpen]);

  const hasProject = `${projects.length ? 'project-list' : 'empty-projects'}`;

  return (
    <div className='projects-container'>
      <div>
        <ul className={hasProject}>
          {projects.length === 0 ? (
            <h2>No projects yet</h2>
          ) : (
            projects.map((project) => (
              <li key={project.id} className='item'>
                <ProjectCard key={project.id} removeProject={handleRemoveProject} {...project} />
              </li>
            ))
          )}
        </ul>
      </div>

      <button className='btn-primary' onClick={handleOpen}>
        + new Project
      </button>
      <Link to='/tasks'>
        <button className='btn-secondary'>Tasks</button>
      </Link>

      <Modal
        isOpen={isOpen}
        onClose={handleOpen}
        addProject={handleAddProject}
        onChange={handleChange}
        value={values}
      />
    </div>
  );
};
