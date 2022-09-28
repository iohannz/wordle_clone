import { useDispatch, useSelector } from 'react-redux';
import { setLetter } from '../store';

interface keyProps {
  keyVal: string;
}

const Key = ({ keyVal }: keyProps) => {
  const green = { backgroundColor: 'rgb(83, 141, 78)', border: 'none' };
  const yellow = { backgroundColor: 'rgb(181, 159, 59)', border: 'none' };
  const grey = { backgroundColor: 'rgb(58, 58, 60)', border: 'none' };
  const disabledLetters = useSelector((state: any) => state.matrix.disabledLetters);
  const almostCorrectLetters = useSelector((state: any) => state.matrix.disabledLetters);
  const correctLetters = useSelector((state: any) => state.matrix.disabledLetters);

  const dispatch = useDispatch();

  const handleClick = (key: string) => {
    dispatch(setLetter(key.toLowerCase()));
  };
  //rgb(129,131,132)

  return (
    <div
      style={disabledLetters.includes(keyVal.toLowerCase()) ? grey : {}}
      onClick={() => handleClick(keyVal)}
      className={`${
        keyVal === 'ENTER' || keyVal === 'BACKSPACE' ? 'w-16' : 'w-12'
      } flex uppercase items-center justify-center justify-self-center h-14 rounded-md hover:bg-gray-600 cursor-pointer`}>
      <span>{keyVal}</span>
    </div>
  );
};

export default Key;
