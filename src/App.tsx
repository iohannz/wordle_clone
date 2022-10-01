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
    <div className="App bg-[#121213] h-screen relative overflow-hidden">
      <Navbar />
      <div
        className="game-container w-full h-[calc(100% - 40px)]
        overflow-hidden h-full bg-inherit">
        <div
          className="game w-full mx-auto flex flex-col
          max-w-[500px] h-[calc(100%-40px)]">
          <Board />
          {gameOver.gameOver ? <GameOver /> : <Keyboard />}
        </div>
      </div>
    </div>
  );
}

export default App;
