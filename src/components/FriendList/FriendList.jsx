// import Container from '../Container'
import css from './friendList.module.css';

export const FriendList = friends => {
  console.log(css);
  console.log('friends!: ', friends.friends);
  const cardFriend = ({ friends }) => {
    return friends.map(el => {
      const { avatar, name, isOnline, id } = el;
      return (
        <li key={id} className={css.friendItem}>
          <span
            className={`${css.status} ${isOnline ? css.isOnline : ''}`}
          ></span>
          <img
            className={css.friendIMG}
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

  return (
    <section className={css.section}>
      <ul className={css.friendList}>{cardFriend(friends)}</ul>
    </section>
  );
};
