import { Header } from 'antd/lib/layout/layout';
import './App.css';
import AddQuestion from './component/addquestion';
import Codingtest from './component/codingtest';
import Game from './component/game';
import Mcqtest from './component/mcqtest';

function App() {
  return (<>
       <Header>QUIZCODE Platform</Header>
       <AddQuestion/>
       <Codingtest/>
       <Game name="Actice user"/>
       <Mcqtest/>
  </>);
}

export default App;
