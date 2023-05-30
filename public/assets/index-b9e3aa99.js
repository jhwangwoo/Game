(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))u(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&u(d)}).observe(document,{childList:!0,subtree:!0});function l(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function u(o){if(o.ep)return;o.ep=!0;const n=l(o);fetch(o.href,n)}})();function B(){$(".icon1").draggable({containment:".icon__box",scroll:!1,start:function(){$(".cursor img").attr("src","images/game_mouse01.png"),$("header").css("background-color","rgba(233, 65, 65, 0.582)"),$("header").css("transition","all 0.3s"),$("#footer .info").html("현재 빨강 음악 듣기를 클릭 하셨습니다.")},stop:function(){setTimeout(function(){t()},7e3)}}),$(".icon2").draggable({containment:".icon__box",scroll:!1,start:function(){$(".cursor img").attr("src","images/game_mouse02.png"),$("header").css("background-color","rgba(54, 57, 231, 0.582)"),$("header").css("transition","all 0.3s"),$("#footer .info").html("현재 파랑 음악 듣기를 클릭 하셨습니다.")},stop:function(){setTimeout(function(){t()},7e3)}}),$(".icon3").draggable({containment:".icon__box",scroll:!1,start:function(){$(".cursor img").attr("src","images/game_mouse03.png"),$("header").css("background-color","rgba(88, 240, 28, 0.582)"),$("header").css("transition","all 0.3s"),$("#footer .info").text("현재 초록 음악 듣기를 클릭 하셨습니다.")},stop:function(){setTimeout(function(){t()},7e3)}}),$(".icon4").draggable({containment:".icon__box",scroll:!1,start:function(){$(".cursor img").attr("src","images/game_mouse04.png"),$("header").css("background-color","rgba(237, 240, 63, 0.582)"),$("header").css("transition","all 0.3s"),$("#footer .info").text("현재 노랑 음악 듣기를 클릭 하셨습니다.")},stop:function(){setTimeout(function(){t()},7e3)}}),$(".music__wrap").draggable({scroll:!1}),window.onload=function(){window.addEventListener("mousemove",l=>{gsap.to(".cursor",{duration:0,left:l.pageX-5,top:l.pageY-10})})};const t=()=>{let l=navigator.userAgent.toLowerCase(),u=window.screen.width,o=window.screen.height;l.indexOf("macintosh")>-1?document.querySelector("#footer .info").innerHTML="현재 맥을 사용중 이며, 화면 크기는 "+u+" X "+o+" 입니다.":l.indexOf("windows")>-1?document.querySelector("#footer .info").innerHTML="현재 윈도우를 사용중 이며, 화면 크기는 "+u+" X "+o+" 입니다.":l.indexOf("iphone")>-1?document.querySelector("#footer .info").innerHTML="현재 아이폰을 사용중 이며, 화면 크기는 "+u+" X "+o+" 입니다.":l.indexOf("android")>-1&&(document.querySelector("#footer .info").innerHTML="현재 안드로이드폰을 사용중 이며, 화면 크기는 "+u+" X "+o+" 입니다.")};t();const i=()=>{const l=new Date,u={year:"numeric",month:"long",day:"2-digit",hour:"numeric",minute:"numeric",hour12:!1},o=l.toLocaleString("ko-KR",u);document.querySelector(".time").innerHTML=o};i(),setInterval(i,1e3)}function D(){const t=[{name:"1. 저리가라",artist:"parrick parrick",img:"music_view01",audio:"music_audio01"},{name:"2. 저리가라",artist:"parrick parrick",img:"music_view02",audio:"music_audio02"},{name:"3. 저리가라",artist:"parrick parrick",img:"music_view03",audio:"music_audio03"},{name:"4. 저리가라",artist:"parrick parrick",img:"music_view04",audio:"music_audio04"},{name:"5. 저리가라",artist:"parrick parrick",img:"music_view05",audio:"music_audio05"},{name:"6. 저리가라",artist:"parrick parrick",img:"music_view06",audio:"music_audio06"},{name:"7. 저리가라",artist:"parrick parrick",img:"music_view07",audio:"music_audio07"},{name:"8. 저리가라",artist:"parrick parrick",img:"music_view08",audio:"music_audio08"},{name:"9. 저리가라",artist:"parrick parrick",img:"music_view09",audio:"music_audio09"},{name:"10. 저리가라",artist:"parrick parrick",img:"music_view10",audio:"music_audio10"}],i=document.querySelector(".music__wrap"),l=i.querySelector(".music__control .title h3"),u=i.querySelector(".music__control .title p"),o=i.querySelector(".music__view .image img"),n=i.querySelector("#main-audio"),d=i.querySelector("#control-play"),p=i.querySelector("#control-prev"),f=i.querySelector("#control-next"),M=i.querySelector(".progress"),q=i.querySelector(".progress .bar"),_=i.querySelector(".progress .timer .current"),O=i.querySelector(".progress .timer .duration"),g=i.querySelector("#control-repeat"),x=i.querySelector("#control-list"),E=i.querySelector(".music__list"),h=i.querySelector(".music__list ul"),N=i.querySelector(".music__list h3 .close");let a=1;const r=e=>{l.innerText=t[e-1].name,u.innerText=t[e-1].artist,o.src=`images/${t[e-1].img}.png`,o.alt=t[e-1].name,n.src=`audio/${t[e-1].audio}.mp3`},c=()=>{i.classList.add("paused"),d.setAttribute("title","정지"),d.setAttribute("class","stop"),n.play()},y=()=>{i.classList.remove("paused"),d.setAttribute("title","재생"),d.setAttribute("class","play"),n.pause()},v=()=>{a==1?a=t.length:a--,r(a),c(),A()},L=()=>{a==t.length?a=1:a++,r(a),c(),A()};n.addEventListener("timeupdate",e=>{const s=e.target.currentTime,m=e.target.duration;let b=s/m*100;q.style.width=`${b}%`,n.addEventListener("loadeddata",()=>{let k=n.duration,P=Math.floor(k/60),I=Math.floor(k%60);I<10&&(I=`0${I}`),O.innerText=`${P}:${I}`});let T=Math.floor(s/60),w=Math.floor(s%60);w<10&&(w=`0${w}`),_.innerText=`${T}:${w}`}),M.addEventListener("click",e=>{let s=M.clientWidth,m=e.offsetX,b=n.duration;n.currentTime=m/s*b}),g.addEventListener("click",()=>{switch(g.getAttribute("class")){case"repeat":g.setAttribute("class","repeat_one"),g.setAttribute("title","한곡 반복");break;case"repeat_one":g.setAttribute("class","shuffle"),g.setAttribute("title","랜덤 반복");break;case"shuffle":g.setAttribute("class","repeat"),g.setAttribute("title","전체 반복");break}}),n.addEventListener("ended",()=>{switch(g.getAttribute("class")){case"repeat":L();break;case"repeat_one":c();break;case"shuffle":let s=Math.floor(Math.random()*t.length+1);do s=Math.floor(Math.random()*t.length+1);while(a==s);a=s,r(a),c();break}A()}),d.addEventListener("click",()=>{i.classList.contains("paused")?y():c()}),p.addEventListener("click",()=>{v()}),f.addEventListener("click",()=>{L()}),x.addEventListener("click",()=>{E.classList.add("show")}),N.addEventListener("click",()=>{E.classList.remove("show")});for(let e=0;e<t.length;e++){let s=`
            <li data-index="${e+1}">
                <span class="img">
                    <img src="images/${t[e].img}.png" alt="">
                </span>
                <span class="title">
                    <strong>${t[e].name}</strong>
                    <em>${t[e].artist}</em>
                    <audio class="${t[e].audio}" src="audio/${t[e].audio}.mp3"></audio>
                </span>
                <span class="audio-duration" id="${t[e].audio}">재생시간</span>
            </li>
        `;h.insertAdjacentHTML("beforeend",s);let m=h.querySelector(`#${t[e].audio}`),b=h.querySelector(`.${t[e].audio}`);b.addEventListener("loadeddata",()=>{let T=b.duration,w=Math.floor(T/60),k=Math.floor(T%60);k<10&&(k=`0${k}`),m.innerText=`${w}:${k}`,m.setAttribute("data-duration",`${w}:${k}`)})}function A(){const e=h.querySelectorAll("li");for(let s=0;s<e.length;s++){let m=e[s].querySelector(".audio-duration");if(e[s].addEventListener("click",function(){S(this)}),e[s].classList.contains("playing")){e[s].classList.remove("playing");let b=m.getAttribute("data-duration");m.innerText=b}e[s].getAttribute("data-index")==a&&(e[s].classList.add("playing"),m.innerText="재생중")}}A();function S(e){a=e.getAttribute("data-index"),r(a),c(),A()}window.addEventListener("load",()=>{r(a)})}function H(){const t=document.querySelector(".tetris__play .view ul"),i=20,l=12,u={Tmino:[[[2,1],[0,1],[1,0],[1,1]],[[1,2],[0,1],[1,0],[1,1]],[[1,2],[0,1],[2,1],[1,1]],[[1,2],[1,0],[2,1],[1,1]]],Imino:[[[0,0],[1,0],[2,0],[3,0]],[[2,0],[2,1],[2,2],[2,3]],[[2,2],[3,2],[0,2],[1,2]],[[1,2],[1,3],[1,1],[1,0]]],Omino:[[[1,0],[2,1],[1,1],[2,0]],[[2,1],[1,0],[1,1],[2,0]],[[2,1],[1,1],[1,0],[2,0]],[[2,1],[1,1],[2,0],[1,0]]],Zmino:[[[0,0],[1,0],[1,1],[2,1]],[[1,0],[0,1],[1,1],[0,2]],[[0,0],[1,0],[2,1],[1,1]],[[0,1],[1,0],[1,1],[0,2]]],Smino:[[[2,0],[1,0],[1,1],[0,1]],[[2,1],[1,0],[1,1],[2,2]],[[1,0],[2,0],[1,1],[0,1]],[[1,0],[1,1],[2,1],[2,2]]],Lmino:[[[1,0],[1,1],[1,2],[2,2]],[[2,1],[1,1],[0,1],[0,2]],[[0,0],[1,1],[1,0],[1,2]],[[0,1],[1,1],[2,1],[2,0]]],Jmino:[[[2,0],[1,0],[1,1],[1,2]],[[2,1],[0,1],[1,1],[2,2]],[[1,0],[1,1],[1,2],[0,2]],[[0,0],[0,1],[1,1],[2,1]]]};let o=0,n=500,d,p;const f={type:"",direction:0,top:0,left:4};function M(){p={...f},q(),x(),_()}function q(){for(let r=0;r<i;r++){const c=document.createElement("li"),y=document.createElement("ul");for(let v=0;v<l;v++){const L=document.createElement("li");y.prepend(L)}c.prepend(y),t.prepend(c)}}function _(r=""){const{type:c,direction:y,top:v,left:L}=p;document.querySelectorAll(".moving").forEach(S=>{S.classList.remove(c,"moving")}),u[c][y].some(S=>{const e=S[0]+L,s=S[1]+v,m=t.childNodes[s]?t.childNodes[s].childNodes[0].childNodes[e]:null;if(E(m))m.classList.add(c,"moving");else return p={...f},setTimeout(()=>{_(),r==="top"&&O()}),!0}),f.left=L,f.top=v,f.direction=y}function O(){document.querySelectorAll(".moving").forEach(c=>{c.classList.remove("moving"),c.classList.add("seized")}),g()}function g(){t.childNodes.forEach(c=>{let y=!0;c.children[0].childNodes.forEach(v=>{v.classList.contains("seized")||(y=!1)}),y&&(c.remove(),q(),o++,scoreDisplay.innerText=o)}),x()}function x(){clearInterval(d),d=setInterval(()=>{h("top",1)},n);const r=Object.entries(u),c=Math.floor(Math.random()*r.length);f.type=r[c][0],f.top=0,f.left=4,f.direction=0,p={...f},_()}function E(r){return!(!r||r.classList.contains("seized"))}function h(r,c){p[r]+=c,_(r)}function N(){p.direction===3?p.direction=0:p.direction+=1,_()}function a(){clearInterval(d),d=setInterval(()=>{h("top",1)},10)}document.addEventListener("keydown",r=>{switch(r.keyCode){case 39:h("left",1);break;case 37:h("left",-1);break;case 40:h("top",1);break;case 32:a();break;case 38:N();break}}),window.addEventListener("DOMContentLoaded",()=>{M()})}B();D();H();
