import {View, Text} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import I18n from 'redux-i18n';

import configureStore from './src/redux/store';
import translations from './src/constants/translations';
import Routes from './src/Routes';

const store = configureStore();
const App = () => {
  return (
    <Provider store={store}>
      <I18n translations={translations} initialLang={'en'}>
        <Routes />
      </I18n>
    </Provider>
  );
};

export default App;
