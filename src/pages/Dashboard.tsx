import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useNavigation} from '@react-navigation/native';
import {useAppDispatch} from '../redux/hooks';
import ImcCalc from './ImcCalc';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCalculator, faHouse} from '@fortawesome/free-solid-svg-icons';
import GEB from './GEB';
import GET from './GET';

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
        name="gastoEnergeticoBasal"
        component={GEB}
        options={{
          tabBarLabel: 'Gasto Energetico Basal',
          tabBarIcon: ({color}) => (
            <FontAwesomeIcon icon={faCalculator} color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="gastoEnergetico"
        component={GET}
        options={{
          tabBarLabel: 'Gasto Energetico Total',
          tabBarIcon: ({color}) => (
            <FontAwesomeIcon icon={faCalculator} color={color} size={20} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
