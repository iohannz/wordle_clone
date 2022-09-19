import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Board from './components/Board';
import Navbar from './components/Navbar';
import useKey from './hooks/useKeys';
import { setLetter } from './store';

function App() {
  const [keyVal, setKeyVal] = useState('');
  const dispatch = useDispatch();
  useKey((key: any) => setKeyVal(key));

  useEffect(() => {
    dispatch(setLetter(keyVal));
  }, [keyVal]);

  return (
    <div className="App bg-white min-h-screen h-full">
      <Navbar />
      <Board />
    </div>
  );
}

export default App;
