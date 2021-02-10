(()=>{"use strict";function e(){let e=document.createElement("div");e.setAttribute("id","navBar"),e.setAttribute("class","hiding");let t=document.createElement("h1");t.innerHTML="Café en Mouvement",e.appendChild(t);let n=document.createElement("div");n.setAttribute("id","links");let i=document.createElement("h2");i.setAttribute("class","link"),i.setAttribute("id","home"),i.innerHTML="Home";let d=document.createElement("h2");d.setAttribute("class","link"),d.setAttribute("id","menu"),d.innerHTML="Menu";let l=document.createElement("h2");l.setAttribute("class","link"),l.setAttribute("id","story"),l.innerHTML="Our Story";let r=document.createElement("h2");return r.setAttribute("class","link"),r.setAttribute("id","visit"),r.innerHTML="Visit Us",n.appendChild(i),n.appendChild(d),n.appendChild(l),n.appendChild(r),e.appendChild(n),e}function t(){document.querySelector("#content").style.backgroundImage="url(../dist/imgs/pastries.jpg";let e=document.createElement("div");e.setAttribute("id","main"),e.setAttribute("class","hiding");let t=document.createElement("div");t.setAttribute("id","headline"),t.innerHTML="Expérience à la maison",e.appendChild(t);let n=document.createElement("div");n.classList.add("buttons"),e.append(n);let i=document.createElement("h2");i.classList.add("button"),i.classList.add("link"),i.innerHTML="Menu",n.appendChild(i);let d=document.createElement("h2");return d.classList.add("button"),d.classList.add("button2"),d.classList.add("link"),d.innerHTML="Visit Us",n.appendChild(d),e}function n(i){let d=document.querySelector("#content");d.innerHTML="";let l=e();switch(d.appendChild(l),i){case"Home":d.appendChild(t());break;case"Menu":d.appendChild(function(){document.querySelector("#content").style.backgroundImage="url(../dist/imgs/viet-coffee.jpg";let e=document.createElement("div");e.setAttribute("id","main");let t=document.createElement("h1");t.setAttribute("class","header"),t.textContent="Beverages",e.appendChild(t);let n=document.createElement("div");n.setAttribute("class","submenu"),e.appendChild(n);let i=document.createElement("div");i.setAttribute("class","item"),n.appendChild(i);let d=document.createElement("h2");d.textContent="Iced Vietnamese Coffee",i.appendChild(d);let l=document.createElement("h3");l.textContent="A freshly pressed expresso with condensed milk served over ice.",i.appendChild(l);let r=document.createElement("div");r.setAttribute("class","item"),n.appendChild(r);let a=document.createElement("h2");a.textContent="Hot Vietnamese Coffee",r.appendChild(a);let s=document.createElement("h3");s.textContent="A freshly pressed expresso with condensed milk served hot.",r.appendChild(s);let c=document.createElement("div");c.setAttribute("class","item"),n.appendChild(c);let o=document.createElement("h2");o.textContent="Iced Milk Tea",c.appendChild(o);let u=document.createElement("h3");u.textContent="A freshly pressed expresso with condensed milk served hot.",c.appendChild(u);let m=document.createElement("div");m.setAttribute("class","item"),n.appendChild(m);let p=document.createElement("h2");p.textContent="Hot Milk Tea",m.appendChild(p);let h=document.createElement("h3");return h.textContent="A freshly pressed expresso with condensed milk served hot.",m.appendChild(h),e}());break;case"Our Story":d.appendChild(function(){document.querySelector("#content").style.backgroundImage="url(../dist/imgs/story.jpg";let e=document.createElement("div");e.setAttribute("id","main");let t=document.createElement("h1");t.textContent="Our Story",t.setAttribute("class","header"),e.appendChild(t);let n=document.createElement("div");return n.setAttribute("id","items"),n.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",e.appendChild(n),e}());break;case"Visit Us":d.appendChild(function(){document.querySelector("#content").style.backgroundImage="url(../dist/imgs/pastries.jpg";let e=document.createElement("div");e.setAttribute("id","main");let t=document.createElement("h1");t.textContent="Visit Us",t.setAttribute("class","header"),e.appendChild(t);let n=document.createElement("div");return n.setAttribute("id","items"),e.appendChild(n),e}())}document.querySelectorAll(".link").forEach((e=>e.addEventListener("click",(e=>{n(e.target.textContent)}))))}!function(){let i=document.querySelector("#content"),d=e(),l=t();i.appendChild(d),i.appendChild(l),document.querySelectorAll(".link").forEach((e=>e.addEventListener("click",(e=>{n(e.target.textContent)}))))}()})();