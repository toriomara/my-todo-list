import { IoCloseSharp } from 'react-icons/io5';

export const Modal = (props) => {
  const { isOpen, onClose, addProject, onChange, values } = props;

  return (
    <>
      {isOpen && (
        <div className='modal'>
          <div className='modal-content'>
            <div className='header'>
              <h3 className='title'>Create project</h3>
              <i className='icon' onClick={onClose}>
                <IoCloseSharp size={24} />
              </i>
            </div>
            <form className='form'>
              <label className='label' htmlFor='board-name'>
                Project title<span className='asterisk'>*</span>
              </label>
              <input
                className='input-primary'
                type='text'
                name='title'
                id='title'
                value={values}
                onChange={onChange}
              />
              <span>Project title is required</span>
              <button className='btn-secondary' type='submit' onClick={addProject}>
                Create
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
