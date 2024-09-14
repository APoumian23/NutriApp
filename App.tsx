/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {config} from '@gluestack-ui/config';
import {GluestackUIProvider} from '@gluestack-ui/themed';
import MainRoutes from './src/routes/MainRoutes';
import {useAppSelector} from './src/redux/hooks';

function App(): React.JSX.Element {
  const {} = useAppSelector(state => state.main);
  return (
    <GluestackUIProvider config={config}>
      <MainRoutes />
    </GluestackUIProvider>
  );
}

export default App;
