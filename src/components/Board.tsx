import { useDispatch, useSelector } from 'react-redux';
import { RowProps } from './Row';
import Row from './Row';

const Board = () => {
  const board: [] = useSelector((state: any) => state.matrix.matrix);
  const dispatch = useDispatch();

  return (
    <div className="board max-w-4xl mx-auto">
      {board.map((row: RowProps, i) => (
        <Row key={i} row={row} />
      ))}
    </div>
  );
};

export default Board;
