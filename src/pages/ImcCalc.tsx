import React, {useState} from 'react';
import {Card, Heading, SafeAreaView, Text, VStack} from '@gluestack-ui/themed';
import UIInput from '../components/UIInput';
import UIBotton from '../components/UIBotton';
import {useAppDispatch, useAppSelector} from '../redux/hooks';
import {imcCalc, imcCalcReset} from '../redux/slices/mainSlice';

export default function ImcCalc() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  const {resultadoImcString, resultadoImcValue} = useAppSelector(
    state => state.main,
  );

  const dispatch = useAppDispatch();

  function calcImcHandler() {
    dispatch(imcCalc({peso: peso, altura: altura}));
  }

  function cleanCalculatorHandler() {
    dispatch(imcCalcReset());
    setPeso('');
    setAltura('');
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
          <Text>Peso(kg)</Text>
          <UIInput
            placeHolder="Introduce el Peso"
            keyboardType="numeric"
            onChangeTexte={setPeso}
            value={peso}
          />
          <Text>Altura(m)</Text>
          <UIInput
            placeHolder="Introduce la Altura"
            keyboardType="numeric"
            onChangeTexte={setAltura}
            value={altura}
          />
          <UIBotton onPress={calcImcHandler} title="Calcular" />
          <Text>Resultado</Text>
          <Text>
            {resultadoImcString &&
              `${resultadoImcString} y el IMC es: ${resultadoImcValue}`}
          </Text>
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
