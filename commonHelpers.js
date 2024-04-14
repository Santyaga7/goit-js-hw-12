import{a as P,S as R,i as l}from"./assets/vendor-06b1bbdf.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const S="https://pixabay.com/api/",q="43177088-2530548a60ff9c950be2fcaec",N=async({imageName:s="",page:t=1,perPage:r=15})=>await P(S,{params:{key:q,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true",page:t,per_page:r}}),u=document.querySelector(".gallery"),g=document.querySelector(".loader"),d=document.querySelector(".load-more-btn"),v=s=>{const t=s.reduce((r,i)=>{const{webformatURL:e,largeImageURL:o,tags:n,likes:y,views:L,comments:w,downloads:b}=i;return r+=`<li class="gallery-item">
          <a class="gallery-link" href="${o}">
            <img
              class="gallery-image"
              width="360"
              height="200"
              loading="lazy"
              src="${e}"
              alt="${n}"
            />
          </a>
          <ul class="description-list">
            <li>Likes <span>${y}</span></li>
            <li>Views <span>${L}</span></li>
            <li>Comments <span>${w}</span></li>
            <li>Downloads <span>${b}</span></li>
          </ul>
        </li>
        `,r},"");u.insertAdjacentHTML("beforeend",t),B()},A=()=>{u.innerHTML=""},B=()=>{const s={captionsData:"alt",captionDelay:250};let t=new R(".gallery a",s);t.on("show.simplelightbox"),t.refresh()},E=()=>{g.classList.remove("is-hidden")},I=()=>{g.classList.add("is-hidden")},M=()=>{d.classList.remove("is-hidden")},p=()=>{d.classList.add("is-hidden")},O=()=>{const s=document.querySelector(".gallery-item"),{height:t}=s.getBoundingClientRect();window.scrollBy(0,t*2)},c=document.querySelector(".form"),m=15;let a=1,f="";c.addEventListener("submit",$);d.addEventListener("click",H);async function $(s){s.preventDefault(),a=1;const t=new FormData(c).get("imageName").trim();if(!t){D();return}p(),A(),await h({imageName:t,page:a,perPage:m}),f=t,c.reset()}async function H(){a++,await h({imageName:f,page:a,perPage:m}),O()}async function h({imageName:s,page:t,perPage:r}){E();try{const{data:i}=await N({imageName:s,page:t,perPage:r}),{hits:e,totalHits:o}=i;if(!e.length){x();return}v(e),M(),o<=m&&(p(),l.info({message:"We're sorry, but you've reached the end of search results",position:"topRight",messageLineHeight:"150%"}))}catch(i){C(i)}finally{I()}}function C(s){l.error({title:"Error",message:`${s.toString()}`,position:"topRight",messageLineHeight:"150%"})}function x(){l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",messageLineHeight:"150%"})}function D(){l.warning({title:"Caution",message:"Please fill the input",position:"topRight",messageLineHeight:"150%"})}
//# sourceMappingURL=commonHelpers.js.map