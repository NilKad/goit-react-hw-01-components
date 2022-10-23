import { Section } from '../Section/Section';
import { Lists } from '../StatsLists/StatsLists';
import cssStat from './Statistics.module.css';

export const Statistics = ({ titleContent, stats }) => {
  console.log('=====Statistics======');
  console.log('titleContent: ', titleContent);
  console.log('titleContent: ', titleContent);
  const spanClassName = [cssStat.label, cssStat.percentage];
  const listClassName = cssStat['stat-list'];
  return (
    <>
      <Section className={cssStat.statistics}>
        <h2 className={cssStat.title}>{titleContent}</h2>
        {/* <Lists
          className={listClassName}
          lists={stats}
          listClassName={cssStat.item}
          spanClassName={spanClassName}
        /> */}
      </Section>
    </>
  );
};
