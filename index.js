import{S as l,a as d,i as p}from"./assets/vendor-C5BuWtzx.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();document.querySelector(".gallery");const c=document.querySelector(".loader");new l(".gallery a",{captionsData:"alt",captionDelay:250});function f(a){return a.map(({webformatURL:s,largeImageURL:o,tags:e,likes:t,views:i,comments:u,downloads:m})=>`
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
              <span class="stat-title">Downloads</span>${m}
            </li>
          </ul>
        </li>
    `).join("")}function y(a){a.innerHTML=""}function h(){c.classList.remove("hidden")}function g(){c.classList.add("hidden")}function L(a){return d("https://pixabay.com/api/",{params:{key:"51395904-122be9b434c3d42803bb62926",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>{if(r.data.hits.length==0){p.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}return r.data}).catch(r=>{alert("Error fetching images:"+r.message)}).finally(()=>{g()})}const b=document.querySelector(".form"),S=document.querySelector('[name="search-text"]'),n=document.querySelector(".gallery");let q=new l(".gallery a",{captionsData:"alt",captionDelay:250});b.addEventListener("submit",a=>{a.preventDefault();const r=S.value.trim();h(),L(r).then(s=>{y(n),n.insertAdjacentHTML("beforeend",f(s.hits)),q.refresh()})});
//# sourceMappingURL=index.js.map
