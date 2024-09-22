
import SearchBar from './SearchBar/SearchBar';
import styles from './App.module.css';
import { useState } from 'react';
// import clsx from 'clsx';
// import ErrorMessage from './error-message/ErrorMessage';

function App() {

  const [error] = useState(false);
  const [filter, setFilter] = useState('');
  
  const handleSearch = strFilter => {
    // setFilter(strFilter);
    // setItems([]);
    // setCurrPage(0);
    // setHasMorePages(false);
    // updateImages(strFilter, 1);
  };

  return (
    <div className={styles.container}>
    <SearchBar onSearch={handleSearch} />
    {/* <div className={clsx(styles.content, styles.section)}>
      <ErrorMessage isError={error} />
    </div> */}
    </div>
  );
}


export default App;
