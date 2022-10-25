import { Section } from 'components/Section/Section';
import css from './TransactionHistory.module.css';
export const TransactionHistory = ({ data }) => {
  // console.log('data: ', data);

  const theadRender = () => {
    return (
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    );
  };

  const rowsRender = ({ id, type, amount, currency }) => {
    return (
      <tr key={id}>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
    );
  };
  return (
    <table className={css.transactionHistory}>
      <thead>{theadRender()}</thead>
      <tbody>{data.map(rowsRender)}</tbody>
    </table>
  );
};
