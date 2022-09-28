import { useSelector } from 'react-redux';
import Board from './components/Board';
import GameOver from './components/GameOver';
import Keyboard from './components/Keyboard';
import Navbar from './components/Navbar';
import useKey from './hooks/useKey';

function App() {
  useKey();
  const gameOver = useSelector((state: any) => state.matrix.gameOver);

  return (
    <div className="App bg-[#121213] min-h-screen h-full">
      <Navbar />
      <Board />
      {gameOver.gameOver ? <GameOver /> : <Keyboard />}
    </div>
  );
}

export default App;
