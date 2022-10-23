import { Lists } from 'components/Lists/Lists';

import PropTypes from 'prop-types';
import styles from './Profile.module.css';

export const Profile = ({ userName, tag, location, avatar, stats }) => {
  const objToArr = Object.entries(stats);
  console.log('objToArr: ', objToArr);
  const spanClassName = [styles.label, styles.quantity];
  const listClassName = styles.list;

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
        lists={objToArr}
        listClassName={listClassName}
        spanClassName={spanClassName}
      />
    </div>
  );
};

Profile.propTypes = {
  userName: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  // stats: PropTypes.object(PropTypes.number),
};
