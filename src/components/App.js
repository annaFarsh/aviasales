import logo from './logo.svg';
import './App.css';
import { Tabs } from 'antd';
import { Card } from 'antd';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
        <main>
            <Tabs defaultActiveKey="1"  onChange={} items = {[
                {
                    key: 'Cheapest',
                    label: `Самый дешевый`,
                    children: (<Card/>),
                },
                {
                    key: 'Fastest',
                    label: `Самый быстрый`,
                    children: `Content of Tab Pane 2`,
                },
                {
                    key: 'Optimal',
                    label: `Оптимальный`,
                    children: `Content of Tab Pane 3`,
                },
                ]}/>

        </main>
    </div>
  );
}

export default App;
