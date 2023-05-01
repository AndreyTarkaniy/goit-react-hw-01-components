import css from 'components/friendList/FriendList.module.css';

export const FriendListItem = ({ friendItem: { avatar, name, isOnline } }) => {
  return (
    <li className={css.item}>
      <span className={isOnline ? css.online : css.offline}></span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};
