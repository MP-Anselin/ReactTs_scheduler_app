import React from 'react';

import { GlobalProvider } from './context/GlobalState';
import { HomePage } from './pages/Home.page';

const App = () => {
  return (
    <GlobalProvider>
      <HomePage />
    </GlobalProvider>
  );
};

export default App;
