(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["76baf610"],{4917:function(M,t,L){"use strict";var j=L("cb7c"),u=L("9def"),e=L("0390"),N=L("5f1b");L("214f")("match",1,(function(M,t,L,i){return[function(L){var j=M(this),u=void 0==L?void 0:L[t];return void 0!==u?u.call(L,j):new RegExp(L)[t](String(j))},function(M){var t=i(L,M,this);if(t.done)return t.value;var a=j(M),n=String(this);if(!a.global)return N(a,n);var r=a.unicode;a.lastIndex=0;var s,o=[],c=0;while(null!==(s=N(a,n))){var y=String(s[0]);o[c]=y,""===y&&(a.lastIndex=e(n,u(a.lastIndex),r)),c++}return 0===c?null:o}]}))},"6ed0":function(M,t,L){"use strict";var j=L("8fd9"),u=L.n(j);u.a},"8fd9":function(M,t,L){},9224:function(M){M.exports=JSON.parse('{"name":"traefik-ui","version":"2.0.0","description":"Traefik UI","productName":"Traefik","cordovaId":"us.containo.traefik","private":true,"scripts":{"transfer":"node dev/scripts/transfer.js","lint":"eslint --ext .js,.vue src","test-unit":"mocha-webpack --mode=production \'./src/**/*.spec.js\'","dev":"export APP_ENV=\'development\' && quasar dev","build-quasar":"quasar build","build-staging":"export NODE_ENV=\'production\' && export APP_ENV=\'development\' && yarn build-quasar","build":"export NODE_ENV=\'production\' && export APP_ENV=\'production\' && yarn build-quasar && yarn transfer spa","build:nc":"yarn build"},"dependencies":{"@quasar/extras":"^1.0.0","axios":"^0.19.0","bowser":"^2.5.2","chart.js":"^2.8.0","dot-prop":"^5.2.0","iframe-resizer":"^4.2.11","lodash.isequal":"4.5.0","moment":"^2.24.0","quasar":"^1.4.4","query-string":"^6.13.1","vh-check":"^2.0.5","vue-chartjs":"^3.4.2","vuex-map-fields":"^1.3.4"},"devDependencies":{"@quasar/app":"^1.2.4","@vue/eslint-config-standard":"^4.0.0","@vue/test-utils":"^1.0.0-beta.29","babel-eslint":"^10.0.1","chai":"4.2.0","eslint":"^5.10.0","eslint-loader":"^2.1.1","eslint-plugin-prettier":"3.1.1","eslint-plugin-mocha":"6.2.1","eslint-plugin-vue":"^5.0.0","mocha":"^6.2.2","mocha-webpack":"^2.0.0-beta.0","node-sass":"^4.12.0","prettier":"1.19.1","sass-loader":"^7.1.0"},"engines":{"node":">= 8.9.0","npm":">= 5.6.0","yarn":">= 1.6.0"},"browserslist":["last 1 version, not dead, ie >= 11"]}')},"9b19":function(M,t){M.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4NCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDg0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgPHBhdGggZmlsbD0iI0ZGRiIgZD0iTTcuMTQyIDI0Yy0xLjI0MSAwLTIuMjMtLjQwNi0yLjk2My0xLjIxNy0uNzM1LS44MjItMS4xMDItMi4wODItMS4xMDItMy43ODF2LTkuNDdIMS4xMDFjLS4zNTYgMC0uNjMxLS4wODgtLjgyNi0uMjYzQy4wOTIgOS4wOTMgMCA4Ljg1OCAwIDguNTYyYzAtLjI4NS4wOTItLjUxNi4yNzUtLjY5MS4xODQtLjE4Ni40NTQtLjI4LjgxLS4yOGgxLjk5MmwuMzg5LTQuNjY5Yy4wMjItLjM1LjE3My0uNjUyLjQ1My0uOTA0LjI5Mi0uMjUyLjYxLS4zNzguOTU2LS4zNzguMzI0IDAgLjU5NC4xMDQuODEuMzEyLjIxNi4xOTcuMzI0LjQ4OC4zMjQuODcydjQuNzY4aDIuOThjLjM1NiAwIC42Mi4wOTMuNzkzLjI3OS4xODQuMTg2LjI3Ni40MjguMjc2LjcyMyAwIC42MjUtLjM1Ny45MzgtMS4wNy45MzhoLTIuOTh2OC45NmMwIDEuMTMuMTU3IDEuOTQ2LjQ3IDIuNDUuMzE0LjQ5My44MS43NCAxLjQ5Ljc0aC4xNzlsMS4xMDEtLjA1aC4wOTdjLjM1NiAwIC42MzcuMTE2Ljg0Mi4zNDYuMjA1LjIzLjMwOC40OTguMzA4LjgwNSAwIC4yNzQtLjA2LjUtLjE3OC42NzQtLjExOS4xNjUtLjMwMi4yODUtLjU1LjM2MmEzLjMxIDMuMzEgMCAwIDEtLjczLjE0OGMtLjIzNy4wMjItLjU1LjAzMy0uOTM5LjAzM2gtLjk1NnptNy43NzEgMGMtLjQwNSAwLS43NS0uMTItMS4wMzUtLjM1OC0uMjg0LS4yMzgtLjQyNy0uNTc0LS40MjctMS4wMDdWOS4yMjhjMC0uNDM0LjE0OC0uNzY0LjQ0NC0uOTkyYTEuNjIzIDEuNjIzIDAgMCAxIDEuMDUxLS4zNTdjLjQwNSAwIC43NS4xMTkgMS4wMzUuMzU3LjI5NS4yMjguNDQzLjU0Ny40NDMuOTZsLS4wMTYgMS45NWE0LjgxNSA0LjgxNSAwIDAgMSAxLjY0Mi0yLjUyYy44MzItLjY4MiAxLjgyOS0xLjAyNCAyLjk5LTEuMDI0LjM1IDAgLjYyNC4xMy44Mi4zOS4yMDkuMjYuMzEzLjU2NC4zMTMuOTEgMCAuMzI2LS4wOTMuNjA3LS4yOC44NDYtLjE4Ni4yMjctLjQ1NC4zNC0uODA0LjM0LTEuNDc4IDAtMi42MjguMzgtMy40NSAxLjEzOS0uODEuNzU4LTEuMjE1IDEuNzctMS4yMTUgMy4wMzh2OC4zN2MwIC40MzMtLjE1My43Ny0uNDYgMS4wMDdhMS42MjMgMS42MjMgMCAwIDEtMS4wNS4zNTh6bTQwLjYxLS4zODNhMS41MjIgMS41MjIgMCAwIDEtMS4wMzcuMzgzYy0uNCAwLS43NDUtLjEyOC0xLjAzNy0uMzgzLS4yOC0uMjY3LS40Mi0uNjMzLS40Mi0xLjFWOS41NzhoLTIuMTIzYy0uMzU3IDAtLjYyMS0uMDktLjc5NC0uMjY3YS45OTcuOTk3IDAgMCAxLS4yNi0uN2MwLS4yODguMDg3LS41MjcuMjYtLjcxNS4xNzMtLjE5LjQzNy0uMjg0Ljc5NC0uMjg0aDIuMTIyVjUuNDk2YzAtMS45ODcuNDEtMy4zOTcgMS4yMzItNC4yM0M1NS4wOC40MjIgNTYuMjE1IDAgNTcuNjYyIDBoMS45NzdjLjMxMyAwIC41NTYuMTE3LjcyOS4zNS4xODMuMjIyLjI3NS40ODguMjc1LjggMCAuMzEtLjA5Mi41NzctLjI3NS43OTktLjE3My4yMjItLjQyMS4zMzMtLjc0NS4zMzNoLTEuMzc4Yy0uNDY0IDAtLjgyNi4wNDQtMS4wODUuMTMzLS4yNi4wNzgtLjQ5Mi4yNi0uNjk3LjU1LS4xOTQuMjc3LS4zMy42ODItLjQwNSAxLjIxNS0uMDY1LjUyMi0uMDk3IDEuMjMzLS4wOTcgMi4xMzJ2MS4zaDIuNzM4Yy4zNTYgMCAuNjE2LjA5NC43NzguMjgzLjE3My4xODguMjU5LjQyNy4yNTkuNzE2IDAgLjY0NC0uMzQ2Ljk2Ni0xLjAzNy45NjZoLTIuNzM4djEyLjk0YzAgLjQ2Ny0uMTQ2LjgzMy0uNDM4IDEuMXptOS41NTctMjAuMDRjLS41OCAwLTEuMDQ1LS4xNjEtMS4zOTYtLjQ4NS0uMzUtLjMzNS0uNTI1LS43NjYtLjUyNS0xLjI5NSAwLS41MjkuMTc1LS45Ni41MjUtMS4yOTUuMzYyLS4zMzUuODMyLS41MDIgMS40MTMtLjUwMi41NyAwIDEuMDMuMTY3IDEuMzguNTAyLjM1LjMyNC41MjUuNzU1LjUyNSAxLjI5NSAwIC41MjktLjE3NS45Ni0uNTI2IDEuMjk1LS4zNS4zMjQtLjgxNS40ODYtMS4zOTYuNDg2ek02NS4wNTYgMjRhMS40OSAxLjQ5IDAgMCAxLTEuMDMtLjM4Yy0uMjgyLS4yNjMtLjQyNC0uNjM3LS40MjQtMS4xMjFWOS4wODdjMC0uNDYyLjE0Ny0uODI1LjQ0MS0xLjA4OWExLjU3MyAxLjU3MyAwIDAgMSAxLjA2Mi0uMzk2Yy4zOTIgMCAuNzMuMTMyIDEuMDEzLjM5Ni4yOTQuMjY0LjQ0LjYyNy40NCAxLjA5djEzLjQxYzAgLjQ2My0uMTUyLjgzMS0uNDU3IDEuMTA2YTEuNTEzIDEuNTEzIDAgMCAxLTEuMDQ1LjM5NnptOC40NC0uNDA3YTEuNTMgMS41MyAwIDAgMS0xLjA0OC4zOWMtLjQwMyAwLS43NDctLjEyNC0xLjAzLS4zNzQtLjI4NC0uMjYtLjQyNi0uNjI5LS40MjYtMS4xMDZWMS40NjRjMC0uNDU1LjE0Ny0uODEzLjQ0Mi0xLjA3My4zMDUtLjI2LjY2LS4zOTEgMS4wNjMtLjM5MS4zOTMgMCAuNzMxLjEzIDEuMDE1LjM5LjI5NC4yNi40NDIuNjE5LjQ0MiAxLjA3NFYxNC42Nmw3LjQyOC02Ljc2OGMuMjQtLjIwNy40OTYtLjMxLjc3LS4zMS4zNDggMCAuNjU0LjEzNi45MTUuNDA3LjI3My4yNzEuNDEuNTc1LjQxLjkxMSAwIC4zMDQtLjEzMi41OC0uMzkzLjgzbC01Ljk0IDUuMjg4IDYuNDk2IDYuODAyYy4yNC4yNS4zNi41MzEuMzYuODQ2IDAgLjM0Ny0uMTQyLjY1Ni0uNDI1LjkyNy0uMjczLjI3MS0uNTkuNDA3LS45NS40MDctLjM4MSAwLS43MDgtLjE1Mi0uOTgxLS40NTZsLTcuNjktOC4xMzV2Ny4wOTRjMCAuNDY2LS4xNTMuODMtLjQ1OSAxLjA5eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiM0Qjc2REQiIGQ9Ik0yOC45MyAyMy45OTNjLTEuOTQyLS4xNjMtMy40MjctLjczNC00LjUwNi0xLjczMi0xLjEtMS4wMTYtMS41Ny0yLjM0LTEuMzg0LTMuODg4LjIxNC0xLjc4MSAxLjA4My0zLjAzOSAyLjYwOC0zLjc3MyAxLjE3NS0uNTY1IDIuMzQ4LS43OCA0LjI1Ny0uNzgxIDEuMzU3IDAgMi40OTMuMTA4IDQuMjI3LjQwMS40MjkuMDczLjguMTMyLjgyNS4xMzIuMDM2IDAgLjA2NS0uMTMzLjE0NC0uNjY0LjE0Mi0uOTYuMTY3LTEuMjkyLjEyOS0xLjY3Ni0uMDQ2LS40NDgtLjEwNC0uNjYyLS4yNzktMS4wMDktLjQ1LS44OTUtMS41MTctMS40NDMtMy4yMzItMS42NTgtLjQ5LS4wNjItMS42MjItLjA3LTIuMTE0LS4wMTYtLjgyMy4wOS0xLjI4Mi4yMDYtMi4zMDYuNTgtLjYuMjE4LS42MDIuMjE4LS44NDEuMjA1LS40MTEtLjAyNC0uNjkyLS4yMDUtLjg3Mi0uNTYzLS4wNzQtLjE0Ny0uMDg3LS4yMDgtLjA4Ny0uNDA3IDAtLjI5OC4wOC0uNDU2LjM1OC0uNzA5LjYyMy0uNTY3IDEuNjcxLTEuMDUgMi43My0xLjI1OC42NzctLjEzMiAxLjAxLS4xNiAxLjkwMy0uMTU5LjkyMy4wMDIgMS41MTQuMDUyIDIuMzM1LjIgMS4zNjUuMjQ4IDIuNDAyLjY4MyAzLjE4MyAxLjMzOC4yMzIuMTk0LjU4Mi41NzcuNzMyLjhhLjQzMy40MzMgMCAwIDAgLjEwNS4xMjRjLjAxMiAwIC4wODctLjA4Mi4xNjgtLjE4MkMzOC4xOTcgNy44MyA0MC4xOSA2Ljk5OCA0Mi41MjYgN2MxLjY1MiAwIDMuMTg3LjQwOCA0LjMzMiAxLjE0OC45MDguNTg3IDEuNjQ1IDEuNDkgMS45NDMgMi4zODIuMTcxLjUxMi4xOTcuNzAxLjE5OSAxLjQ0NCAwIC40NjMtLjAxMi43NzUtLjAzOS45Mi0uMjY4IDEuNDYtLjkwNiAyLjQ3My0yLjAxMyAzLjE5My0uODkxLjU4LTIuMDEuOTItMy40NzQgMS4wNTMtLjczNi4wNjgtMi4wODQuMDYxLTIuOTU3LS4wMTQtLjc0LS4wNjMtMS42NS0uMTc1LTIuMDM4LS4yNWEzNC4xMiAzNC4xMiAwIDAgMC0xLjQ0Ni0uMjM2IDIyLjE1IDIyLjE1IDAgMCAwLS4xMTguNzJjLS4wOTcuNjI1LS4xMS43ODItLjExMyAxLjI4MS0uMDAyLjUwOC4wMDYuNTk3LjA2OS44MzIuMjAyLjc1NC42NDggMS4yNTggMS40NTggMS42NDguNzk3LjM4MyAxLjYzMS41NSAyLjg5My41NzUuNTU5LjAxMS44NDUuMDAzIDEuMTk0LS4wMzMuODQ3LS4wODcgMS4yMzMtLjE4MyAyLjM1OC0uNTg2LjI4LS4xLjU2Ny0uMTkxLjYzNi0uMjAzLjE0OS0uMDI0LjQyNi4wMjYuNTg3LjEwNi4yOTIuMTQ0LjUzNy41MjguNTM1Ljg0LS4wMDEuMzYyLS4xMjcuNTgyLS40OTcuODY4LS44ODMuNjg0LTIuMDEgMS4xMDQtMy4zNTcgMS4yNS0uNDguMDUtMS41NzYuMDU5LTIuMTA2LjAxNC0xLjQ5LS4xMjYtMi41MjYtLjM3NC0zLjQ3Mi0uODMzLS43MzgtLjM1Ny0xLjMwMS0uOC0xLjcyMi0xLjM1NmEyNC42OSAyNC42OSAwIDAgMC0uMTk1LS4yNTUgMS4zMDEgMS4zMDEgMCAwIDAtLjE1My4xNzUgNi4xMDQgNi4xMDQgMCAwIDEtMS40MjMgMS4yNTZjLS43NjMuNDgyLTEuODU5Ljg1LTIuOTY3Ljk5Ny0uMzMxLjA0NC0xLjQyOC4wOC0xLjcxLjA1N3ptMS45MDQtMi4wOGMuOTA2LS4xOTUgMS43MTItLjYzNSAyLjI5OC0xLjI1My41MzQtLjU2My45NzItMS40MDggMS4yMTMtMi4zMzguMTM2LS41MjUuMzYyLTEuOTg1LjMxMi0yLjAxNS0uMDItLjAxMi0uMTQtLjAzLS4yNjYtLjA0MmEzMS4zNjQgMzEuMzY0IDAgMCAxLS43OTktLjA5MmMtMS44Ni0uMjM0LTMuMDAyLS4zMjUtMy42NDItLjI5LTEuMjE3LjA2Ni0xLjcxMy4xNy0yLjQ0My41MS0uMzc0LjE3My0uNjMzLjM2Mi0uODM3LjYxLS4yOTMuMzU4LS40Ny43MTMtLjU5NCAxLjE5MS0uMDkuMzQ4LS4wOTkgMS4yNTktLjAxNSAxLjU1Mi4xNC40OTUuMzA3Ljc3NS42ODEgMS4xNDUuNTEzLjUwOCAxLjE5Ljg0NiAyLjAyOSAxLjAxNS40MjkuMDg3LjQxNi4wODYgMS4xMzQuMDc2LjUyMS0uMDA4LjcxNi0uMDIyLjkzLS4wNjh6bTExLjg1Ny02Ljg0NWMuNzU3LS4wNjUgMS4yMjItLjE4IDEuNzk0LS40NC40NzYtLjIxOC43NTItLjQ0IDEuMDE0LS44MTYuMzg1LS41NTIuNTM1LTEuMDc1LjUzMS0xLjg1Mi0uMDAzLS41NTQtLjA1LS43ODQtLjI0Ny0xLjE4Mi0uNDQtLjg4OC0xLjQ3LTEuNTI0LTIuODIyLTEuNzQxLS4zMzgtLjA1NS0xLjI0My0uMDQ1LTEuNTkuMDE2LS42NjQuMTE5LTEuMjI3LjMzNC0xLjcyMy42Ni0uOTE2LjYwNC0xLjU0OSAxLjUxMy0xLjkgMi43MzQtLjE0LjQ4LS4xNzYuNjYzLS4zIDEuNDlsLS4xMTMuNzYyLjE1Mi4wMTdjLjQ2LjA1IDEuNDk4LjE3MiAyLjEwMS4yNDcuMzguMDQ4Ljg0NS4wOTkgMS4wMzQuMTEzLjU0OS4wNDIgMS41MzEuMDM4IDIuMDY5LS4wMDh6Ii8+CiAgICA8L2c+Cjwvc3ZnPgo="},ea2a:function(M,t,L){"use strict";L.r(t);var j=function(){var M=this,t=M.$createElement,L=M._self._c||t;return L("q-layout",{attrs:{view:"hHh lpR fFf"}},[L("nav-bar",[L("router-view",{attrs:{name:"NavBar"}})],1),L("q-page-container",[L("router-view")],1)],1)},u=[],e=function(){var M=this,t=M.$createElement,j=M._self._c||t;return j("q-header",{staticClass:"shadow-1"},[j("section",{staticClass:"app-section bg-primary text-white"},[j("div",{staticClass:"app-section-wrap app-boxed app-boxed-xl"},[j("q-toolbar",{staticClass:"row no-wrap items-center"},[j("div",{staticClass:"q-pr-md logo"},[j("img",{attrs:{alt:"logo",src:L("9b19")}}),M.version?j("q-btn",{staticClass:"btn-menu version",attrs:{type:"a",href:"https://github.com/traefik/traefik/",target:"_blank",stretch:"",flat:"","no-caps":"",label:M.version}}):M._e()],1),j("q-tabs",{attrs:{align:"left","inline-label":"","indicator-color":"transparent","active-color":"white",stretch:""}},[j("q-route-tab",{attrs:{to:"/",icon:"eva-home-outline","no-caps":"",label:"Dashboard"}}),j("q-route-tab",{attrs:{to:"/http",icon:"eva-globe-outline","no-caps":"",label:"HTTP"}}),j("q-route-tab",{attrs:{to:"/tcp",icon:"eva-globe-2-outline","no-caps":"",label:"TCP"}}),j("q-route-tab",{attrs:{to:"/udp",icon:"eva-globe-2-outline","no-caps":"",label:"UDP"}}),j("q-btn",{staticClass:"btn-menu",attrs:{type:"a",href:"https://plugins.traefik.io",target:"_blank",flat:"","no-caps":""}},[j("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:"24",height:"24",viewBox:"0 0 24 24"}},[j("path",{attrs:{fill:"currentColor",d:"M11.2126113,3.1448713 C11.6312565,2.9520971 12.1102888,2.95151646 12.5277726,3.14429065 C12.5277726,3.1448713 12.5283533,3.1448713 12.5289339,3.1448713 L16.245063,4.87112936 C16.4448049,4.96345194 16.6056436,5.10454872 16.7420952,5.26480678 C16.7618372,5.28164549 16.7763533,5.30371001 16.7943533,5.32345194 C16.8251275,5.3640971 16.8576436,5.40300033 16.8843533,5.44712936 C16.8872565,5.45177452 16.8919017,5.45467775 16.8936436,5.45932291 L16.8936436,5.45932291 L16.8971275,5.47383904 C17.0202243,5.68461323 17.0962888,5.92093581 17.0968694,6.16945194 L17.0968694,6.16945194 L17.0968694,10.2821616 C17.0967394,10.405418 17.0798401,10.5266364 17.0478731,10.6432353 L17.1729339,10.6926777 C17.1729339,10.6932584 17.1735146,10.6932584 17.1740952,10.6932584 L17.1740952,10.6932584 L20.8902243,12.4195165 C21.0899662,12.511839 21.2508049,12.6529358 21.3872565,12.8131939 C21.4069984,12.8300326 21.4215146,12.8520971 21.4395146,12.871839 C21.4702888,12.9124842 21.5028049,12.9513874 21.5295146,12.9955165 C21.5324178,13.0001616 21.537063,13.0030648 21.5388049,13.00771 C21.5411275,13.0123552 21.5405468,13.017581 21.5422888,13.0222261 C21.6653855,13.2330003 21.7414501,13.4693229 21.7420307,13.717839 L21.7420307,13.717839 L21.7420307,17.8305487 C21.7414501,18.3810003 21.4064178,18.8908068 20.8884823,19.1300326 L20.8884823,19.1300326 L17.1740952,20.85571 C16.9644823,20.9532584 16.739192,21.0020326 16.5139017,21.0020326 C16.2880307,21.0020326 16.0627404,20.9532584 15.8525468,20.8551294 L15.8525468,20.8551294 L12.1369984,19.1294519 C12.0404689,19.0843184 11.9504046,19.0298283 11.8677687,18.9674749 C11.7859554,19.0308103 11.6952726,19.0851777 11.5981597,19.1300326 L11.5981597,19.1300326 L7.88377264,20.85571 C7.67415974,20.9532584 7.44886941,21.0020326 7.22357909,21.0020326 C6.99770812,21.0020326 6.7724178,20.9532584 6.56222425,20.8551294 L6.56222425,20.8551294 L2.84667587,19.1294519 C2.32757909,18.8867423 1.99545006,18.3734519 2.00004712,17.821839 L2.00004712,17.821839 L2.00004712,13.7184197 C2.00004712,13.4699036 2.07615974,13.233581 2.19867587,13.0233874 L2.19867587,13.0233874 L2.20274038,13.00771 C2.20506296,13.0030648 2.20970812,12.999581 2.21261135,12.9943552 C2.23815974,12.9525487 2.26893393,12.9148068 2.29912748,12.8759036 C2.31828877,12.8544197 2.33396619,12.8300326 2.35545006,12.8120326 C2.49190167,12.6517745 2.65332103,12.5112584 2.85306296,12.4189358 L2.85306296,12.4189358 L6.56745006,10.6932584 C6.60898751,10.6741316 6.65111943,10.6568968 6.69372673,10.6415552 C6.66069389,10.5235765 6.64415782,10.399515 6.64520841,10.2734519 L6.64520841,10.2734519 L6.64520841,6.17003259 C6.64520841,5.92151646 6.72132103,5.68519388 6.84383716,5.47500033 L6.84383716,5.47500033 L6.84790167,5.45932291 L6.84790167,5.45932291 L6.85777264,5.44596807 C6.88332103,5.40416162 6.91409522,5.36641968 6.94428877,5.32751646 C6.96345006,5.30603259 6.97912748,5.28164549 7.00061135,5.26364549 C7.13706296,5.10338742 7.29848232,4.9628713 7.49822425,4.87054872 L7.49822425,4.87054872 Z M3.16137076,14.0935165 L3.16137076,17.8259036 C3.16022425,17.931581 3.22757909,18.0256455 3.33732103,18.0767423 L3.33732103,18.0767423 L6.64525651,19.6125487 L6.64525651,15.7117745 L3.16137076,14.0935165 Z M12.4516933,14.0935165 L12.4516933,17.8259036 C12.4505468,17.931581 12.5179017,18.0256455 12.6276436,18.0767423 L12.6276436,18.0767423 L15.9355791,19.6125487 L15.9355791,15.7117745 L12.4516933,14.0935165 Z M11.2904178,14.0935165 L7.80654683,15.7117745 L7.80654683,19.6113874 L11.1104178,18.0761616 C11.2219017,18.0250648 11.2904178,17.9310003 11.2904178,17.8299681 L11.2904178,17.8299681 L11.2904178,14.0935165 Z M20.5807404,14.0935165 L17.0968694,15.7117745 L17.0968694,19.6113874 L20.4007404,18.0761616 C20.5122243,18.0250648 20.5807404,17.9310003 20.5807404,17.8299681 L20.5807404,17.8299681 L20.5807404,14.0935165 Z M7.22590167,11.7105487 C7.16725651,11.7105487 7.10861135,11.7227423 7.05577264,11.74771 L7.05577264,11.74771 L3.96151458,13.1842261 L7.22590167,14.7008713 L10.4897081,13.1842261 L7.39545006,11.74771 C7.34261135,11.7227423 7.28396619,11.7105487 7.22590167,11.7105487 Z M16.5162243,11.7105487 C16.4575791,11.7105487 16.3989339,11.7227423 16.3460952,11.74771 L16.3460952,11.74771 L13.2518372,13.1842261 L16.5162243,14.7008713 L19.7800307,13.1842261 L16.6857726,11.74771 C16.6329339,11.7227423 16.5742888,11.7105487 16.5162243,11.7105487 Z M7.80653206,6.54512936 L7.80653206,10.2775165 C7.80538554,10.3831939 7.87274038,10.4772584 7.98248232,10.5283552 L7.98248232,10.5283552 L11.2904178,12.0641616 L11.2904178,8.16338742 L7.80653206,6.54512936 Z M15.9355791,6.54512936 L12.4517081,8.16338742 L12.4517081,12.0630003 L15.7555791,10.5277745 C15.867063,10.4766777 15.9355791,10.3826132 15.9355791,10.281581 L15.9355791,10.281581 L15.9355791,6.54512936 Z M11.871063,4.16216162 C11.8124178,4.16216162 11.7537726,4.17435517 11.7009339,4.19932291 L11.7009339,4.19932291 L8.60667587,5.63583904 L11.871063,7.1524842 L15.1348694,5.63583904 L12.0406113,4.19932291 C11.9877726,4.17435517 11.9291275,4.16216162 11.871063,4.16216162 Z"}})]),M._v("\n            Plugins\n          ")])],1),j("div",{staticClass:"right-menu"},[j("q-tabs",[!M.coreVersion.disableDashboardAd&&M.hasHubButtonComponent?j("div",{staticStyle:{"margin-right":"5px"}},[M.$q.dark.isActive?j("hub-button-app",{attrs:{theme:"dark"}}):M._e(),M.$q.dark.isActive?M._e():j("hub-button-app")],1):M._e(),j("q-btn",{staticClass:"btn-menu",attrs:{stretch:"",flat:"","no-caps":"",icon:"invert_colors",label:(M.$q.dark.isActive?"Light":"Dark")+" theme"},on:{click:function(t){return M.$q.dark.toggle()}}}),j("q-btn",{attrs:{stretch:"",flat:"",icon:"eva-question-mark-circle-outline"}},[j("q-menu",{attrs:{anchor:"bottom left","auto-close":""}},[j("q-item",[j("q-btn",{staticClass:"btn-submenu full-width",attrs:{type:"a",href:"https://doc.traefik.io/traefik/"+M.parsedVersion,target:"_blank",flat:"",color:"accent",align:"left",icon:"eva-book-open-outline","no-caps":"",label:"Documentation"}})],1),j("q-separator"),j("q-item",[j("q-btn",{staticClass:"btn-submenu full-width",attrs:{type:"a",href:"https://github.com/traefik/traefik/",target:"_blank",flat:"",color:"accent",align:"left",icon:"eva-github-outline","no-caps":"",label:"Github repository"}})],1)],1)],1)],1)],1)],1)],1)]),j("section",{staticClass:"app-section text-black sub-nav",class:{"bg-white":!M.$q.dark.isActive}},[j("div",{staticClass:"app-section-wrap app-boxed app-boxed-xl"},[M._t("default")],2)])])},N=[],i=(L("8e6e"),L("8a81"),L("ac6a"),L("cadf"),L("06db"),L("456d"),L("4917"),L("c47a")),a=L.n(i),n=L("9224"),r=L("2f62");function s(M,t){var L=Object.keys(M);if(Object.getOwnPropertySymbols){var j=Object.getOwnPropertySymbols(M);t&&(j=j.filter((function(t){return Object.getOwnPropertyDescriptor(M,t).enumerable}))),L.push.apply(L,j)}return L}function o(M){for(var t=1;t<arguments.length;t++){var L=null!=arguments[t]?arguments[t]:{};t%2?s(L,!0).forEach((function(t){a()(M,t,L[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(M,Object.getOwnPropertyDescriptors(L)):s(L).forEach((function(t){Object.defineProperty(M,t,Object.getOwnPropertyDescriptor(L,t))}))}return M}var c={name:"NavBar",computed:o({},Object(r["c"])("core",{coreVersion:"version"}),{version:function(){return this.coreVersion.Version?/^(v?\d+\.\d+)/.test(this.coreVersion.Version)?this.coreVersion.Version:this.coreVersion.Version.substring(0,7):null},parsedVersion:function(){if(!this.version)return"master";if("dev"===this.version)return"master";var M=this.version.match(/^(v?\d+\.\d+)/);return M?"v"+M[1]:"master"},name:function(){return n.productName},disableDashboardAd:function(){return this.coreVersion.disableDashboardAd}}),data:function(){return{hasHubButtonComponent:!1}},methods:o({},Object(r["b"])("core",{getVersion:"getVersion"})),watch:{disableDashboardAd:function(M){var t=this;if(!M&&void 0===customElements.get("hub-button-app")){var L=document.createElement("script");L.async=!0,L.onerror=function(){var M=document.createElement("script");M.async=!0,M.onload=function(){t.hasHubButtonComponent=void 0!==customElements.get("hub-button-app")},M.src="statics/traefiklabs-hub-button-app/main-v1.js",document.head.appendChild(M)},L.onload=function(){t.hasHubButtonComponent=void 0!==customElements.get("hub-button-app")},L.src="https://traefik.github.io/traefiklabs-hub-button-app/main-v1.js",document.head.appendChild(L)}}},created:function(){this.getVersion()}},y=c,S=(L("6ed0"),L("2877")),D=Object(S["a"])(y,e,N,!1,null,"3b1da406",null),g=D.exports,z={name:"Default",components:{NavBar:g},data:function(){return{}}},I=z,A=Object(S["a"])(I,j,u,!1,null,"69aed192",null);t["default"]=A.exports}}]);