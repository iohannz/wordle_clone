import Key from './Key';

interface KeyboardRowProps {
  row: string[];
}

const KeyboardRow = ({ row }: KeyboardRowProps) => {
  return (
    <div className="row grid first-of-type:grid-cols-10 grid-cols-9">
      {row.map((letter, i) => (
        <Key key={i} keyVal={letter} />
      ))}
    </div>
  );
};

export default KeyboardRow;
