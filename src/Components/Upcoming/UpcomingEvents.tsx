import styles from "./UpcomingEvents.module.css"
import data from "../../../data.json"

const UpcomingEvents = () => {
  const upcomingEvents = data.upcoming;
  const mainEvent = upcomingEvents[0];
  const otherEvents = upcomingEvents.slice(1);

  return (
    <div className={styles.events}>
      <h2>Upcoming Events</h2>
      <div className={styles.innerDiv}>
        <div className={`${styles.card} ${styles.large}`}>
          <img src={mainEvent.img || "/placeholder.svg"} alt="" className={styles.mainImage} />
          <div className={styles.mainContent}>
            <div className={styles.date}>
              <span>{mainEvent.month}</span>
              <span>{mainEvent.date}</span>
            </div>
            <div className={styles.text}>
              <strong>{mainEvent.head}</strong>
              <span>{mainEvent.para}</span>
            </div>
          </div>
          <button
            className={styles.registerButton}
            onClick={() => window.open(mainEvent.link, "_blank")}
          >
            Register Now
          </button>
        </div>

        {otherEvents.length === 1 ? (
          // If only 1 more event, display it in the same `large` card style
          <div className={`${styles.card} ${styles.large}`}>
            <img src={otherEvents[0].img || "/placeholder.svg"} alt="" className={styles.mainImage} />
            <div className={styles.mainContent}>
              <div className={styles.date}>
                <span>{otherEvents[0].month}</span>
                <span>{otherEvents[0].date}</span>
              </div>
              <div className={styles.text}>
                <strong>{otherEvents[0].head}</strong>
                <span>{otherEvents[0].para}</span>
              </div>
            </div>
            <button
              className={styles.registerButton}
              onClick={() => window.open(otherEvents[0].link, "_blank")}
            >
              Register Now
            </button>
          </div>
        ) : (
          // If more than 1 additional event, use `small` cards
          <div className={`${styles.subContent} ${otherEvents.length <= 2 ? styles.columnLayout : ""}`}>
            {otherEvents.map((event, index) => (
              <div className={`${styles.card} ${styles.small}`} key={index}>
                <div className={styles.smallCardContent}>
                  <img src={event.img || "/placeholder.svg"} alt="" className={styles.smallImage} />
                  <div className={styles.smallCardInfo}>
                    <div className={styles.date}>
                      <span>{event.month}</span>
                      <span>{event.date}</span>
                    </div>
                    <div className={styles.text}>
                      <strong>{event.head}</strong>
                      <span>{event.para}</span>
                    </div>
                    <button
                      className={styles.registerButton}
                      onClick={() => window.open(event.link, "_blank")}
                    >
                      Register Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UpcomingEvents;
