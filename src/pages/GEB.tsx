import React, {useEffect, useState} from 'react';
import {
  Card,
  Heading,
  SafeAreaView,
  ScrollView,
  Text,
  VStack,
} from '@gluestack-ui/themed';
import UIInput from '../components/UIInput';
import UIBotton from '../components/UIBotton';
import UISelector from '../components/UISelector';
import {Alert} from 'react-native';
import {useAppDispatch, useAppSelector} from '../redux/hooks';
import {gebCalc} from '../redux/slices/mainSlice';

export default function GastoEnergetico() {
  const [sexo, setSexo] = useState('M');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [edad, setEdad] = useState('');
  const [actividad, setActividad] = useState('');
  const [condicion, setCondicion] = useState('');
  const [temperatura, setTemperatura] = useState('');

  const {resultadoGeb} = useAppSelector(state => state.main);
  const dispatch = useAppDispatch();

  function calculatorGebHandler() {
    if (!sexo || !peso || !altura || !actividad || !condicion || !temperatura) {
      Alert.alert('Porfavor llena todos los campos');
      return;
    }
    const data = {sexo, peso, altura, edad, actividad, condicion, temperatura};

    dispatch(gebCalc(data));
  }

  function cleanCalculatorHandler() {
    // dispatch(imcCalcReset());
    // setPeso('');
    // setAltura('');
  }

  useEffect(() => {
    setCondicion('');
  }, [sexo]);

  return (
    <SafeAreaView flex={1} gap={50} justifyContent="center">
      <ScrollView>
        <VStack justifyContent="center" gap={15} mx={20}>
          <Card gap={5}>
            <Heading>Gasto Energético Total</Heading>
            <Text>Sexo:</Text>
            <UISelector
              items={[
                {label: 'Masculino', id: 'M'},
                {label: 'Femenino', id: 'F'},
              ]}
              onValueChange={setSexo}
              value={sexo}
            />
            <Text>Peso:</Text>
            <UIInput placeHolder="kg" onChangeTexte={setPeso} value={peso} />
            <Text>Altura:</Text>
            <UIInput
              placeHolder="Centímetros"
              onChangeTexte={setAltura}
              value={altura}
            />
            <Text>Edad:</Text>
            <UIInput placeHolder="Edad" onChangeTexte={setEdad} value={edad} />
            <Text>Actividad Fisica:</Text>
            <UISelector
              items={[
                {label: 'En Cama', id: '1.2'},
                {label: 'Ligera o Sedentaria', id: '1.53'},
                {label: 'Moderado o Activo', id: '1.76'},
                {label: 'Muy Activo', id: '2.25'},
              ]}
              onValueChange={setActividad}
              value={actividad}
            />
            <Text>Condición Fisica:</Text>
            {sexo === 'M' && (
              <UISelector
                items={[
                  {label: 'Ninguno', id: '1.0'},
                  {label: 'Tumor Solido', id: '1.15'},
                  {label: 'Leucemia Linfoma', id: '1.27'},
                  {label: 'Enfermedad Inflamatoria Intestinal', id: '1.11'},
                  {label: 'Enfermedad Hepatica', id: '1.7'},
                  {label: 'Quemaduras', id: '1.64'},
                  {label: 'Enfermedad Pancreatica', id: '1.13'},
                  {label: 'Cirugia General', id: '1.2'},
                  {label: 'Trasplante', id: '1.19'},
                  {label: 'Sepsis', id: '1.33'},
                  {label: 'Absceso', id: '1.12'},
                  {label: 'Otras Infecciones', id: '1.16'},
                  {label: 'Fistula', id: '0'},
                ]}
                onValueChange={setCondicion}
                value={condicion}
              />
            )}
            {sexo === 'F' && (
              <UISelector
                items={[
                  {label: 'Ninguno', id: '1.0'},
                  {label: 'Tumor Solido', id: '1.25'},
                  {label: 'Leucemia Linfoma', id: '1.37'},
                  {label: 'Enfermedad Inflamatoria Intestinal', id: '1.12'},
                  {label: 'Enfermedad Hepatica', id: '1.11'},
                  {label: 'Quemaduras', id: '1.52'},
                  {label: 'Enfermedad Pancreatica', id: '1.21'},
                  {label: 'Cirugia General', id: '1.39'},
                  {label: 'Trasplante', id: '1.27'},
                  {label: 'Sepsis', id: '1.27'},
                  {label: 'Absceso', id: '1.39'},
                  {label: 'Otras Infecciones', id: '1.39'},
                  {label: 'Fistula', id: '1.15'},
                ]}
                onValueChange={setCondicion}
                value={condicion}
              />
            )}
            <Text>Temperatura:</Text>
            <UISelector
              items={[
                {label: 'Normal', id: '1'},
                {label: 'Mayor o igual a 38 °C', id: '1.1'},
                {label: 'Mayor o igual a 39 °C', id: '1.2'},
                {label: 'Mayor o igual a 40 °C', id: '1.3'},
                {label: 'Mayor o igual a 41 °C', id: '1.4'},
              ]}
              onValueChange={setTemperatura}
              value={temperatura}
            />
            <UIBotton title="Calcular" bg="" onPress={calculatorGebHandler} />
            <Text>Resultado</Text>
            <Text>{resultadoGeb}</Text>
            <UIBotton
              title="Limpiar"
              bg="green"
              onPress={cleanCalculatorHandler}
            />
          </Card>
        </VStack>
      </ScrollView>
    </SafeAreaView>
  );
}
