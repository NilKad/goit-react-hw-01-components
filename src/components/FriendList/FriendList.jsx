import css from './friendList.module.css';
import { FriendListItem } from './FriendListItem';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  // console.log('friends: ', friends);

  return (
    <section className={css.section}>
      <ul className={css.friendList}>
        {friends.map(friendCard => {
          return (
            <li key={friendCard.id}>
              <FriendListItem friendCard={friendCard} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired }).isRequired
  ).isRequired,
};
