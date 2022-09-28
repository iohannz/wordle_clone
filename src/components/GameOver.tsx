import { useSelector } from 'react-redux';

const GameOver = () => {
  const gameOver = useSelector((state: any) => state.matrix.gameOver);
  const targetWord = useSelector((state: any) => state.matrix.targetWord);
  const currAttempt = useSelector((state: any) => state.matrix.currentRowIndex);

  return (
    <div className="text-center">
      <h3>{gameOver.guessedWord ? 'You correctly guessed' : 'You failed'}</h3>
      <h2>Correct word: {targetWord}</h2>
      {gameOver.guessedWord && <h3>You guessed in {currAttempt} attempts</h3>}
    </div>
  );
};

export default GameOver;
