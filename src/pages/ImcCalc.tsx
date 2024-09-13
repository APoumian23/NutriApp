import React, {useState} from 'react';
import {Card, Heading, SafeAreaView, Text, VStack} from '@gluestack-ui/themed';
import UIInput from '../components/UIInput';

export default function ImcCalc() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  function calcImc() {
    const calcImc = +peso / (+altura * +altura);
    const resultado = calcImc;
    if (resultado < 18.5) {
      return `${resultado} "Es Delgad@"`;
    } else if (resultado < 24.9) {
      return `${resultado} "Es Normal"`;
    } else if (resultado > 24.9) {
      return `${resultado} "Esta en Sobrepeso"`;
    } else if (resultado > 29.9) {
      return `${resultado} "Esta en Obesidad"`;
    }
  }
  return (
    <VStack flex={1} justifyContent="center" bg="$secondary0">
      <SafeAreaView>
        <Heading>NutriApp</Heading>
      </SafeAreaView>
      <VStack flex={8} justifyContent="flex-start">
        <Card
          size="lg"
          variant="elevated"
          m="$3"
          marginHorizontal={'$6'}
          borderRadius={'$lg'}
          gap={30}>
          <Heading>Calculemos el IMC</Heading>
          <Text>Altura(m)</Text>
          <UIInput placeHolder="Introduce la altura" keyBoardType={'number'} />
          <Text>Peso(kg)</Text>
          <UIInput placeHolder="Introduce el peso" />
          <Text>Resultado</Text>
          {calcImc()}
        </Card>
      </VStack>
    </VStack>
  );
}
