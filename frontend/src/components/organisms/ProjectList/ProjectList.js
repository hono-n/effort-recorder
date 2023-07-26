import React, { useState, useEffect } from "react";
import './ProjectList.scss';
import ProjectListItem from "../../atoms/ProjectListItem/ProjectListItem";

import LinkButton from "../../molecules/LinkButton/LinkButton";
import { useAuth } from "../../../contexts/AuthContext";
import { useFlashMessageContext } from "../../../contexts/FlashMessageContext"; 
import axios from 'axios'


export default function ProjectList() {

  const { user } = useAuth();
  const { setShowFlashMessage, setFlashMessage } = useFlashMessageContext();

  const [projects, setProjects] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const requestUrl = `http://localhost:3001/api/users/${user.id}/projects`;

  useEffect(() => {
    const loadProjects = async () => {
      await axios.get(requestUrl, { withCredentials: true })
        .then(response => {
          if (response.data.status === 'ok') {
            setShowFlashMessage(false);
            setProjects(response.data.projects);
          } else {
            setShowFlashMessage(true);
            setFlashMessage({ type: 'error', message: 'データの取得に失敗しました' });
          }
        }).catch(error => {
          console.log('【React】Railsで何か問題があるようです', error);
        })
      setIsLoading(false);
    };
    loadProjects();
  }, []);

  return (
    <div className="project-list">
      <div className="project-list__overview">
        <h2 className="project-list__title">プロジェクトを選択</h2>
        <LinkButton className="project-list__link-button" label="プロジェクトを追加" />
      </div>
      <div className="project-list__items-container">
        <div className="project-list__items">
          {isLoading ?
            <h1>ロード中</h1>
            :
            projects.map(project =>
              <li key={project.id}>
                <ProjectListItem state='normal' label={project.name} />
              </li>
            )}
        </div>
      </div>
    </div>
  )

}
