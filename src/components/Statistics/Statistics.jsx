import PropTypes from 'prop-types';
import cssStat from './Statistics.module.css';

export const Statistics = ({ titleContent, stats }) => {
  return (
    <>
      <section className={cssStat.statistics}>
        {titleContent && <h2 className={cssStat.title}>{titleContent}</h2>}
        <ul className={cssStat['stat-list']}>
          {stats.map(({ id, label, percentage }) => {
            return (
              <li key={id} className={cssStat.item}>
                <span className={cssStat.label}>{label}</span>
                <span className={cssStat.percentage}>{percentage}%</span>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

Statistics.propTypes = {
  titleContent: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

// const spanRender = spanList => {
//   return (
//     <>
//       <span className={cssStat.label}>{spanList[0]}</span>
//       <span className={cssStat.percentage}>{spanList[1]}%</span>
//     </>
//   );
// };

// const listRender = list => {
//   const result = list.map(({ id, label, percentage }) => {
//     return (
//       <li key={id} className={cssStat.item}>
//         {spanRender([label, percentage])}
//       </li>
//     );
//   });
//   return result;
// };

// return (
//   <>
//     <section className={cssStat.statistics}>
//       {titleContent && <h2 className={cssStat.title}>{titleContent}</h2>}
//       <ul className={cssStat['stat-list']}>{listRender(stats)}</ul>
//     </section>
//   </>
// );
