import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
