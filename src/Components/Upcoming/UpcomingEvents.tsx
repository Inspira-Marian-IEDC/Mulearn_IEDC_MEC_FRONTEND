import styles from "./UpcomingEvents.module.css";
import data from "../../../data.json";

const UpcomingEvents = () => {
  return (
    <div className={styles.events}>
      <h2>Upcoming Events</h2>
      <div className={styles.innerDiv}>
        <div className={styles.card + " " + styles.large}>
          <div className={styles.content}>
            <div className={styles.date}>
              <span>{data["Upcomingevents"][0].month}</span>
              <span>{data["Upcomingevents"][0].date}</span>
            </div>
            <div className={styles.text}>
              <strong>{data["Upcomingevents"][0].head}</strong>
              <span>{data["Upcomingevents"][0].para}</span>
            </div>
          </div>
          <img src={data["Upcomingevents"][0].img} alt="" />
        </div>
        <div className={styles.subContent}>
          {data.events.slice(1).map((event, index) => {
            return (
              <div className={styles.card + " " + styles.small} key={index}>
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
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
