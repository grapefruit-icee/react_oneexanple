import './App.css';

// function App() {
//   return (
//     <div className="App">
//       hello react!
//     </div>
//   );
// }

import React, { useState } from 'react';
import { render } from 'react-dom';
import { ConfigProvider, DatePicker, message, Modal } from 'antd';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import zhCN from 'antd/locale/zh_CN';
import 'antd/dist/reset.css';
import './index.css';
import ModalA from './components/modalA/modalA';


dayjs.locale('zh-cn');

const App = () => {
  const [date, setDate] = useState(null);
  let [info, setInfo] = useState([]);



  const handleChange = (value) => {
    message.info(`您选择的日期是: ${value ? value.format('YYYY年MM月DD日') : '未选择'}`);
    setDate(value);
  };


  return (
    <ConfigProvider locale={zhCN}>
      <div style={{ width: 400, margin: '100px auto' }}>
        <DatePicker onChange={handleChange} />
        <div style={{ marginTop: 16 }}>
          当前日期：{date ? date.format('YYYY年MM月DD日') : '未选择'}
        </div>
        <ModalA info={info} setInfo={setInfo}/>
        {
          info.length && info.map((item, i) => {
            return (
              <div key={item.name}>{item.name} <span>{i}</span></div>
            )
          })
        }
      </div>
    </ConfigProvider>
  );
};

// render(<App />, document.getElementById('root'));

export default App;
