import React from 'react';
import {Card, Heading, SafeAreaView, Text, VStack} from '@gluestack-ui/themed';
import UIInput from '../components/UIInput';
import UIBotton from '../components/UIBotton';

export default function GET() {
  return (
    <SafeAreaView flex={1} gap={50} justifyContent="center">
      <VStack justifyContent="center" gap={15} mx={20}>
        <Card gap={15}>
          <Heading>Gasto Energético Total</Heading>
          <Text>Peso:</Text>
          <UIInput placeHolder="kg" />
          <Text>Altura:</Text>
          <UIInput placeHolder="Centímetros" />
          <Text>Edad:</Text>
          <UIInput placeHolder="Edad" />
          <Text>Actividad Fisica:</Text>
          <UIInput placeHolder="Introduce el dato" />
          <UIBotton title="Calcular" bg="" />
          <Text>Resultado</Text>
          <UIBotton title="Limpiar" bg="green" />
        </Card>
      </VStack>
    </SafeAreaView>
  );
}
