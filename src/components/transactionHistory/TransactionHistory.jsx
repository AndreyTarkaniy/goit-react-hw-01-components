import css from 'components/transactionHistory/TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr className={css.row} key={item.id}>
            <td className={css.transData}>{item.type}</td>
            <td className={css.transData}>{item.amount}</td>
            <td className={css.transData}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
