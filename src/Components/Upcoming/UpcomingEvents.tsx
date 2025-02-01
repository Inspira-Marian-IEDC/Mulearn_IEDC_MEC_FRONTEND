import styles from "./UpcomingEvents.module.css";
import data from "../../../data.json";

const UpcomingEvents = () => {
  return (
    <div className={styles.events}>
      <h2>Upcoming Events</h2>
      <div className={styles.innerDiv}>
        <button 
          className={`${styles.card} ${styles.large}`} 
          onClick={() => window.location.href = data["events"][0].link}
        >
          <div className={styles.content}>
            <div className={styles.date}>
              <span>{data["events"][0].month}</span>
              <span>{data["events"][0].date}</span>
            </div>
            <div className={styles.text}>
              <strong>{data["events"][0].head}</strong>
              <span>{data["events"][0].para}</span>
            </div>
          </div>
          <img src={data["events"][0].img} alt="" />
        </button>
        
        <div className={styles.subContent}>
          {data.events.slice(1).map((event, index) => (
            <button 
              className={`${styles.card} ${styles.small}`} 
              key={index} 
              onClick={() => window.location.href = event.link}
            >
              <div className={styles.content}>
                <div className={styles.date}>
                  <span>{event.month}</span>
                  <span>{event.date}</span>
                </div>
                <div className={styles.text}>
                  <strong>{event.head}</strong>
                  <span>{event.para}</span>
                </div>
              </div>
              <img src={event.img} alt="" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
