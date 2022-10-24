import PropTypes from 'prop-types';
// import { Section } from '../Section/Section';
import cssStat from './Statistics.module.css';

// console.log(cssStat);
// console.dir(cssStat);
export const Statistics = ({ titleContent, stats }) => {
  // const spanClassName = [cssStat.label, cssStat.percentage];
  const listClassName = cssStat.item;

  const spanRender = spanList => {
    return (
      <>
        <span className={cssStat.label}>{spanList[0]}</span>
        <span className={cssStat.percentage}>{spanList[1]}%</span>
      </>
    );
  };

  const listRender = list => {
    const result = list.map(el => {
      const key = el.id;
      const name = el.label;
      const value = el.percentage;
      return (
        <li key={key} className={listClassName}>
          {spanRender([name, value])}
        </li>
      );
    });
    return result;
  };

  return (
    <>
      <section className={cssStat.statistics}>
        {titleContent && <h2 className={cssStat.title}>{titleContent}</h2>}
        <ul className={cssStat['stat-list']}>{listRender(stats)}</ul>
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
