import { FriendList } from './FriendList/FriendList';
import { Profile } from './Profile/Profile';
import user from './Profile/user.json';
import friends from './FriendList/friends.json';
import statisticsData from './Statistics/data.json';
import transactions from './TransactionHistory/transactions.json';
import { Statistics } from './Statistics/Statistics';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <>
      <Profile
        userName={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics titleContent="Upload stats" stats={statisticsData} />
      <FriendList friends={friends} />
      <TransactionHistory data={transactions} />
    </>
  );
};
