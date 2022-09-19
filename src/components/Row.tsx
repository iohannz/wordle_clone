import Letter from './Letter';

export interface RowProps {
  row: Array<string>;
}

const Row = ({ row }: RowProps) => {
  return (
    <div className="flex justify-center gap-4 mb-4">
      {row.map((letter, i) => (
        <Letter key={i} letter={letter} />
      ))}
    </div>
  );
};

export default Row;
