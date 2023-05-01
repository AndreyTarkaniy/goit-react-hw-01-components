import { FriendListItem } from 'components/friendListItem/FriendListItem';
import css from 'components/friendList/FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(friend => (
        <FriendListItem key={friend.id} friendItem={friend} />
      ))}
    </ul>
  );
};
