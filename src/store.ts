import { configureStore, createSlice } from '@reduxjs/toolkit';
import { dictionary, targetWords, targetWord } from './words';

const initialState = {
  matrix: [
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
  ],
  currentRowIndex: 0,
  currentLetterIndex: 0,
  targetWords: targetWords,
  targetWord: targetWord,
  dictionary: dictionary,
  disabledLetters: [],
  correctLetters: [],
  almostLetters: [],
  gameOver: { gameOver: false, guessedWord: false },
  currWord: '',
  isShaking: false,
};

const isWordValid = (state: any) => {
  return state.dictionary.includes(state.currWord);
};

const goToNextRow = (state: any) => {
  if (
    state.currentLetterIndex === 4 &&
    state.currentRowIndex < 6 &&
    state.matrix[state.currentRowIndex][state.currentLetterIndex] !== ''
  ) {
    state.currentLetterIndex = 0;
    state.currentRowIndex += 1;
    state.currWord = '';
  }
};

const checkIfWon = (state: any) => {
  return state.targetWord === state.currWord;
};

const matrixSlice = createSlice({
  name: 'matrix',
  initialState: initialState,
  reducers: {
    setLetter: (state, action) => {
      if (action.payload === 'enter') {
        if (isWordValid(state)) {
          if (checkIfWon(state)) {
            state.gameOver = { gameOver: true, guessedWord: true };
            state.currentRowIndex += 1;
            return;
          }
          if (state.currentLetterIndex === 4 && state.currentRowIndex === 5) {
            state.gameOver = { gameOver: true, guessedWord: false };
            return;
          }
          goToNextRow(state);
        } else {
          state.isShaking = true;
        }
      } else if (
        action.payload === 'backspace' &&
        state.currWord.length > -1 &&
        state.currentLetterIndex >= 0
      ) {
        console.log(state.currWord.length, state.currWord);
        state.matrix[state.currentRowIndex][state.currentLetterIndex] = '';
        state.currentLetterIndex -= 1;
        state.currWord = state.currWord.slice(0, -1);
        // if (state.currentLetterIndex > 0) {
        //   state.currentLetterIndex -= 1;
        //   state.matrix[state.currentRowIndex][state.currentLetterIndex] = '';
        // }
        console.log(state.currWord.length, state.currWord);
      } else {
        if (action.payload.length === 1 && state.currWord.length < 5) {
          console.log(action.payload);
          if (state.currentLetterIndex < 0) {
            state.currentLetterIndex = 0;
          }
          state.matrix[state.currentRowIndex][state.currWord.length] = action.payload;
          state.currWord += action.payload;
          if (state.currentLetterIndex < 4) {
            state.currentLetterIndex += 1;
          }
        }
      }
    },
    setDisabledLetters: (state: any, action) => {
      state.disabledLetters = [...state.disabledLetters, action.payload];
    },
    setCorrectLetters: (state: any, action) => {
      state.correctLetters = [...state.correctLetters, action.payload];
    },
    setAlmostLetters: (state: any, action) => {
      state.almostLetters = [...state.almostLetters, action.payload];
    },

    turnShakeOff: (state: any) => {
      state.isShaking = false;
      console.log(state.isShaking);
    },
  },
});

export const { setLetter, setDisabledLetters, setCorrectLetters, setAlmostLetters, turnShakeOff } =
  matrixSlice.actions;

export const store = configureStore({
  reducer: {
    matrix: matrixSlice.reducer,
  },
});
