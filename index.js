import{S as c,a as m,i as f}from"./assets/vendor-B4hrrHhy.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();document.querySelector(".gallery");const n=document.querySelector(".loader");new c(".gallery a",{captionsData:"alt",captionDelay:250});function p(r){return r.map(({webformatURL:s,largeImageURL:o,tags:e,likes:t,views:i,comments:u,downloads:d})=>`
        <li class="gallery-item">
        <a href="${o}">
          <img class="gallery-img" src="${s}" alt="${e}" />
        </a>
          <ul class="stat-list">
            <li class="stat-item">
              <span class="stat-title">Likes</span>${t}
            </li>
            <li class="stat-item">
              <span class="stat-title">Views</span>${i}
            </li>
            <li class="stat-item">
              <span class="stat-title">Comments</span>${u}
            </li>
            <li class="stat-item">
              <span class="stat-title">Downloads</span>${d}
            </li>
          </ul>
        </li>
    `).join("")}function y(r){r&&(r.innerHTML="")}function h(){n&&n.classList.remove("hidden")}function g(){n&&n.classList.add("hidden")}function L(r){return m("https://pixabay.com/api/",{params:{key:"51395904-122be9b434c3d42803bb62926",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(a=>{if(a.data.hits==0){f.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}return console.log(a.data),a.data}).catch(a=>{alert("Error fetching images:",a)}).finally(()=>{g()})}const b=document.querySelector(".form"),S=document.querySelector('[name="search-text"]'),l=document.querySelector(".gallery");let q=new c(".gallery a",{captionsData:"alt",captionDelay:250});b.addEventListener("submit",r=>{r.preventDefault();const a=S.value.trim();h(),L(a).then(s=>{y(l),l.insertAdjacentHTML("beforeend",p(s.hits)),q.refresh()})});
//# sourceMappingURL=index.js.map
