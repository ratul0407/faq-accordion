(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const c=document.querySelectorAll(".accordion-question h2");c.forEach(i=>{const r=i.querySelector(".accordion-trigger"),o=i.parentElement.nextElementSibling,s=r.querySelector("img");r.addEventListener("click",function(){o.classList.toggle("show"),o.classList.contains("show")?(o.style.maxHeight=o.scrollHeight+"px",s.setAttribute("src","./icon-minus.svg"),r.setAttribute("aria-expanded","true")):(o.style.maxHeight="0px",s.setAttribute("src","./icon-plus.svg"))})});
