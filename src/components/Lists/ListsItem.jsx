import { ListsSpan } from './ListsSpan';

export const ListsItem = ({ lists, classNameList, spanClassName }) => {
  // console.log('ListsItem lists: ', lists);
  // console.log('spanClassName: ', spanClassName);
  const spanMap = lists.map((el, index) => {
    return (
      <ListsSpan
        key={spanClassName[index]}
        className={spanClassName[index]}
        item={el}
      ></ListsSpan>
    );
  });

  return <li className={classNameList}>{spanMap}</li>;
};
