import css from './Section.module.css';

export const Section = ({ children, className }) => {
  console.log('children: ', children);
  console.log('className: ', className);
  return (
    <section className={`${css.section}  ${className}`}>{children}</section>
  );
};
