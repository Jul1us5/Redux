import React from "react";
import style from './App.module.scss';
import PropTypes from "prop-types";

const App = () => {

  return (
    <div className={style.wrapper}>
      <p className={style.p}>WEBPACK.Bundle 2.0</p>
    </div>
  );
};

App.propTypes = {
  state: PropTypes.object,
  getState: PropTypes.object,
};

export default App;
