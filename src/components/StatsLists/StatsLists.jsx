import { ListsItem } from './StatsListsItem';

export const Lists = ({
  lists,
  listClassName,
  spanClassName,
  className,
  countRows,
}) => {
  const objToArr = Object.entries(lists);

  const listMap = objToArr.map((el, index) => {
    return (
      <ListsItem
        key={el[0]}
        classNameList={listClassName}
        lists={el}
        spanClassName={spanClassName}
      />
    );
  });

  return <ul className={className}>{listMap}</ul>;
};
