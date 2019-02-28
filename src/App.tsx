// import Button from 'antd/lib/button';
import { Button, Select } from 'antd';
import * as React from 'react';
import './App.css';
import SelectItem from './components/SelectItem';

import logo from './logo.svg';

const Option = Select.Option;
class App extends React.Component {
  public state = {
    isbuy: false
  };
  public handleChange = () => {
    // console.log(1);
  };
  public handleBuy = () => {
    // console.log(1);
  };
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <SelectItem defaultValue="" />
        <div className="prod-container">
          <p className="large-title">
            荣获itrust年度
            <br />
            客户满意度独家5星好评
          </p>
          <p>
            <span className="red">限时</span>
            <span>钜惠中！</span>
          </p>
          <p>
            <Select
              defaultValue="牛津 Plus 2单元"
              onChange={this.handleChange}
              disabled={this.state.isbuy}
            >
              <Option value="牛津 Plus 2单元">
                牛津 Plus 2单元 ￥1680（一次付清）
              </Option>
              <Option value="牛津 Plus 3单元">
                牛津 Plus 3单元 ￥2480（一次付清）
              </Option>
              <Option value="达芬奇12堂课学习套餐">
                达芬奇12堂课学习套餐 ￥1280（一次付清）
              </Option>
            </Select>
          </p>
          <p>
            <Button type="primary" onClick={this.handleBuy}>
              立即购买
            </Button>
          </p>
          <p>*三种学习套餐个人帐户限购一份</p>
        </div>
      </div>
    );
  }
}

export default App;
