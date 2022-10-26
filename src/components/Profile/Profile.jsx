import PropTypes from 'prop-types';
import styles from './Profile.module.css';

export const Profile = ({ userName, tag, location, avatar, stats }) => {
  const listClassName = styles.list;

  const spanRender = spanList => {
    return (
      <>
        <span className={styles.label}>{spanList[0]}</span>
        <span className={styles.quantity}>{spanList[1]}</span>
      </>
    );
  };

  const listRender = list => {
    const arr = Object.entries(list);
    const result = arr.map(el => {
      return (
        <li key={el[0]} className={listClassName}>
          {spanRender(el)}
        </li>
      );
    });
    return result;
  };

  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={avatar} alt={userName} className={styles.avatar} />
        <p className={styles.name}>{userName}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>
      <ul className={styles.stats}>{listRender(stats)}</ul>
    </div>
  );
};

Profile.propTypes = {
  userName: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
  }).isRequired,
};
