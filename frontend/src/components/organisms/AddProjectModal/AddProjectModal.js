import InputBoxWithCount from "../../molecules/InputBox/InputBoxWithCount";
import Button from "../../molecules/Button/Button";

import './AddProjectModal.scss';

export default function AddProjectModalContent({ handleFormAction, updateFormData }) {

  return (
    <form onSubmit={handleFormAction}>
      <div className="modal-content">
        <InputBoxWithCount
          label='プロジェクト名'
          placeholder='プロジェクト名を入力'
          max_char={15}
          handleInputValue={{ callback: updateFormData, fieldName: 'projectName' }}
        />
        <Button
          className='add-project-modal__button'
          type='submit'
          label='作成' />
      </div>
    </form>
  )
}