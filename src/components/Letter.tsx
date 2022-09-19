interface LetterProps {
  letter: string;
}

const Letter = ({ letter }: LetterProps) => {
  return (
    <div className="text-5xl text-black font-bold p-4 w-16 h-16 border-2 border-black flex items-center justify-center">
      {letter}
    </div>
  );
};

export default Letter;
function setKeyVal(key: any) {
  throw new Error('Function not implemented.');
}
