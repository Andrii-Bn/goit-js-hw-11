const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
        <li class="gallery-item">
        <a href="${largeImageURL}">
          <img class="gallery-img" src="${webformatURL}" alt="${tags}" />
        </a>
          <ul class="stat-list">
            <li class="stat-item">
              <span class="stat-title">Likes</span>${likes}
            </li>
            <li class="stat-item">
              <span class="stat-title">Views</span>${views}
            </li>
            <li class="stat-item">
              <span class="stat-title">Comments</span>${comments}
            </li>
            <li class="stat-item">
              <span class="stat-title">Downloads</span>${downloads}
            </li>
          </ul>
        </li>
    `
    )
    .join('');

  return markup;
}

export function clearGallery(gallery) {
  if (gallery) {
    gallery.innerHTML = '';
  }
}

export function showLoader() {
  if (loader) loader.classList.remove('hidden');
}

export function hideLoader() {
  if (loader) loader.classList.add('hidden');
}
