import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GastoEnergetico from '../pages/GEB';
import Dashboard from '../pages/Dashboard';

const Stack = createNativeStackNavigator();

export default function MainRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="dashboard"
          component={Dashboard}
          options={{headerTitle: 'Calculadora de IMC', headerShown: false}}
        />
        <Stack.Screen
          name="details"
          component={GastoEnergetico}
          options={{
            headerTitle: 'Crypto Details',
            headerBackTitleVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
