import { useSelector } from 'react-redux';
import { RowProps } from './Row';
import Row from './Row';

const Board = () => {
  const board: [] = useSelector((state: any) => state.matrix.matrix);

  return (
    <div className={`grid grid-rows-6 grid-cols-1`}>
      {board.map((row: RowProps, i) => (
        <Row key={i} row={row} rowIndex={i} />
      ))}
      {/* <span className=" text-center text-3xl">{word}</span> */}
    </div>
  );
};

export default Board;
