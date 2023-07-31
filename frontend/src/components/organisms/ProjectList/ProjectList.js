import React, { useEffect } from "react";

import ProjectListItem from "../../molecules/ProjectListItem/ProjectListItem";
import LinkButton from "../../molecules/LinkButton/LinkButton";
import Modal from "../../molecules/Modal/Modal";
import InputBoxWithCount from "../../molecules/InputBox/InputBoxWithCount";
import Button from "../../molecules/Button/Button";

import { useProjectContext } from "../../../contexts/ProjectContext";
import { useProjectList } from "../../../hooks/ProjectList.hook";
import './ProjectList.scss';
import Loader from "../../molecules/Loader/Loader";


export default function ProjectList() {

  const { projects, setProjects, selectedProjectId, setSelectedProjectId } = useProjectContext();

  const {
    isLoading,
    showModal, setShowModal,
    handleLoad,
    handleFormAction, updateFormData,
  }
    = useProjectList({
      projects: projects,
      setProjects: setProjects,
      selectedProjectId: selectedProjectId,
      setSelectedProjectId: selectedProjectId
    });

  useEffect(() => {
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
              updateFormData={updateFormData}
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
            <Loader size='large'/>
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

function ModalContent({ handleFormAction, updateFormData }) {

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
          className='modal-content__button'
          type='submit'
          label='作成' />
      </div>
    </form>
  )
}
