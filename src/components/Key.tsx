import { useDispatch, useSelector } from 'react-redux';
import { setLetter } from '../store';
import { FaBackspace } from 'react-icons/fa';

interface keyProps {
  keyVal: string;
}

const Key = ({ keyVal }: keyProps) => {
  const grey = { backgroundColor: 'rgb(58, 58, 60)', border: 'none' };
  const disabledLetters = useSelector((state: any) => state.matrix.disabledLetters);

  const dispatch = useDispatch();

  const handleClick = (key: string) => {
    dispatch(setLetter(key.toLowerCase()));
  };

  return (
    <div
      style={disabledLetters.includes(keyVal.toLowerCase()) ? grey : {}}
      onClick={() => handleClick(keyVal)}
      className={`${
        keyVal === 'ENTER' || keyVal === 'BACKSPACE'
          ? 'flex-[1.5] px-2'
          : keyVal === ''
          ? 'flex-[0.5] bg-transparent'
          : 'flex-[1]'
      }  bg-[rgb(129,131,132)] flex flex-1 flex-grow uppercase items-center text-white
      justify-center justify-self-center mr-[6px] last-of-type:mr-0 h-[58px] rounded-[4px] hover:bg-gray-600 cursor-pointer
       font-bold
      `}>
      <span>{keyVal === 'BACKSPACE' ? <FaBackspace /> : keyVal}</span>
    </div>
  );
};

export default Key;
