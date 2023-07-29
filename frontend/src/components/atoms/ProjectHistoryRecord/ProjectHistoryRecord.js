import './ProjectHistoryRecord.scss';

export default function ProjectHistoryRecord({ start_timestamp, end_timestamp }) {

  const duration = Math.round((end_timestamp - start_timestamp) / 60000);
  const start_hour = getFormattedHours(start_timestamp);
  const start_min = getFormattedMins(start_timestamp);
  const end_hour = getFormattedHours(end_timestamp);
  const end_min = getFormattedMins(end_timestamp);


  return (
    <div className="project-history-record">
      <p className="project-history-record__duration">{duration}分</p>
      <div className="project-history-record__time-container">
        <p className="project-history-record__time">{start_hour} : {start_min} - {end_hour} : {end_min}</p>
      </div>
    </div>
  )
}

function getFormattedHours(timestamp) {
  return new Date(timestamp).getHours().toString().padStart(2, '0')
}

function getFormattedMins(timestamp) {
  return new Date(timestamp).getMinutes().toString().padStart(2, '0')
}