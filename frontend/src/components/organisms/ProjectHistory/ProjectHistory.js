import React, { useState, useEffect } from "react";
import axios from 'axios';

import { useAuth } from "../../../contexts/AuthContext";
import { useFlashMessageContext } from "../../../contexts/FlashMessageContext";
import { useProjectContext } from "../../../contexts/ProjectContext";

import './ProjectHistory.scss';
import ProjectHistoryItem from "../../molecules/ProjectHistoryItem/ProjectHistoryItem";


export default function ProjectHistory() {

  const { user } = useAuth();
  const { selectedProjectId, setTotal } = useProjectContext();
  const { setFlashMessage, setShowFlashMessage } = useFlashMessageContext();
  const [isLoading, setIsLoading] = useState(true);

  const [histories, setHistories] = useState([]);

  useEffect(() => {
    const handleLoad = async () => {
      const requestUrl = `http://localhost:3001/api/users/${user.id}/projects/${selectedProjectId}/histories`;
      await axios.get(requestUrl, { withCredentials: true })
        .then(response => {
          if (response.data.status === 'ok') {
            setShowFlashMessage(false);
            setHistories(response.data.histories);
            setTotal(response.data.total);
          } else {
            setShowFlashMessage(true);
            setFlashMessage({ type: 'error', message: 'データの取得に失敗しました' });
            console.log(response);
          }
        }).catch(error => {
          console.log('【React】Railsで何か問題があるようです', error);
        })
      setIsLoading(false);
    };

    handleLoad();
  }, [selectedProjectId]);

  const sectionData = histories?.map((value, idx) => {
    const targetMonth = Object.keys(value)[0];
    const dataArray = value[targetMonth];
    return (
      <dd key={idx}>
        <ProjectHistorySection targetMonth={targetMonth} dataArray={dataArray} />
      </dd>
    );
  }
  )

  return (
    <div className="project-history">
      <div className="project-history__sections-wrapper">
        <dl>{sectionData}</dl>
      </div>
    </div>
  )
}

function ProjectHistorySection({ targetMonth, dataArray }) {

  const dayMap = ['日', '月', '火', '水', '木', '金', '土'];
  let previous_date = '';

  const getItemData = dataArray.map((value, idx) => {
    const startDate = new Date(value.start_timestamp);

    const totalMins = Math.round(value.total / (60 * 1000));
    const totalHours = Math.floor(totalMins / 60);
    const total = `${totalHours}時間 ${(totalMins % 60).toString().padStart(2, '0')}分`

    const date = value.target_date;
    const display_date = (date !== previous_date) ?
      `${date}（${dayMap[startDate.getDay()]}）`
      : undefined;
    previous_date = date;

    return (
      <li key={idx}>
        <ProjectHistoryItem
          date={display_date}
          start_timestamp={value.start_timestamp}
          end_timestamp={value.end_timestamp}
          total={total}
          memo={value.memo} />
      </li>
    );
  });


  return (
    <div className="project-history__section-per-month">
      <div className="project-history__month">
        <div className="project-history__month-decorator"></div>
        <p className="project-history__month-text">{targetMonth}</p>
        <div className="project-history__month-decorator"></div>
      </div>
      <div className="project-history__items-wrapper">
        <div className="project-history__items-container">
          {getItemData}
        </div>
      </div>
    </div>
  )
}
