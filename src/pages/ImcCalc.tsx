import React, {useState} from 'react';
import {Card, Heading, SafeAreaView, Text, VStack} from '@gluestack-ui/themed';
import UIInput from '../components/UIInput';
import UIBotton from '../components/UIBotton';
import {useAppDispatch} from '../redux/hooks';

export default function ImcCalc() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState('');

  const dispatch = useAppDispatch();

  function calcImcHandler() {
    const calcImc = +peso / (+altura * +altura);
    const s = resultado;
    const resultadoCalcImc = calcImc;

    if (resultadoCalcImc < 18.5) {
      return `${resultadoCalcImc} "Es Delgad@"`;
    } else if (resultadoCalcImc > 18.5 && resultadoCalcImc < 24.9) {
      return `${resultadoCalcImc} "Es Normal"`;
    } else if (resultadoCalcImc > 24.9 && resultadoCalcImc < 29.9) {
      return `${resultadoCalcImc} "Esta en Sobrepeso"`;
    } else if (resultadoCalcImc > 29.9) {
      return `${resultadoCalcImc} "Esta en Obesidad"`;
    }
    console.log('Presionado');

    //dispatch(setResultado());
  }

  function cleanCalculatorHandler() {
    // dispatch(cleanCalculator());
    console.log('Presionado2');
  }

  return (
    <VStack flex={1} justifyContent="center" bg="$secondary0">
      <SafeAreaView ml={25}>
        <Heading fontSize={25} mt={10}>
          NutriApp
        </Heading>
      </SafeAreaView>
      <VStack flex={8} justifyContent="flex-start" mt={15}>
        <Card
          size="lg"
          variant="elevated"
          m="$3"
          marginHorizontal={'$6'}
          borderRadius={'$lg'}
          gap={30}>
          <Heading>Calculemos el IMC</Heading>
          <Text>Altura(m)</Text>
          <UIInput placeHolder="Introduce la altura" />
          <Text>Peso(kg)</Text>
          <UIInput placeHolder="Introduce el peso" />
          <UIBotton onPress={calcImcHandler} title="Calcular" />
          <Text>Resultado</Text>
          {resultado}
          <UIBotton
            onPress={cleanCalculatorHandler}
            title="Limpiar"
            bg="green"
          />
        </Card>
      </VStack>
    </VStack>
  );
}
