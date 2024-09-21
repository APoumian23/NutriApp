import {createSlice, PayloadAction} from '@reduxjs/toolkit';
//import axios from 'axios';

interface InitialState {
  resultadoImcValue: string;
  resultadoImcString: string;

  resultadoHarrisGeb: string;
  resultadoHarrisGet: string;

  resultadoMifflinGeb: string;
  resultadoMifflinGet: string;
}

const initialState: InitialState = {
  resultadoImcValue: '',
  resultadoImcString: '',

  resultadoHarrisGeb: '',
  resultadoHarrisGet: '',

  resultadoMifflinGeb: '',
  resultadoMifflinGet: '',
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

      state.resultadoHarrisGeb = '';
      state.resultadoHarrisGet = '';

      state.resultadoMifflinGeb = '';
      state.resultadoMifflinGet = '';
    },

    gebHarrisCalc: (
      state,
      action: PayloadAction<{
        sexo: string;
        peso: string;
        altura: string;
        edad: string;
      }>,
    ) => {
      if (action.payload.sexo === 'F') {
        const resultadoHarrisGeb =
          655.1 +
          9.563 * Number(action.payload.peso) +
          1.85 * Number(action.payload.altura) -
          4.676 * Number(action.payload.edad);
        state.resultadoHarrisGeb = String(Math.round(resultadoHarrisGeb));
      } else if (action.payload.sexo === 'M') {
        const resultadoHarrisGeb =
          66.5 +
          13.75 * Number(action.payload.peso) +
          5.003 * Number(action.payload.altura) -
          6.775 * Number(action.payload.edad);
        state.resultadoHarrisGeb = String(Math.round(resultadoHarrisGeb));
      }
    },

    getHarrisCalc: (
      state,
      action: PayloadAction<{
        actividad: string;
        condicion: string;
        temperatura: string;
      }>,
    ) => {
      const resultadoHarrisGet =
        Number(state.resultadoHarrisGeb) *
        Number(action.payload.actividad) *
        Number(action.payload.condicion) *
        Number(action.payload.temperatura);
      state.resultadoHarrisGet = String(Math.round(resultadoHarrisGet));
    },

    gebMifflinCalc: (
      state,
      action: PayloadAction<{
        sexo: string;
        peso: string;
        altura: string;
        edad: string;
      }>,
    ) => {
      if (action.payload.sexo === 'F') {
        const resultadoMifflinGeb =
          10 * Number(action.payload.peso) +
          6.25 * Number(action.payload.altura) -
          5 * Number(action.payload.edad) -
          -161;
        state.resultadoMifflinGeb = String(Math.round(resultadoMifflinGeb));
      } else if (action.payload.sexo === 'M') {
        const resultadoMifflinGeb =
          10 * Number(action.payload.peso) +
          6.25 * Number(action.payload.altura) -
          5 * Number(action.payload.edad) +
          5;
        state.resultadoMifflinGeb = String(Math.round(resultadoMifflinGeb));
      }
    },
    getMifflinCalc: (
      state,
      action: PayloadAction<{
        actividad: string;
        condicion: string;
        temperatura: string;
      }>,
    ) => {
      const resultadoMifflinGet =
        Number(state.resultadoMifflinGeb) *
        Number(action.payload.actividad) *
        Number(action.payload.condicion) *
        Number(action.payload.temperatura);
      state.resultadoMifflinGet = String(Math.round(resultadoMifflinGet));
    },
  },
  extraReducers: builder => {},
});

export const {
  imcCalc,
  imcCalcReset,
  gebHarrisCalc,
  getHarrisCalc,
  gebMifflinCalc,
  getMifflinCalc,
} = mainSlice.actions;
export default mainSlice.reducer;
