import { ListsItem } from './ListsItem';

export const Lists = ({ lists, listClassName, spanClassName, className }) => {
  // console.log('Lists lists!: ', lists);
  // console.log('Lists listClassName!: ', listClassName);
  // console.log('Lists spanClassName!: ', spanClassName);
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
