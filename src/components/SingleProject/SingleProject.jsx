import { useNavigate, useParams } from 'react-router-dom';

export const SingleProject = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div>
      <h3>Single Project {id}</h3>
      <button className='btn-secondary' onClick={() => navigate(-1)}>
        Back Home
      </button>
    </div>
  );
};
