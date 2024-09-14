import {createSlice, PayloadAction} from '@reduxjs/toolkit';
//import axios from 'axios';

interface InitialState {
  resultadoImcValue: string;
  resultadoImcString: string;

  resultadoGeb: string;
}

const initialState: InitialState = {
  resultadoImcValue: '',
  resultadoImcString: '',

  resultadoGeb: '',
};

const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    imcCalc: (
      state,
      action: PayloadAction<{
        peso: string;
        altura: string;
      }>,
    ) => {
      const resultado =
        Number(action.payload.peso) /
        (Number(action.payload.altura) * Number(action.payload.altura));
      state.resultadoImcValue = String(resultado);

      if (resultado < 18.5) {
        state.resultadoImcString = `Tiene Bajo Peso`;
      } else if (resultado > 18.5 && resultado < 24.9) {
        state.resultadoImcString = `Tiene un Peso Saludable`;
      } else if (resultado > 24.9 && resultado < 29.9) {
        state.resultadoImcString = `Tiene Sobrepeso`;
      } else if (resultado > 29.9) {
        state.resultadoImcString = `Tiene Obesidad`;
      } else {
        state.resultadoImcString = 'Error en el Calculo';
      }
    },

    imcCalcReset: state => {
      state.resultadoImcString = '';
      state.resultadoImcValue = '';
    },

    gebCalc: (
      state,
      action: PayloadAction<{
        sexo: string;
        peso: string;
        altura: string;
        edad: string;
        actividad: string;
        condicion: string;
        temperatura: string;
      }>,
    ) => {
      if (action.payload.sexo === 'F') {
        const resultado =
          655.1 +
          9.563 * Number(action.payload.peso) +
          1.85 * Number(action.payload.altura) -
          4.676 * Number(action.payload.edad);
        state.resultadoGeb = String(Math.round(resultado));
      } else if (action.payload.sexo === 'M') {
        const resultado =
          66.5 +
          13.75 * Number(action.payload.peso) +
          5.003 * Number(action.payload.altura) -
          6.775 * Number(action.payload.edad);
        state.resultadoGeb = String(Math.round(resultado));
      }
    },
  },
  extraReducers: builder => {},
});

export const {imcCalc, imcCalcReset, gebCalc} = mainSlice.actions;
export default mainSlice.reducer;
