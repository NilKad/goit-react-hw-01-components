import PropTypes from 'prop-types';
import css from './friendList.module.css';
const { friendItem, friendIMG, online, status } = css;

export const FriendListItem = ({ friendCard }) => {
  const { avatar, name, isOnline } = friendCard;
  return (
    <div className={friendItem}>
      <span className={`${status} ${isOnline ? online : ''}`}></span>
      <img
        className={friendIMG}
        src={avatar}
        width="70"
        height="70"
        alt={name}
      />
      <p>{name}</p>
    </div>
  );
};

FriendListItem.propTypes = {
  friendCard: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};
