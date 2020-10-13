import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import { Container, Content, AnimationContainer } from './styles';

import happyfaceImg from '../../assets/happyface.svg';

const OrphanagesMap: React.FC = () => {
  return (
    <Container>
      <Content>
        <AnimationContainer>
          <aside>
            <header>
              <img src={happyfaceImg} alt="GoBarber" />
              <h1>Choose an orphanage</h1>
              <p>The children are waiting for your visit</p>
            </header>

            <footer>
              <strong>Toronto</strong>
              <span>Ontario</span>
            </footer>
          </aside>
        </AnimationContainer>
      </Content>
      <Link to="/app">
        <FiPlus size={26} color="rgba(0, 0, 0, 0.6)" />
      </Link>

      <Map
        center={[43.738299, -79.5047]}
        zoom={15}
        style={{
          width: '100%',
          height: '100%',
        }}
      >
        {/* <TileLayer url="https://a.tile/openstreetmap.org/{z}/{x}/{y}.png" /> */}
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />
      </Map>
    </Container>
  );
};

export default OrphanagesMap;
