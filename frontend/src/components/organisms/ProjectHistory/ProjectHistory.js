import React, { useState } from "react";

import './ProjectHistory.scss';
import ProjectHistoryItem from "../../molecules/ProjectHistoryItem/ProjectHistoryItem";


export default function ProjectHistory() {

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
        <p className="project-history__month-text"> 2023/07</p>
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
            memo='参考書一冊完了' />
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
