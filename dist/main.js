(()=>{"use strict";function e(){let e=document.createElement("div");e.setAttribute("id","navBar"),e.setAttribute("class","hiding");let t=document.createElement("h1");t.innerHTML="Café en Mouvement",e.appendChild(t);let n=document.createElement("div");n.setAttribute("id","links");let i=document.createElement("h2");i.setAttribute("class","link"),i.setAttribute("id","home"),i.innerHTML="Home";let d=document.createElement("h2");d.setAttribute("class","link"),d.setAttribute("id","menu"),d.innerHTML="Menu";let l=document.createElement("h2");l.setAttribute("class","link"),l.setAttribute("id","story"),l.innerHTML="Our Story";let r=document.createElement("h2");return r.setAttribute("class","link"),r.setAttribute("id","visit"),r.innerHTML="Visit Us",n.appendChild(i),n.appendChild(d),n.appendChild(l),n.appendChild(r),e.appendChild(n),e}function t(){let e=document.createElement("div");e.setAttribute("id","main"),e.setAttribute("class","hiding");let t=document.createElement("div");t.setAttribute("id","headline"),t.innerHTML="Expérience à la maison",e.appendChild(t);let n=document.createElement("div");n.classList.add("buttons"),e.append(n);let i=document.createElement("h2");i.classList.add("button"),i.classList.add("link"),i.innerHTML="Menu",n.appendChild(i);let d=document.createElement("h2");return d.classList.add("button"),d.classList.add("button2"),d.classList.add("link"),d.innerHTML="Visit Us",n.appendChild(d),e}function n(){let e=document.createElement("div");e.textContent="hello testing",e.setAttribute("id","main");let t=document.createElement("div");return t.setAttribute("id","items"),e.appendChild(t),e}function i(d){let l=document.querySelector("#content");l.innerHTML="";let r=e();switch(l.appendChild(r),d){case"Home":l.appendChild(t());break;case"Menu":l.appendChild(n());break;case"Our Story":l.appendChild(function(){let e=document.createElement("div");e.textContent="hello testing story",e.setAttribute("id","main");let t=document.createElement("div");return t.setAttribute("id","items"),e.appendChild(t),e}());break;case"Visit Us":l.appendChild(function(){let e=document.createElement("div");e.textContent="hello testing visit",e.setAttribute("id","main");let t=document.createElement("div");return t.setAttribute("id","items"),e.appendChild(t),e}())}document.querySelectorAll(".link").forEach((e=>e.addEventListener("click",(e=>{i(e.target.textContent)}))))}!function(){let d=document.querySelector("#content"),l=e(),r=t(),a=n();d.appendChild(l),d.appendChild(r),d.appendChild(a),document.querySelectorAll(".link").forEach((e=>e.addEventListener("click",(e=>{i(e.target.textContent)}))))}()})();