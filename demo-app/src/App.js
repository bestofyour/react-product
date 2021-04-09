import './App.css';

import React from 'react';
import { Button } from 'antd';

// import props from './props';

function App () {
  const Text="dsada"
  const style = {
    color: 'red'
  }
  return (<Button style={style}>{Text}</Button>)
}

export default App
