import React, { useEffect } from "react";

import ProjectListItem from "../../atoms/ProjectListItem/ProjectListItem";
import LinkButton from "../../molecules/LinkButton/LinkButton";
import Modal from "../../molecules/Modal/Modal";
import InputBoxWithCount from "../../molecules/InputBox/InputBoxWithCount";
import Button from "../../molecules/Button/Button";

import { useProjectList } from "../../../hooks/ProjectList.hook";
import './ProjectList.scss';


export default function ProjectList() {

  const {
    projects,
    selectedProjectId,
    setSelectedProjectId,
    isLoading,
    showModal,
    setShowModal,
    handleLoad,
    handleFormAction,
    handleInputValue,
  } = useProjectList();


  useEffect(() => {
    console.log('エフェクトが呼ばれた')
    handleLoad();
  }, []);

  return (
    <div className="project-list">
      {showModal &&
        <Modal
          title='プロジェクトの追加'
          children={
            <ModalContent
              closeModal={() => setShowModal(false)}
              handleFormAction={handleFormAction}
              handleInputValue={handleInputValue}
            />
          }
          handleClick={() => setShowModal(false)} />
      }
      <div className="project-list__overview">
        <h2 className="project-list__title">プロジェクトを選択</h2>
        <LinkButton className="project-list__link-button" label="プロジェクトを追加" handleClick={() => setShowModal(true)} />
      </div>
      <div className="project-list__items-container">
        <div className="project-list__items">
          {isLoading ?
            <h1>ロード中</h1>
            :
            projects.map(project =>
              <li key={project.id}>
                <ProjectListItem
                  state={selectedProjectId === project.id ? 'selected' : 'normal'}
                  label={project.name}
                  handleClick={() => setSelectedProjectId(project.id)}
                />
              </li>
            )}
        </div>
      </div>
    </div>
  )
}

function ModalContent({ handleFormAction, handleInputValue }) {

  return (
    <form onSubmit={handleFormAction}>
      <div className="modal-content">
        <InputBoxWithCount
          label='プロジェクト名'
          placeholder='プロジェクト名を入力'
          max_char={15}
          handleInputValue={{ callback: handleInputValue, fieldName: 'projectName' }}
        />
        <Button
          className='modal-content__button'
          type='submit'
          label='作成' />
      </div>
    </form>
  )
}
