(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{MDd0:function(e,t){$(".video-review-player").on("click",(function(){$(this).prev().css("display","none")}))},NtAs:function(e,t){var n=document.querySelector(".registry-section");document.querySelector(".registry-section-2");(n||n)&&$(".input-tel").intlTelInput({utilsScript:"https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/8.4.6/js/utils.js",initialCountry:"ua",nationalMode:!1})},PWUN:function(e,t){var n=document.querySelector(".video__volume"),i=document.querySelector("video"),a=document.querySelector(".main-section"),r=document.querySelector(".registry-section");(a||r)&&n.addEventListener("click",(function(){n.style=" visibility: hidden; opacity: 0",i.muted=!1}))},UThS:function(e,t){var n=function(e,t){return Math.floor(Math.random()*(t-e+1))+e},i=function e(){var t=document.querySelector(".online .pin"),i=parseInt(t.innerHTML),a=i-20,r=i+20;a<100&&(a=i),r>200&&(function(e){throw new TypeError('"'+e+'" is read-only')}("end"),r=i),t.innerHTML=n(a,r),setTimeout(e,n(3e3,13e3))};(document.querySelector(".main-section")||document.querySelector(".registry-section"))&&(function e(){var t=document.querySelector(".slots .pin"),i=parseInt(t.innerHTML);i=i>5?i-n(1,3):i-n(-2,2),t.innerHTML=i<2?1:i,setTimeout(e,n(9e3,13e3))}(),i())},ch6i:function(e,t,n){},e6Wu:function(e,t,n){"use strict";n.r(t);n("ch6i"),n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n("PWUN");function i(e){var t,n=$(e).find("input[aria-required='true']"),i=!1,a=[];return n.each((function(){var e=$(this)[0].dataset,t=e.valLength,n=e.valLengthMin,i=e.valLengthMax,r=e.valRequired,o=$(this).val().length;o<=0?a.push(r):(o<=n||o>=i)&&a.push(t)})),function(e,t){$(e).find(".validation-summary-valid").attr("class","validation-summary-errors");var n=$(e).find(".validation-summary-errors"),i=document.createElement("ul");$(t).each((function(e,t){var n=document.createElement("li");$(n).prepend(t),i.appendChild(n)})),n.html(i)}(e,a),a.length<1?(i=!0,t=e,$(t).find(".validation-summary-errors").attr("class","validation-summary-valid"),$(t).find(".validation-summary-valid ul").html(""),i):i}var a=n("vDqi"),r=n.n(a);r.a.defaults.baseURL=" https://quantum-sys.herokuapp.com";var o={subscribeUser:function(e){return r.a.post("/subscribe",e)}},u=$(".main-section"),l=$(".registry-section"),c=$(".registry-section-2"),s=$("body");u&&$(".main-form").on("submit",(function(e){e.preventDefault(),function(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}("form",{name:e.currentTarget.firstname.value,email:e.currentTarget.email.value}),s.addClass("unavailable"),document.location.replace("quantum/dist/send.html")})),function(){if(l||c){var e=function(e){var t=localStorage.getItem(e);return JSON.parse(t)||""}("form"),t=e.name,n=void 0===t?"":t,a=e.email,r=void 0===a?"":a,u=$(".reg-form");u.each((function(){$(this)[0].firstname.value=n,$(this)[0].email.value=r})),u.each((function(){$(this).on("submit",(function(e){if(e.preventDefault(),i(e.target)){var t=$(e.target).find("inputs").context,n=t.firstname,a=t.lastname,r=t.email,u=t.phoneNumber,l={firstname:n.value,lastname:a.value,email:r.value,phone:u.value};s.addClass("unavailable"),o.subscribeUser(l).then((function(){!function(e){localStorage.removeItem(e)}("form"),document.location.replace("quantum/dist/thanks.html")})).catch((function(e){return console.log(e)})).finally((function(){s.removeClass("unavailable")}))}}))}))}}();n("UThS"),n("NtAs"),n("MDd0")}},[["e6Wu",1,2]]]);