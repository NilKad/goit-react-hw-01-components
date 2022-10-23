import { ListsItem } from './StatsListsItem';

export const Lists = ({ lists, listClassName, spanClassName, className }) => {
  const objToArr = Object.entries(lists);

  const listMap = objToArr.map((el, index) => {
    let key = null;
    console.log('el: ', el);

    if (el.length > 2) {
      console.log('el do : ', el);
      el = el.splice(el.length - 1, 1);
      console.log('el posle : ', el);
    }
    key = el[0];

    return (
      <ListsItem
        key={key}
        classNameList={listClassName}
        lists={el}
        spanClassName={spanClassName}
      />
    );
  });

  return <ul className={className}>{listMap}</ul>;
};
