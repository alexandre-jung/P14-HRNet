import { Calendar } from '@hrnet-aj/icons';
import styles from './App.module.scss';

function App () {
  return (
    <div className={styles.App}>
      <Calendar
        width={24}
        height={24}
        style={{ verticalAlign: 'middle' }}
      />
      <span
        style={{
          marginLeft: 10,
          verticalAlign: 'middle',
        }}
      >
        Hello world!
      </span>
    </div>
  );
}

export default App;
