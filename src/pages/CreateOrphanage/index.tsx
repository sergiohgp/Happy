import React, { FormEvent, useState, ChangeEvent } from 'react';
import { Map, Marker, TileLayer } from 'react-leaflet';
import { LeafletMouseEvent } from 'leaflet';

import { FiPlus, FiX } from 'react-icons/fi';

import { useHistory } from 'react-router-dom';
import {
  Container,
  Main,
  Form,
  InputBlock,
  ButtonSelect,
  ButtonConfirm,
  ImageContainer,
} from './styles';
import Sidebar from '../../components/Sidebar';
import mapIcon from '../../utils/mapIcon';
import api from '../../services/api';

const CreateOrphanage: React.FC = () => {
  const history = useHistory();

  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });
  const [name, setName] = useState('');
  const [about, setAbout] = useState('');
  const [instructions, setInstructions] = useState('');
  const [opening_hours, setOpeningHours] = useState('');
  const [open_on_weekends, setOpenOnWeekends] = useState(true);
  const [images, setImages] = useState<File[]>([]);
  const [previewImages, setPreviewImages] = useState<string[]>([]);

  function handleMapClick(e: LeafletMouseEvent): void {
    const { lat, lng } = e.latlng;

    setPosition({
      latitude: lat,
      longitude: lng,
    });
  }

  async function handleSubmit(e: FormEvent): Promise<void> {
    e.preventDefault();

    console.log(name, about);

    const { latitude, longitude } = position;

    const data = new FormData();

    data.append('name', name);
    data.append('about', about);
    data.append('latitude', String(latitude));
    data.append('longitude', String(longitude));
    data.append('instructions', instructions);
    data.append('opening_hours', String(opening_hours));
    data.append('open_on_weekends', String(open_on_weekends));

    images.forEach(image => {
      data.append('images', image);
    });

    await api.post('orphanages', data);

    alert('Success');

    history.push('/app');
  }

  function handleSelectImages(e: ChangeEvent<HTMLInputElement>): void {
    if (!e.target.files) {
      return;
    }

    const selectedImages = Array.from(e.target.files);

    setImages(selectedImages);

    const selectedImagesPreview = selectedImages.map(image => {
      return URL.createObjectURL(image);
    });

    setPreviewImages(selectedImagesPreview);
  }

  // function handleDeletePreview() {
  //   console.log('ok');
  // }

  return (
    <Container>
      <Sidebar />

      <Main>
        <Form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Info</legend>

            <Map
              center={[43.738996, -79.507101]}
              style={{ width: '100%', height: 280 }}
              zoom={15}
              onclick={handleMapClick}
            >
              <TileLayer
                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
              />

              {position.latitude !== 0 && (
                <Marker
                  interactive={false}
                  icon={mapIcon}
                  position={[position.latitude, position.longitude]}
                />
              )}
            </Map>

            <InputBlock>
              <label htmlFor="name">Name</label>
              <input
                className="inputBlock"
                id="name"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </InputBlock>

            <InputBlock>
              <label htmlFor="about">
                About
                <span>Maximum of 300 chars</span>
              </label>
              <textarea
                className="inputBlock"
                id="name"
                maxLength={300}
                value={about}
                onChange={e => setAbout(e.target.value)}
              />
            </InputBlock>

            <InputBlock>
              <label htmlFor="images">Pictures</label>

              <ImageContainer>
                {previewImages.map(image => {
                  return (
                    <>
                      <img key={image} src={image} alt={name} />
                      <button type="button" className="xButton">
                        <FiX size={28} color="#ff669d" />
                      </button>
                    </>
                  );
                })}

                <label htmlFor="images[]" className="new-image">
                  <FiPlus size={24} color="#15b6d6" />
                </label>

                <input
                  multiple
                  onChange={handleSelectImages}
                  type="file"
                  id="images[]"
                />
              </ImageContainer>
            </InputBlock>
          </fieldset>

          <fieldset>
            <legend>Visiting</legend>

            <InputBlock>
              <label htmlFor="instructions">Instructions</label>
              <textarea
                className="inputBlock"
                id="instructions"
                value={instructions}
                onChange={e => setInstructions(e.target.value)}
              />
            </InputBlock>

            <InputBlock>
              <label htmlFor="opening_hours">Open hours</label>
              <input
                className="inputBlock"
                id="opening_hours"
                value={opening_hours}
                onChange={e => setOpeningHours(e.target.value)}
              />
            </InputBlock>

            <InputBlock>
              <label htmlFor="open_on_weekends">Open on weekends</label>

              <ButtonSelect>
                <button
                  type="button"
                  className={open_on_weekends ? 'activeYes' : ''}
                  onClick={() => setOpenOnWeekends(true)}
                >
                  Yes
                </button>
                <button
                  type="button"
                  className={!open_on_weekends ? 'activeNo' : ''}
                  onClick={() => setOpenOnWeekends(false)}
                >
                  No
                </button>
              </ButtonSelect>
            </InputBlock>
          </fieldset>

          <ButtonConfirm type="submit">Confirm</ButtonConfirm>
        </Form>
      </Main>
    </Container>
  );
};

export default CreateOrphanage;

// return `https://a.tile.openstreetmap.org/${z}/${x}/${y}.png`;
