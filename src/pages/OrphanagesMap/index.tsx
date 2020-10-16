import React from 'react';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import Leaflet from 'leaflet';

import 'leaflet/dist/leaflet.css';

import { Container, Content, AnimationContainer } from './styles';

import happyfaceImg from '../../assets/happyface.svg';

const mapIcon = Leaflet.icon({
  iconUrl: happyfaceImg,
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 10],
});

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
      <Link to="/orphanages/create">
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
        <Marker icon={mapIcon} position={[43.738299, -79.5047]}>
          <Popup
            closeButton={false}
            minWidth={240}
            maxWidth={240}
            className="map-popup"
          >
            AACC
            <Link to="/orphanages/f6fab9fe-bb02-4f8a-a584-ee99bd1fa8f1">
              <FiArrowRight size={20} color="#fff" />
            </Link>
          </Popup>
        </Marker>
      </Map>
    </Container>
  );
};

export default OrphanagesMap;
