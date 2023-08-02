import React, { useEffect } from "react";
import { useProjectContext } from "../../../contexts/ProjectContext";
import { useProjectHistory } from "../../../hooks/ProjectHistory.hook";

import { ProjectHistorySection } from "./ProjectHistorySection";
import './ProjectHistory.scss';
import Loader from "../../molecules/Loader/Loader";

export default function ProjectHistory() {

  const { selectedProjectId, setTotal, lastUpdated } = useProjectContext();

  const {
    isLoading,
    handleLoad,
    histories,
  } = useProjectHistory({ selectedProjectId, setTotal });

  useEffect(() => {
    handleLoad();
  }, [selectedProjectId, lastUpdated]);

  const sectionContent = histories?.map((obj, idx) => {
    const targetMonth = Object.keys(obj)[0];
    const dataArray = obj[targetMonth];
    return (
      <dd key={idx}>
        <ProjectHistorySection targetMonth={targetMonth} dataArray={dataArray} />
      </dd>
    );
  })

  return (
    <div className="project-history">
      <div className="project-history__sections-wrapper">
        {isLoading ? <Loader size='large' /> :
          histories.length === 0 ?
            <WhenNoContent />
            : <dl>{sectionContent}</dl>
        }
      </div>
    </div>
  )
}

function WhenNoContent() {
  return (
    <div className="when-no-content">
      <p>まだ記録がありません</p>
    </div>
  );
}