import{S as d,a as f,i as n}from"./assets/vendor-C5BuWtzx.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const l=document.querySelector(".gallery"),c=document.querySelector(".loader"),p=new d(".gallery a",{captionsData:"alt",captionDelay:250});function g(a){const r=a.map(({webformatURL:s,largeImageURL:o,tags:e,likes:t,views:i,comments:u,downloads:m})=>`
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
    `).join("");l.insertAdjacentHTML("beforeend",r),p.refresh()}function h(){l.innerHTML=""}function y(){c.classList.remove("hidden")}function L(){c.classList.add("hidden")}function b(a){return f("https://pixabay.com/api/",{params:{key:"51395904-122be9b434c3d42803bb62926",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const S=document.querySelector(".form"),q=document.querySelector('[name="search-text"]');document.querySelector(".gallery");S.addEventListener("submit",a=>{a.preventDefault();const r=q.value.trim();if(!r){n.error({message:"Please fill out search field",position:"topRight"});return}h(),y(),b(r).then(s=>{if(s.hits.length==0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(s.hits)}).catch(s=>{n.error({message:"Something went wrong. Please try again later.",position:"topRight"}),console.log("Error fetching images:"+s.message)}).finally(()=>{L()})});
//# sourceMappingURL=index.js.map
