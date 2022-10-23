import { Lists } from 'components/StatsLists/StatsLists';

import PropTypes from 'prop-types';
import styles from './Profile.module.css';

export const Profile = ({ userName, tag, location, avatar, stats }) => {
  // const objToArr = Object.entries(stats);
  // console.log('objToArr: ', objToArr);
  const spanClassName = [styles.label, styles.quantity];
  const listClassName = styles.list;
  console.log('listClassName: ', { listClassName });
  console.log('stats: ', { stats });

  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={avatar} alt={userName} className={styles.avatar} />
        <p className={styles.name}>{userName}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <Lists
        className={styles.stats}
        lists={stats}
        // countRows={objToArr.length}
        listClassName={listClassName}
        spanClassName={spanClassName}
      />
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
