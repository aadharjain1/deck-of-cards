(this["webpackJsonpdeck-of-cards"]=this["webpackJsonpdeck-of-cards"]||[]).push([[0],[,,,,,function(e,t,a){e.exports=a.p+"static/media/hearts.236e820d.png"},function(e,t,a){e.exports=a.p+"static/media/diamonds.66786da3.png"},function(e,t,a){e.exports=a.p+"static/media/spades.12977290.png"},function(e,t,a){e.exports=a.p+"static/media/clubs.32c2f0d6.png"},,function(e,t,a){e.exports=a(24)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),s=a.n(c),o=(a(15),a(9)),i=(a(16),function(e){var t=e.setState,a=e.createInitialState;return r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"title"},"Deck of Cards"),r.a.createElement("button",{className:"primaryBtn",id:"newGameBtn",onClick:function(){return t(a())}},"New Game"))}),u=a(1),d=a(2),l=a(5),m=a.n(l),f=a(6),p=a.n(f),v=a(7),E=a.n(v),g=a(8),b=a.n(g),k=(a(17),{hearts:{color:"red",image:m.a},diamonds:{color:"red",image:p.a},spades:{color:"black",image:E.a},clubs:{color:"black",image:b.a}}),h=function(e){var t=e.type,a=e.cardDetails,n=e.stacked,c=void 0!==n&&n,s=function(e){switch(e){case 1:return"A";case 11:return"J";case 12:return"Q";case 13:return"K";default:return e}}(a.number);return r.a.createElement("div",{className:c?"card stackedCard":"card",id:t+a.number,draggable:!0,onDragStart:function(e){return function(e){e.dataTransfer.setData("cardDetails",JSON.stringify(Object(d.a)({},t,Object(u.a)({},a)))),e.dataTransfer.dropEffect="move"}(e)},style:{color:k[t].color,top:"".concat(a.top,"%"),left:"".concat(a.left,"%"),zIndex:a.zIndex}},r.a.createElement("div",{className:"topNumber"},s),r.a.createElement("div",{className:"cardImage"},r.a.createElement("img",{src:k[t].image,alt:"Suit Icon",draggable:"false"})),r.a.createElement("div",{className:"bottomNumber"},s))},S=(a(18),function(e){var t=e.type,a=e.suitStackedCards,n=e.state,c=e.setState;return r.a.createElement("div",{className:"cardStack"},r.a.createElement("div",{className:"default"},t),r.a.createElement("div",{className:"cardContainer"},a.map((function(e){return r.a.createElement(h,{type:t,cardDetails:e,stacked:!0,key:t+e.number})}))),r.a.createElement("div",{className:"dropContainer",onDrop:function(e){return function(e,t,a,n){var r=JSON.parse(e.dataTransfer.getData("cardDetails"))||{};if(r[t]){var c=Object(u.a)({},a);c.cardsLayout[t]=a.cardsLayout[t].filter((function(e){return e.number!==r[t].number})),c.stackedCards[t].push(r[t]),n(c)}}(e,t,n,c)},onDragOver:function(e){return function(e){e.preventDefault()}(e)}}))}),N=(a(19),function(e,t){return Math.floor(Math.random()*t)+e}),y=["hearts","diamonds","spades","clubs"],C=function(e){var t=e.stackedCards,a=e.state,n=e.setState;return r.a.createElement("div",{className:"stackSection"},y.map((function(e){return r.a.createElement(S,{type:e,suitStackedCards:t[e],state:a,setState:n,key:e})})))},D=(a(20),function(e){var t=e.cardsLayout;return r.a.createElement("div",{className:"cardsSection"},y.map((function(e){return t[e].map((function(t){return r.a.createElement(h,{type:e,cardDetails:t,key:e+t.number})}))})))}),w=(a(21),function(e){var t=e.state,a=e.setState;return r.a.createElement("div",{className:"gameSection"},r.a.createElement(C,{stackedCards:t.stackedCards,state:t,setState:a}),r.a.createElement(D,{cardsLayout:t.cardsLayout}))}),x=(a(22),function(){return r.a.createElement("footer",{className:"footer"},"Copyrights \xa9 ",(new Date).getFullYear())}),I=(a(23),function(){var e={};y.forEach((function(t){e[t]=[];for(var a=1;a<=13;a++)e[t].push({number:a,top:N(0,60),left:N(3,85),zIndex:N(0,10)})}));var t={};return y.forEach((function(e){return t[e]=[]})),{cardsLayout:e,stackedCards:t}});var O=function(){var e=Object(n.useState)(I()),t=Object(o.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",{className:"App"},r.a.createElement(i,{setState:c,createInitialState:I}),r.a.createElement(w,{state:a,setState:c}),r.a.createElement(x,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.6b800139.chunk.js.map