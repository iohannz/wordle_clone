import { useSelector } from 'react-redux';
import { FaBackspace } from 'react-icons/fa';

interface keyProps {
  keyVal: string;
}

const Key = ({ keyVal }: keyProps) => {
  const grey = { backgroundColor: 'rgb(58, 58, 60)', border: 'none' };
  const disabledLetters = useSelector((state: any) => state.matrix.disabledLetters);
  return (
    <div
      style={disabledLetters.includes(keyVal.toLowerCase()) ? grey : {}}
      className={`bg-[rgb(129,131,132)] font-helveticaRegular flex flex-1 uppercase items-center
    text-white hover:brightness-90 justify-center justify-self-center mr-[6px]
      last-of-type:mr-0 h-[58px] rounded-[4px] cursor-pointer
      font-bold text-[13px] px-1 ${
        keyVal === 'ENTER' || keyVal === 'BACKSPACE'
          ? 'px-2 flex-[1.6] text-[12px] max-w-[65px]'
          : keyVal === ''
          ? 'bg-transparent flex-[0.22]'
          : ''
      }
      `}>
      <span>{keyVal === 'BACKSPACE' ? <FaBackspace /> : keyVal}</span>
    </div>
  );
};

export default Key;
