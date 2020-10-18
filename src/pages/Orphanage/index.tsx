import React, { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { FiClock, FiInfo } from 'react-icons/fi';
import { Map, Marker, TileLayer } from 'react-leaflet';
import { useParams } from 'react-router-dom';

import Sidebar from '../../components/Sidebar';
import mapIcon from '../../utils/mapIcon';

import api from '../../services/api';

import {
  Container,
  Main,
  OrphanagesDetails,
  Images,
  OrphanageDetailContent,
  MapContainer,
  OpenDetails,
} from './styles';

interface Orphanage {
  name: string;
  latitude: number;
  longitude: number;
  about: string;
  instructions: string;
  opening_hours: string;
  open_on_weekends: string;
  images: Array<{
    id: string;
    url: string;
  }>;
}

interface OrphanageParams {
  id: string;
}

const Orphanage: React.FC = () => {
  const { id } = useParams<OrphanageParams>();
  const [orphanage, setOrphanage] = useState<Orphanage>();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    api.get(`orphanages/${id}`).then(res => {
      setOrphanage(res.data);
    });
  }, [id]);

  if (!orphanage) {
    return <p>Loading...</p>;
  }

  return (
    <Container>
      <Sidebar />

      <Main>
        <OrphanagesDetails>
          <img
            src={orphanage.images[activeImageIndex].url}
            alt={orphanage.name}
          />

          <Images>
            {orphanage.images.map((image, index) => {
              return (
                <button
                  key={orphanage.images[0].id}
                  className={activeImageIndex === index ? 'active' : ''}
                  type="button"
                  onClick={() => {
                    setActiveImageIndex(index);
                  }}
                >
                  <img src={image.url} alt={orphanage.name} />
                </button>
              );
            })}
          </Images>

          <OrphanageDetailContent>
            <h1>{orphanage.name}</h1>
            <p>{orphanage.about}</p>

            <MapContainer>
              <Map
                center={[orphanage.latitude, orphanage.longitude]}
                zoom={16}
                style={{ width: '100%', height: 280 }}
                dragging={false}
                touchZoom={false}
                zoomControl={false}
                scrollWheelZoom={false}
                doubleClickZoom={false}
              >
                <TileLayer
                  url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />
                <Marker
                  interactive={false}
                  icon={mapIcon}
                  position={[orphanage.latitude, orphanage.longitude]}
                />
              </Map>

              <footer>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://www.google.com/maps/dir/?api=1&destination=${orphanage.latitude},${orphanage.longitude}`}
                >
                  See routes on Google Maps
                </a>
              </footer>
            </MapContainer>

            <hr />

            <h2>Visiting instructions</h2>
            <p>{orphanage.instructions}</p>

            <OpenDetails>
              <div className="hour">
                <FiClock size={32} color="#15B6D6" />
                Segunda à Sexta
                <br />
                {orphanage.opening_hours}
              </div>
              {orphanage.open_on_weekends ? (
                <div className="open-on-weekends">
                  <FiInfo size={32} color="#39CC83" />
                  Open
                  <br />
                  on weekend
                </div>
              ) : (
                  <div className="closed-on-weekends">
                    <FiInfo size={32} color="#ff669d" />
                  Closed
                    <br />
                  on weekend
                  </div>
                )}
            </OpenDetails>

            <button type="button" className="contact-button">
              <FaWhatsapp size={20} color="#FFF" />
              Get in touch
            </button>
          </OrphanageDetailContent>
        </OrphanagesDetails>
      </Main>
    </Container>
  );
};

export default Orphanage;
