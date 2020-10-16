import React from 'react';
import { Map, Marker, TileLayer } from 'react-leaflet';

import { FiPlus } from 'react-icons/fi';

import {
  Container,
  Main,
  Form,
  InputBlock,
  ButtonSelect,
  ButtonConfirm,
} from './styles';
import Sidebar from '../../components/Sidebar';
import mapIcon from '../../utils/mapIcon';

const CreateOrphanage: React.FC = () => {
  return (
    <Container id="page-create-orphanage">
      <Sidebar />

      <Main>
        <Form className="create-orphanage-form">
          <fieldset>
            <legend>Dados</legend>

            <Map
              center={[-27.2092052, -49.6401092]}
              style={{ width: '100%', height: 280 }}
              zoom={15}
            >
              <TileLayer
                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
              />

              <Marker
                interactive={false}
                icon={mapIcon}
                position={[-27.2092052, -49.6401092]}
              />
            </Map>

            <InputBlock className="input-block">
              <label htmlFor="name">Nome</label>
              <input id="name" />
            </InputBlock>

            <InputBlock className="input-block">
              <label htmlFor="about">
                Sobre <span>Máximo de 300 caracteres</span>
              </label>
              <textarea id="name" maxLength={300} />
            </InputBlock>

            <InputBlock className="input-block">
              <label htmlFor="images">Fotos</label>

              <div className="uploaded-image" />

              <button className="new-image">
                <FiPlus size={24} color="#15b6d6" />
              </button>
            </InputBlock>
          </fieldset>

          <fieldset>
            <legend>Visitação</legend>

            <InputBlock className="input-block">
              <label htmlFor="instructions">Instruções</label>
              <textarea id="instructions" />
            </InputBlock>

            <InputBlock className="input-block">
              <label htmlFor="opening_hours">Nome</label>
              <input id="opening_hours" />
            </InputBlock>

            <InputBlock className="input-block">
              <label htmlFor="open_on_weekends">Atende fim de semana</label>

              <ButtonSelect className="button-select">
                <button type="button" className="active">
                  Sim
                </button>
                <button type="button">Não</button>
              </ButtonSelect>
            </InputBlock>
          </fieldset>

          <ButtonConfirm className="confirm-button" type="submit">
            Confirmar
          </ButtonConfirm>
        </Form>
      </Main>
    </Container>
  );
};

export default CreateOrphanage;

// return `https://a.tile.openstreetmap.org/${z}/${x}/${y}.png`;
