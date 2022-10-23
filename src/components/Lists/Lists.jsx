import { ListsItem } from './ListsItem';

export const Lists = ({ lists, listClassName, spanClassName, className }) => {
  const listMap = lists.map((el, index) => {
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
