import React, { useState, useEffect } from "react";
import axios from 'axios';

import { useAuth } from "../../../contexts/AuthContext";
import { useFlashMessageContext } from "../../../contexts/FlashMessageContext";
import { useProjectContext } from "../../../contexts/ProjectContext";

import './ProjectHistory.scss';
import ProjectHistoryItem from "../../molecules/ProjectHistoryItem/ProjectHistoryItem";


export default function ProjectHistory() {

  const { user } = useAuth();
  const { selectedProjectId } = useProjectContext();
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
            setHistories(response.data.projects);
            console.log(response.data.projects);
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
  }, []);


  const dayMap = ['日', '月', '火', '水', '木', '金', '土'];
  let previousMonth = undefined;
  let previousDate = undefined;

  histories?.map((history) => {
    const startTime = new Date(history.start_timestamp);
    const startYear = startTime.getFullYear();
    const startMonth = startTime.getMonth();
    const startDate = startTime.getDate();
    const startDay = dayMap[startTime.getDay()];
    const startHour = startTime.getHours();
    const startMin = startTime.getMinutes();

    const endTime = new Date(history.end_timestamp);
    const endHour = endTime.getHours();
    const endMin = endTime.getMinutes();

    const total = history.total;


    function format(original) {
      const formatted = original.toString().padStart(2, '0');
      return formatted;
    }
    previousMonth ||= startMonth;
    previousDate ||= startDate;

    // 出力用に必要
    const targetMonthStr = `${format(startYear)} / ${format(startMonth)}`;
    const targetDateStr = `${format(startMonth)} / ${format(startDate)}（${startDay}）`;
    const startTimeStr = `${format(startHour)}:${format(startMin)}`;
    const endTimeStr = `${format(endHour)}:${format(endMin)}`;

    console.log(targetDateStr);
    console.log(`${startTimeStr}~${endTimeStr}`);
  }
  )

  return (
    <div className="project-history">
      <div className="project-history__sections-wrapper">
        <ProjectHistorySection />
        <ProjectHistorySection />
        <ProjectHistorySection />
      </div>
    </div>
  )
}


const d1 = new Date('2023-07-25T08:44:00').getTime();
const d2 = new Date('2023-07-25T12:02:00').getTime();
const d3 = new Date('2023-07-24T09:12:00').getTime();
const d4 = new Date('2023-07-24T09:18:36').getTime();

function ProjectHistorySection() {
  return (
    <div className="project-history__section-per-month">
      <div className="project-history__month">
        <div className="project-history__month-decorator"></div>
        <p className="project-history__month-text"> 2023/07</p>
        <div className="project-history__month-decorator"></div>
      </div>
      <div className="project-history__items-wrapper">
        <div className="project-history__items-container">

          <ProjectHistoryItem
            date='07/25（火）'
            start_timestamp={d3}
            end_timestamp={d4}
            total={(d2 - d1) + (d4 - d3)}
            memo='フレックスボックスのコツがなんとなく掴めてきたような気がするのである' />
          <ProjectHistoryItem
            start_timestamp={d3}
            end_timestamp={d4} />
          <ProjectHistoryItem
            date='07/25（火）'
            start_timestamp={d3}
            end_timestamp={d4}
            total={(d2 - d1) + (d4 - d3)}
            memo='フレックスボックスのコツがなんとなく掴めてきたような気がするのである' />
        </div>
      </div>
    </div>
  )

}

const sampleData = [
  {
    id: 1,
    start_timestamp: 1690252641901,
    end_timestamp: 1690252902370,
    memo: 'Reactのカスタムフックの使い方がわかった'
  },
  {
    id: 1,
    start_timestamp: 1690252641901,
    end_timestamp: 1690252902370,
    memo: 'Reactのカスタムフックの使い方がわかった'
  },
];
