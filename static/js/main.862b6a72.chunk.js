(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(7),r=n.n(a),i=(n(12),n(2)),o=n.n(i),u=n(5),d=n(3),l=(n(14),n(15),n(6)),p=n.n(l),h=n(0);function j(e){return(1.8*(e-273.15)+32).toFixed(0)}var f=function(e){var t=e.weatherData;return Object(h.jsxs)("div",{className:"main",children:[Object(h.jsx)("p",{className:"header",children:t.name}),Object(h.jsxs)("div",{className:"flex",children:[Object(h.jsxs)("p",{className:"day",children:[p()().format("dddd"),", ",Object(h.jsx)("span",{children:p()().format("LL")})]}),Object(h.jsx)("p",{className:"description",children:t.weather[0].main})]}),Object(h.jsxs)("div",{className:"flex",children:[Object(h.jsxs)("p",{className:"temp",children:["Temperature: ",j(t.main.temp),"\xb0F "]}),Object(h.jsxs)("p",{className:"temp",children:["Humidity: ",t.main.humidity," %"]})]}),Object(h.jsxs)("div",{className:"flex",children:[Object(h.jsxs)("p",{className:"sunrise-sunset",children:["Hi:",j(t.main.temp_max),"\xb0F Low:",j(t.main.temp_min),"\xb0F"]}),Object(h.jsxs)("p",{className:"sunrise-sunset",children:["Wind Speed: ",t.wind.speed," MPH"]})]}),Object(h.jsxs)("div",{className:"flex",children:[Object(h.jsxs)("p",{className:"sunrise-sunset",children:["Sunrise: ",new Date(1e3*t.sys.sunrise).toLocaleTimeString("en-IN")]}),Object(h.jsxs)("p",{className:"sunrise-sunset",children:["Sunset: ",new Date(1e3*t.sys.sunset).toLocaleTimeString("en-IN")]})]})]})};var m=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)([void 0]),r=Object(d.a)(a,2),i=r[0],l=r[1],p=Object(c.useState)([void 0]),j=Object(d.a)(p,2),m=j[0],b=j[1],x=Object(c.useState)([void 0]),O=Object(d.a)(x,2),v=O[0],g=O[1];function w(){return(w=Object(u.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("fetching weather"),e.next=3,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(t,"&appid=1cc9d32cdb1cdf53293e1aad91562a89")).then((function(e){return e.json()})).then((function(e){return console.log(e),e}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(){return(N=Object(u.a)(o.a.mark((function e(t,n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("fetching location"),void 0===t||void 0===typeof n){e.next=5;break}return e.next=4,fetch("https://us1.locationiq.com/v1/reverse.php?key=pk.25830325a0c832028916fe2ec70cfbda&lat=".concat(t,"&lon=").concat(n,"&format=json")).then((function(e){return e.json()})).then((function(e){return console.log(e),e}));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return navigator.geolocation.getCurrentPosition((function(e){s(e.coords.latitude),l(e.coords.longitude)})),Object(c.useEffect)((function(){(function(e,t){return N.apply(this,arguments)})(n,i).then((function(e){try{g(e.address.city)}catch(t){console.log(t)}})),function(e){return w.apply(this,arguments)}(v).then((function(e){try{b(e)}catch(t){console.log(t)}}))}),[i,v]),Object(h.jsx)("div",{className:"App",children:"undefined"!=typeof m.main?Object(h.jsx)(f,{weatherData:m}):Object(h.jsx)("div",{children:"..loading"})})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),a(e),r(e)}))};n(18);r.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(m,{})}),document.getElementById("root")),b()}},[[19,1,2]]]);
//# sourceMappingURL=main.862b6a72.chunk.js.map