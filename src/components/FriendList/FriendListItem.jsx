import css from './friendList.module.css';
const { friendItem, friendIMG, online, status } = css;

export const FriendListItem = ({ friendsList }) => {
  const { friends } = friendsList;

  return friends.map(({ avatar, name, isOnline, id }) => {
    return (
      <li key={id} className={friendItem}>
        <span className={`${status} ${isOnline ? online : ''}`}></span>
        <img
          className={friendIMG}
          src={avatar}
          width="70"
          height="70"
          alt={name}
        />
        <p>{name}</p>
      </li>
    );
  });
};
