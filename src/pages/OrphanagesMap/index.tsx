import React, { useEffect, useState } from 'react';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import api from '../../services/api';

import { Container, Content, AnimationContainer } from './styles';

import happyfaceImg from '../../assets/happyface.svg';
import mapIcon from '../../utils/mapIcon';

interface Orphanage {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
}

const OrphanagesMap: React.FC = () => {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

  useEffect(() => {
    api.get('orphanages').then(res => {
      setOrphanages(res.data);
    });
  }, [orphanages]);

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
        {orphanages.map(orphanage => {
          return (
            <Marker
              key={orphanage.id}
              icon={mapIcon}
              position={[orphanage.latitude, orphanage.longitude]}
            >
              <Popup
                closeButton={false}
                minWidth={240}
                maxWidth={240}
                className="map-popup"
              >
                {orphanage.name}
                <Link to={`/orphanages/${orphanage.id}`}>
                  <FiArrowRight size={20} color="#fff" />
                </Link>
              </Popup>
            </Marker>
          );
        })}
      </Map>
    </Container>
  );
};

export default OrphanagesMap;
