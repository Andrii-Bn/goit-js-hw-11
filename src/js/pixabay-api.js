import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { hideLoader } from './render-functions';

export function getImagesByQuery(query) {
  return axios(`https://pixabay.com/api/`, {
    params: {
      key: '51395904-122be9b434c3d42803bb62926',
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  })
    .then(res => {
      if (res.data.hits == 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }
      console.log(res.data);
      return res.data;
    })
    .catch(err => {
      alert('Error fetching images:', err);
    })
    .finally(() => {
      hideLoader();
    });
}
