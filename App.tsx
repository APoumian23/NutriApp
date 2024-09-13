/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {config} from '@gluestack-ui/config';
import {GluestackUIProvider} from '@gluestack-ui/themed';
import ImcCalc from './src/pages/ImcCalc';

function App(): React.JSX.Element {
  return (
    <GluestackUIProvider config={config}>
      <ImcCalc />
    </GluestackUIProvider>
  );
}

export default App;
