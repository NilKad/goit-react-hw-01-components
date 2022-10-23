import { Profile } from './Profile/Profile';
import user from './Profile/user.json';
import statisticsData from './Statistics/data.json';
// import statsData from './Statistics/';
import { Statistics } from './Statistics/Statistics';
console.log('user: ', user);
console.log('statisticsData: ', statisticsData);

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
    </>
  );
};
