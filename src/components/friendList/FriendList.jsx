import { FriendListItem } from 'components/friendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(friend => (
        <FriendListItem key={friend.id} friendItem={friend} />
      ))}
    </ul>
  );
};
