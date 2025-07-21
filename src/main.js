import { getImagesByQuery } from './js/pixabay-api';
import { createGallery, clearGallery, showLoader } from './js/render-functions';

const form = document.querySelector('.form');
const searchInput = document.querySelector('[name="search-text"]');
const gallery = document.querySelector('.gallery');
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

form.addEventListener('submit', event => {
  event.preventDefault();
  const submitData = searchInput.value.trim();
  showLoader();

  getImagesByQuery(submitData).then(data => {
    clearGallery(gallery);
    gallery.insertAdjacentHTML('beforeend', createGallery(data.hits));
    lightbox.refresh();
  });
});
