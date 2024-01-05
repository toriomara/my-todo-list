import { useNavigate } from 'react-router-dom';

export const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <section className='not-found'>
      <div>
        <h1>404</h1>
        <h2>Страница не найдена</h2>
      </div>
      <button className='btn-primary' onClick={() => navigate(-1)}>
        Back
      </button>
    </section>
  );
};
