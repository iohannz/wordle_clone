import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  matrix: [
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
  ],
  correctGuess: 'STORE',
  currentRowIndex: 0,
  currentLetterIndex: -2,
};

const matrixSlice = createSlice({
  name: 'matrix',
  initialState: initialState,
  reducers: {
    setLetter: (state, action) => {
      if (action.payload === 'ENTER') {
        if (
          state.currentLetterIndex === 4 &&
          state.currentRowIndex < 5 &&
          state.matrix[state.currentRowIndex][state.currentLetterIndex] !== ''
        ) {
          state.currentLetterIndex = 0;
          state.currentRowIndex += 1;
        }
      } else if (action.payload === 'BACKSPACE') {
        state.matrix[state.currentRowIndex][state.currentLetterIndex] = '';
        state.currentLetterIndex -= 1;
      } else {
        state.matrix[state.currentRowIndex][state.currentLetterIndex] = action.payload;
        if (state.currentLetterIndex < 4) {
          state.currentLetterIndex += 1;
        }
      }
    },
  },
});

export const { setLetter } = matrixSlice.actions;

export const store = configureStore({
  reducer: {
    matrix: matrixSlice.reducer,
  },
});
