import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useNavigation} from '@react-navigation/native';
import {useAppDispatch} from '../redux/hooks';
import ImcCalc from './ImcCalc';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCalculator, faHouse} from '@fortawesome/free-solid-svg-icons';
import GEB from './FormulaHarris';
import GET from './FormulaMifflin';

const Tab = createBottomTabNavigator();

export default function Dashboard() {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="imcCalc"
        component={ImcCalc}
        options={{
          tabBarLabel: 'IMC',
          tabBarIcon: ({color}) => (
            <FontAwesomeIcon icon={faHouse} color={color} size={20} />
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name="gastoEnergeticoHarris"
        component={GEB}
        options={{
          tabBarLabel: 'Formula Harris',
          tabBarIcon: ({color}) => (
            <FontAwesomeIcon icon={faCalculator} color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="gastoEnergeticoMifflin"
        component={GET}
        options={{
          tabBarLabel: 'Formula Mifflin',
          tabBarIcon: ({color}) => (
            <FontAwesomeIcon icon={faCalculator} color={color} size={20} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
