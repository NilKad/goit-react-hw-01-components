import { Lists } from 'components/Lists/Lists';
// import { ListsItem } from 'components/Lists/ListsItem';
// import { ListsSpan } from 'components/Lists/ListsSpan';

import PropTypes from 'prop-types';
import styles from './Profile.module.css';

export const Profile = ({ userName, tag, location, avatar, stats }) => {
  // console.log(userName, tag, location, avatar, stats);
  // console.log('stats: ', stats);
  const objToArr = Object.entries(stats);
  console.log('objToArr: ', objToArr);
  // const listenSpan = obj
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
      {/* {
          <ListsItem>
            {
              <ListsSpan
                lists={objToArr[0]}
                className="label"
                key={objToArr[0]}
              ></ListsSpan>
            }
          </ListsItem>
        }
        {
          <ListsItem>
            {
              <ListsSpan
                lists={objToArr[1]}
                className="quantity"
                key={objToArr[0]}
              ></ListsSpan>
            }
          </ListsItem>
        } */}
      {/* </Lists> */}

      {/* <ul class="stats">
        <li>
          <span class="label">Followers</span>
          <span class="quantity">1000</span>
        </li>
        <li>
          <span class="label">Views</span>
          <span class="quantity">2000</span>
        </li>
        <li>
          <span class="label">Likes</span>
          <span class="quantity">3000</span>
        </li>
      </ul> */}
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
