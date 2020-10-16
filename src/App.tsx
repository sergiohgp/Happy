import React from 'react';

import GlobalStyle from './styles/global';
import 'leaflet/dist/leaflet.css';

import Routes from './routes/routes';

const App: React.FC = () => {
  return (
    <>
      <Routes />
      <GlobalStyle />
    </>
  );
};

export default App;
