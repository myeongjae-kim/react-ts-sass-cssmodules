import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './App.module.scss';
import classNames from 'classnames/bind'

const cx = classNames.bind(styles);

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <header className={styles.AppHeader}>
          <img src={logo} className={styles.AppLogo} alt="logo" />
          <p className={cx('Blue', 'Bold')}>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className={styles.AppLink}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
