(()=>{"use strict";function e(){let e=document.createElement("div");e.setAttribute("id","navBar"),e.setAttribute("class","hiding");let t=document.createElement("h1");t.innerHTML="Café en Mouvement",e.appendChild(t);let n=document.createElement("div");n.setAttribute("id","links");let i=document.createElement("h2");i.setAttribute("class","link"),i.setAttribute("id","home"),i.innerHTML="Home";let d=document.createElement("h2");d.setAttribute("class","link"),d.setAttribute("id","menu"),d.innerHTML="Menu";let l=document.createElement("h2");l.setAttribute("class","link"),l.setAttribute("id","story"),l.innerHTML="Our Story";let a=document.createElement("h2");return a.setAttribute("class","link"),a.setAttribute("id","visit"),a.innerHTML="Visit Us",n.appendChild(i),n.appendChild(d),n.appendChild(l),n.appendChild(a),e.appendChild(n),e}function t(){document.querySelector("#content").style.backgroundImage="url(../dist/imgs/pastries.jpg";let e=document.createElement("div");e.setAttribute("id","main"),e.setAttribute("class","hiding");let t=document.createElement("div");t.setAttribute("id","headline"),t.innerHTML="Expérience à la maison",e.appendChild(t);let n=document.createElement("div");n.classList.add("buttons"),e.append(n);let i=document.createElement("h2");i.classList.add("button"),i.classList.add("link"),i.innerHTML="Menu",n.appendChild(i);let d=document.createElement("h2");return d.classList.add("button"),d.classList.add("button2"),d.classList.add("link"),d.innerHTML="Visit Us",n.appendChild(d),e}function n(i){let d=document.querySelector("#content");d.innerHTML="";let l=e();switch(d.appendChild(l),i){case"Home":d.appendChild(t());break;case"Menu":d.appendChild(function(){document.querySelector("#content").style.backgroundImage="url(../dist/imgs/viet-coffee.jpg";let e=document.createElement("div");e.setAttribute("id","main");let t=document.createElement("h1");t.setAttribute("class","header"),t.textContent="Beverages",e.appendChild(t);let n=document.createElement("div");n.setAttribute("class","submenu"),e.appendChild(n);let i=document.createElement("div");i.setAttribute("class","item"),n.appendChild(i);let d=document.createElement("h2");d.textContent="Iced Vietnamese Coffee",i.appendChild(d);let l=document.createElement("h3");l.textContent="A freshly pressed expresso with condensed milk served over ice.",i.appendChild(l);let a=document.createElement("div");a.setAttribute("class","item"),n.appendChild(a);let r=document.createElement("h2");r.textContent="Hot Vietnamese Coffee",a.appendChild(r);let s=document.createElement("h3");s.textContent="A freshly pressed expresso with condensed milk served hot.",a.appendChild(s);let o=document.createElement("div");o.setAttribute("class","item"),n.appendChild(o);let c=document.createElement("h2");c.textContent="Iced Milk Tea",o.appendChild(c);let u=document.createElement("h3");u.textContent="A freshly pressed expresso with condensed milk served hot.",o.appendChild(u);let m=document.createElement("div");m.setAttribute("class","item"),n.appendChild(m);let p=document.createElement("h2");p.textContent="Hot Milk Tea",m.appendChild(p);let h=document.createElement("h3");h.textContent="A freshly pressed expresso with condensed milk served hot.",m.appendChild(h);let C=document.createElement("h1");C.setAttribute("class","header"),C.textContent="Desserts",e.appendChild(C),C.style.backgroundImage="url(../dist/imgs/macarons.jpg",C.style.backgroundSize="cover";let b=document.createElement("div");b.setAttribute("class","submenu"),e.appendChild(b);let E=document.createElement("div");E.setAttribute("class","item"),b.appendChild(E);let g=document.createElement("h2");g.textContent="Macarons",E.appendChild(g);let v=document.createElement("h3");v.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",E.appendChild(v);let A=document.createElement("div");A.setAttribute("class","item"),b.appendChild(A);let x=document.createElement("h2");x.textContent="Mille Feulle Crepe Cake",A.appendChild(x);let k=document.createElement("h3");k.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",A.appendChild(k);let f=document.createElement("div");f.setAttribute("class","item"),b.appendChild(f);let y=document.createElement("h2");y.textContent="Croissant",f.appendChild(y);let q=document.createElement("h3");q.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",f.appendChild(q);let L=document.createElement("div");L.setAttribute("class","item"),b.appendChild(L);let M=document.createElement("h2");M.textContent="Cupcakes",L.appendChild(M);let H=document.createElement("h3");return H.textContent="Sapien pellentesque habitant morbi tristique senectus et netus et malesuada. Nisl suscipit adipiscing bibendum est ultricies.",L.appendChild(H),e}());break;case"Our Story":d.appendChild(function(){document.querySelector("#content").style.backgroundImage="url(../dist/imgs/story.jpg";let e=document.createElement("div");e.setAttribute("id","main");let t=document.createElement("h1");t.textContent="Our Story",t.setAttribute("class","header"),e.appendChild(t);let n=document.createElement("div");return n.setAttribute("id","storyText"),n.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",e.appendChild(n),e}());break;case"Visit Us":d.appendChild(function(){document.querySelector("#content").style.backgroundImage="url(../dist/imgs/pastries.jpg";let e=document.createElement("div");e.setAttribute("id","main");let t=document.createElement("h1");t.textContent="Visit Us",t.setAttribute("class","header"),e.appendChild(t);let n=document.createElement("div");return n.setAttribute("id","storyText"),n.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",story.appendChild(n),e.appendChild(n),e}())}document.querySelectorAll(".link").forEach((e=>e.addEventListener("click",(e=>{n(e.target.textContent)}))))}!function(){let i=document.querySelector("#content"),d=e(),l=t();i.appendChild(d),i.appendChild(l),document.querySelectorAll(".link").forEach((e=>e.addEventListener("click",(e=>{n(e.target.textContent)}))))}()})();