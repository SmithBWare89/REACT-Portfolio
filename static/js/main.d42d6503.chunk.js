(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{116:function(e,t,a){},125:function(e,t,a){"use strict";a.r(t);var o=a(0),s=a.n(o),r=a(18),n=a.n(r),i=(a(116),a(21)),c=(a(117),a(145)),l=a(138),d=a(140),m=a(1);function h(e){var t=e.navLinks,a=e.setCurrentLink,s=e.currentLink,r=["jiggle","flash","shake","pulse","tada","bounce"],n=Object(o.useState)("About Me"),h=Object(i.a)(n,2),p=h[0],j=h[1];function u(e,t){var a=t.name;j(a)}var b=Object(o.useState)({animation:r[0],duration:700}),q=Object(i.a)(b,2),g=q[0],f=q[1];return Object(o.useEffect)((function(){var e=Math.floor(7*Math.random());f({animation:r[e],duration:700,visible:!0})}),[g.visible]),Object(o.useEffect)((function(){document.title="".concat(s)}),[s]),Object(m.jsx)(c.a,{inverted:!0,className:"segment-style-options",children:Object(m.jsxs)(l.a,{inverted:!0,pointing:!0,secondary:!0,className:"segment-menu-style",children:[Object(m.jsx)(l.a.Item,{name:"myName",className:"segment-menu-style",children:Object(m.jsx)(d.a,{animation:g.animation,duration:g.duration,visible:g.visible,children:Object(m.jsx)("span",{onClick:function(){f({visible:!1})},children:"Stephon Smith"})})}),t.map((function(e){return Object(m.jsx)(l.a.Item,{name:e,active:p===e,onClick:u,className:"".concat(s===e&&"navActive"),children:Object(m.jsx)("span",{onClick:function(){a(e)},children:e})},e)}))]})})}a(95);var p=a(136),j=a(146),u=a(61);function b(){return Object(m.jsxs)(p.a,{children:[Object(m.jsx)(j.a,{className:"contact-header",children:"Contact Me"}),Object(m.jsx)(j.a,{as:"h2",className:"contact-email",color:"white",children:Object(m.jsxs)("span",{children:[Object(m.jsx)(u.a,{"aria-hidden":"false",name:"mail",size:"large",className:"contact-icon"}),": ",Object(m.jsx)("a",{href:"mailto:SmithWrestling89@gmail.com?subject=Job Inquiry&body=Message",children:"SmithWrestling89@gmail.com"})]})}),Object(m.jsx)("br",{})]})}var q=a(144),g=a(137),f=a(147),A=a(142),O=a(139),y=a(141),x=a(40),w=a.p+"static/media/drinkology.0dddff9f.png",C=a.p+"static/media/pwaBudget.32652f16.png",k=a.p+"static/media/ollieWilliams.4953a50c.png",v=a.p+"static/media/eCommerceRefactor.388b13eb.png",N=a.p+"static/media/reactPortfolio.538bb9b4.JPG",S=a.p+"static/media/chatroomapp.e4189004.png";function M(){var e=x.reactPortfolio,t=x.drinkology,a=x.pwaBudget,s=x.soShul,r=x.ollieWilliamsWeather,n=x.reduxECommerceStore,c=x.chatroomapp,l=Object(o.useState)(!1),d=Object(i.a)(l,2),h=d[0],j=d[1],u=Object(o.useState)(""),b=Object(i.a)(u,2),M=b[0],z=b[1],E=function(){return j(!1)},I=function(o){switch(["drinkology","pwaBudget","soShul","ollieWilliamsWeather","reduxECommerceStore","reactPortfolio","chatroomapp"].find((function(e){return e===o.target.name}))){case"drinkology":z(t),j(!0);break;case"pwaBudget":z(a),j(!0);break;case"soShul":z(s),j(!0);break;case"ollieWilliamsWeather":z(r),j(!0);break;case"reduxECommerceStore":z(n),j(!0);break;case"reactPortfolio":z(e),j(!0);break;case"chatroomapp":z(c),j(!0);break;default:console.log("Cannot find project!")}},P=function(e){return e.toString().replaceAll(",",", ")};return Object(m.jsxs)(p.a,{style:{marginBottom:"100px !important"},children:[Object(m.jsxs)(f.a,{columns:"two",divided:!0,doubling:!0,style:{marginBottom:"100px !important"},children:[Object(m.jsxs)(f.a.Row,{children:[Object(m.jsx)(f.a.Column,{children:Object(m.jsxs)(A.a,{fluid:!0,onClick:I,className:"project-card",children:[Object(m.jsx)(O.a,{src:w,className:"project-card-image",alt:"A snapshot of my project that searches for cocktail recipes."}),Object(m.jsxs)(A.a.Content,{className:"project-card-content",children:[Object(m.jsx)(A.a.Header,{as:"h1",className:"project-card-header card-adjustment-header",children:t.header}),Object(m.jsx)(A.a.Meta,{className:"project-card-meta card-adjustment-meta",content:P(t.languages)})]}),Object(m.jsx)(q.a,{className:"project-button-style",variant:"primary",onClick:I,name:"drinkology",children:"Show More Info"})]})}),Object(m.jsx)(f.a.Column,{children:Object(m.jsxs)(A.a,{fluid:!0,onClick:I,className:"project-card",children:[Object(m.jsx)(O.a,{src:S,className:"project-card-image",alt:"A snapshot of my project that allows you to chat with friends in real time."}),Object(m.jsxs)(A.a.Content,{className:"project-card-content",children:[Object(m.jsx)(A.a.Header,{as:"h1",className:"project-card-header card-adjustment-header",children:c.header}),Object(m.jsx)(A.a.Meta,{className:"project-card-meta card-adjustment-meta",content:P(c.languages)})]}),Object(m.jsx)(q.a,{className:"project-button-style",variant:"primary",onClick:I,name:"chatroomapp",children:"Show More Info"})]})})]}),Object(m.jsxs)(f.a.Row,{children:[Object(m.jsx)(f.a.Column,{children:Object(m.jsxs)(A.a,{fluid:!0,onClick:I,className:"project-card",children:[Object(m.jsx)(O.a,{src:N,className:"project-card-image",alt:"A snapshot of my REACT portfolio project."}),Object(m.jsxs)(A.a.Content,{className:"project-card-content",children:[Object(m.jsx)(A.a.Header,{as:"h1",className:"project-card-header card-adjustment-header",children:e.header}),Object(m.jsx)(A.a.Meta,{className:"project-card-meta card-adjustment-meta",content:P(e.languages)})]}),Object(m.jsx)(q.a,{className:"project-button-style",variant:"primary",onClick:I,name:"reactPortfolio",children:"Show More Info"})]})}),Object(m.jsx)(f.a.Column,{children:Object(m.jsxs)(A.a,{fluid:!0,onClick:I,className:"project-card",children:[Object(m.jsx)(O.a,{src:"data:image/png;base64,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",className:"project-card-image so-shul-image",alt:"A photo of my demonstration of a REST API with a minimalist front end."}),Object(m.jsxs)(A.a.Content,{className:"project-card-content so-shul-content",children:[Object(m.jsx)(A.a.Header,{as:"h1",className:"project-card-header card-adjustment-header",children:s.header}),Object(m.jsx)(A.a.Meta,{className:"project-card-meta card-adjustment-meta",content:P(s.languages)})]}),Object(m.jsx)(q.a,{className:"project-button-style",variant:"primary",onClick:I,name:"soShul",children:"Show More Info"})]})})]}),Object(m.jsxs)(f.a.Row,{children:[Object(m.jsx)(f.a.Column,{children:Object(m.jsxs)(A.a,{fluid:!0,onClick:I,className:"project-card",children:[Object(m.jsx)(O.a,{src:C,className:"project-card-image",alt:"A photo of my progressive web application budget tracker project."}),Object(m.jsxs)(A.a.Content,{className:"project-card-content",children:[Object(m.jsx)(A.a.Header,{as:"h1",className:"project-card-header",children:a.header}),Object(m.jsx)(A.a.Meta,{className:"project-card-meta",content:P(a.languages)})]}),Object(m.jsx)(q.a,{className:"project-button-style",variant:"primary",onClick:I,name:"pwaBudget",children:"Show More Info"})]})}),Object(m.jsx)(f.a.Column,{children:Object(m.jsxs)(A.a,{fluid:!0,onClick:I,className:"project-card",children:[Object(m.jsx)(O.a,{src:v,className:"project-card-image",alt:"A photo of my shopping website that I refactored."}),Object(m.jsxs)(A.a.Content,{className:"project-card-content",children:[Object(m.jsx)(A.a.Header,{as:"h1",className:"project-card-header",children:n.header}),Object(m.jsx)(A.a.Meta,{className:"project-card-meta",content:P(n.languages)})]}),Object(m.jsx)(q.a,{className:"project-button-style",variant:"primary",onClick:I,name:"reduxECommerceStore",children:"Show More Info"})]})})]}),Object(m.jsx)(f.a.Row,{children:Object(m.jsx)(f.a.Column,{children:Object(m.jsxs)(A.a,{fluid:!0,onClick:I,className:"project-card",children:[Object(m.jsx)(O.a,{src:k,className:"project-card-image",alt:"A photo of my weather dashboard project."}),Object(m.jsxs)(A.a.Content,{className:"project-card-content",children:[Object(m.jsx)(A.a.Header,{as:"h1",className:"project-card-header",children:r.header}),Object(m.jsx)(A.a.Meta,{className:"project-card-meta",content:P(r.languages)})]}),Object(m.jsx)(q.a,{className:"project-button-style",variant:"primary",onClick:I,name:"ollieWilliamsWeather",children:"Show More Info"})]})})})]}),Object(m.jsx)(m.Fragment,{children:!!M&&Object(m.jsxs)(g.a,{show:h,onHide:E,backdrop:"static",keyboard:!1,centered:!0,className:"project-modal",children:[Object(m.jsx)(g.a.Header,{closeButton:!0,className:"project-modal-header",children:Object(m.jsx)(g.a.Title,{className:"project-modal-title",children:M.header})}),Object(m.jsxs)(g.a.Body,{className:"project-modal-body",children:[Object(m.jsx)("h3",{children:"Description"}),M.description,Object(m.jsx)("h3",{children:"Competencies"}),Object(m.jsx)(y.a,{as:"ul",children:M.languages.map((function(e){return Object(m.jsx)(y.a.Item,{as:"li",children:e})}))}),Object(m.jsx)("p",{children:Object(m.jsx)("a",{href:M.repository,name:"repository",children:"Repository"})}),Object(m.jsx)("p",{children:Object(m.jsx)("a",{href:M.deployed,name:"deployed",children:"Deployed"})})]}),Object(m.jsx)(g.a.Footer,{className:"project-modal-footer",children:Object(m.jsx)(q.a,{className:"project-modal-button",variant:"secondary",onClick:E,children:"Close"})})]})})]})}var z=a(143),E=a.p+"static/media/homepage.20ab1795.jpg",I=a.p+"static/media/profile.5f8cc9b5.jpg";function P(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(p.a,{children:Object(m.jsxs)(f.a,{children:[Object(m.jsx)(f.a.Column,{width:7,children:Object(m.jsx)(O.a,{src:I,rounded:!0,alt:"A photo of me standing on a walking bridge with the Big Four Bridge in Louisville, Kentucky behind me.",className:"about-me-image"})}),Object(m.jsx)(f.a.Column,{width:9,children:Object(m.jsxs)(z.a,{children:[Object(m.jsx)("p",{className:"about-me-message",children:"Hello!"}),Object(m.jsx)("p",{className:"about-me-message",children:"My name is Stephon Smith and I'm a student at the University of Central Florida in their Coding Bootcamp program. I can remember coding websites made out of pure HTML when I was as young as 11 years old. I was (and still am) obsessed with technology and building websites on a popular platform like Geocities was a favorite past time of mine."}),Object(m.jsxs)("p",{className:"about-me-message",children:["Like a tale as old as time; I grew older and less involved with the tech community as other life priorities and interests took their hold. Interests that took me to London, England to study abroad and learn how to properly become a professional wrestler. Don't rub your eyes or think you saw that incorrectly. I ",Object(m.jsx)("em",{children:Object(m.jsx)("span",{style:{color:"#fc5130",fontWeight:"700",fontSize:"19px"},children:"was"})})," a professional wrestler. For 10+ years I've traveled traveled the continental United States and abroad in spandex, patent leather boots, and stripes to earn the opportunity to work as a professional referee for World Wrestling Entertainment. I achieved my dream but now it's time for the start of a new chapter in my life."]}),Object(m.jsxs)("p",{className:"about-me-message",children:["How does that fit into my developer story? Preparation. My journey has prepared me by teaching me how to be flexible, have an eye for detail, and how to push myself to develop the best experience for you and the paying customer. I feel that a combination of my skills learned throughout my journey in wrestling, life, and my bootcamp will make you and me the ",Object(m.jsx)("em",{children:Object(m.jsx)("span",{style:{color:"#fc5130",fontWeight:"700",fontSize:"19px"},children:"PERFECT"})})," tag team."]}),Object(m.jsx)("p",{className:"about-me-message",children:"So what do you say partner? Tag me in?"})]})})]})}),Object(m.jsx)(p.a,{style:{marginTop:"10px"},children:Object(m.jsx)(O.a,{src:E,rounded:!0,alt:"A photo of me on pay per view refereeing a professional wrestling match.",className:"about-me-image"})})]})}var R=a(103),T=a.p+"static/media/resume.245871d1.png",W=a.p+"static/media/resume2.f06a2ffc.png";function U(){var e=Object(o.useState)(!1),t=Object(i.a)(e,2),a=t[0],s=t[1],r=Object(o.useState)(""),n=Object(i.a)(r,2),c=n[0],l=n[1],d=function(e){return"resumeImage"===e.target.name?l(T):"resumeImage2"===e.target.name&&l(W),s(!0)},h=function(){return s(!1)};return Object(m.jsxs)("section",{children:[Object(m.jsxs)(p.a,{children:[Object(m.jsx)(j.a,{className:"resume-header",children:"Click to Magnify"}),Object(m.jsxs)(f.a,{columns:2,stackable:!0,children:[Object(m.jsx)(f.a.Column,{children:Object(m.jsx)(O.a,{className:"resume-image",name:"resumeImage",src:T,onClick:d,centered:!0,alt:"A photo copy of my work resume."})}),Object(m.jsx)(f.a.Column,{children:Object(m.jsx)(O.a,{className:"resume-image",name:"resumeImage2",src:W,onClick:d,centered:!0,alt:"A photo copy of my work resume."})})]})]}),Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(g.a,{show:a,onHide:h,centered:!0,size:"small",children:[Object(m.jsx)(g.a.Header,{closeButton:!0,children:Object(m.jsx)(g.a.Title,{children:"My Resume"})}),Object(m.jsx)(g.a.Body,{children:Object(m.jsx)(R.a,{src:c,zoomFactor:.4,mgShape:"square",mgHeight:500,mgWidth:600})}),Object(m.jsxs)(g.a.Footer,{children:[Object(m.jsx)(q.a,{variant:"secondary",onClick:h,children:"Close"}),Object(m.jsx)(q.a,{variant:"primary",onClick:h,children:Object(m.jsx)("a",{href:"https://docs.google.com/document/d/11xnCZSwIFYAu_I6_SahA7TEU9pKbajqc9B34RrHgG6s/edit?usp=sharing",download:"Stephon Smith Resume",style:{color:"#f7f7ff"},name:"resume",children:"Save Resume"})})]})]})})]})}function F(){return Object(m.jsx)("footer",{id:"footer",children:Object(m.jsx)(p.a,{id:"footer-container",children:Object(m.jsxs)(f.a,{columns:3,children:[Object(m.jsx)(f.a.Column,{children:Object(m.jsx)("a",{name:"gitHubRepo",href:"https://www.github.com/SmithBWare89",children:Object(m.jsx)("i",{className:"fab fa-github fa-3x",id:"github"})})}),Object(m.jsx)(f.a.Column,{children:Object(m.jsx)("a",{name:"stackOverflow",href:"https://stackoverflow.com/users/13443220/smithbware89",children:Object(m.jsx)("i",{className:"fab fa-stack-overflow fa-3x",id:"stack-overflow"})})}),Object(m.jsx)(f.a.Column,{children:Object(m.jsx)("a",{name:"linkedIn",href:"https://www.linkedin.com/in/stephonsmith89/",children:Object(m.jsx)("i",{className:"fab fa-linkedin fa-3x",id:"linked-in"})})})]})})})}var K=function(){var e=Object(o.useState)(["About Me","Resume","Portfolio","Contact"]),t=Object(i.a)(e,1)[0],a=Object(o.useState)(t[0]),s=Object(i.a)(a,2),r=s[0],n=s[1];return Object(m.jsxs)("main",{children:[Object(m.jsx)(h,{navLinks:t,setCurrentLink:n,currentLink:r}),"About Me"===r?Object(m.jsx)(P,{}):"Resume"===r?Object(m.jsx)(U,{}):"Portfolio"===r?Object(m.jsx)(M,{}):"Contact"===r&&Object(m.jsx)(b,{}),Object(m.jsx)(F,{})]})},B=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,148)).then((function(t){var a=t.getCLS,o=t.getFID,s=t.getFCP,r=t.getLCP,n=t.getTTFB;a(e),o(e),s(e),r(e),n(e)}))},H=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function L(e,t){console.log(e),navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(K,{})}),document.getElementById("root")),B(),function(e){if("serviceWorker"in navigator){if(new URL("/REACT-Portfolio",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/REACT-Portfolio","/service-worker.js");H?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var o=a.headers.get("content-type");404===a.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):L(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):L(t,e)}))}}()},40:function(e){e.exports=JSON.parse('{"drinkology":{"id":0,"header":"Drinkology - Full Stack Project","altName":"drinkology","description":"Drinkology was created to allow end users to look up cocktail recipes, and master the art of mixology in the comfort of their own home. Members are able to sign in,save recipes to their account and leave reviews.","languages":["Node","Express","Handlebars","Bootstrap","HTML","Javascript","CSS"],"collaborators":[{"name":"Kristen Mayorga","repository":"https://github.com/Mayorgak"},{"name":"Leo Ayala","repository":"https://github.com/leo-ayala"}],"repository":"https://tinyurl.com/Drinkology","deployed":"https://tinyurl.com/DrinkologyApp"},"ollieWilliamsWeather":{"id":1,"header":"Server-Side API - Weather Dashboard (Mobile Responsive)","altName":"ollieWilliams","description":"This project was intended to utilize both web and server-side APIs to leverage data retrieval and persistence for a mobile responsive application. Information is called from the OpenWeather API using the user inputted city which then dynamically renders the current weather forecast as well as the 5-day forecast for that city. Information persists in localStorage which allows the user to quickly recall previously searched cities.","languages":["HTML","Bootstrap","Javascript","CSS"],"repository":"https://github.com/SmithBWare89/ollie-williams-weather","deployed":"https://smithbware89.github.io/ollie-williams-weather/"},"pwaBudget":{"id":2,"header":"PWA Budget Tracker","altName":"pwaBudget","description":"This project is intended to be a demonstration of a progressive web application. It utilizes a service worker to register data caches in the browser to not only store files vital to the function of this app but also a snapshot of data so the user will be able to maintain an accurate budget when they\'re in low or no signal areas. Users will be to install this application on their desktop or on their mobile device from the browser.","languages":["Node","Express","MongoDB","HTML","Javascript","CSS"],"repository":"https://github.com/SmithBWare89/progressive-app-budget-tracker#languages","deployed":"https://progressive-budget-tracker-app.herokuapp.com/"},"soShul":{"id":3,"header":"NoSQL & REST API - So-Shul Network","altName":"soShul","description":"This project is intended to be a demonstration of a RESTful API using a combination of MongoDB, Express, Mongoose, and Moment. It\'s been expanded to include a minimalist front end to allow for a web app representation of the data being created in our database. Further developments for this project would be to update the formatting of the project along with streamlining the API routes.","languages":["Node","Express","MongoDB","Mongoose","Bcrypt","HTML","Javascript","CSS","SQL","NoSQL","Handlebars"],"repository":"https://github.com/SmithBWare89/so-shul-api","deployed":"https://so-shul.herokuapp.com/"},"reduxECommerceStore":{"id":4,"header":"Redux - eCommerce Refactor","altName":"eCommerceRefactor","description":"This project is intended to be a demonstration of refactoring a Context API to one that uses a Redux store. For this project we were provided starter code of an e-commerce side that we added state management to throughout the module. As students we were challenged with reading the Redux documentation to increase our understanding of another package that performs similar functionality while also increasing our exposure to how developers will have to parse through documentation they may be unfamiliar with to resolve an issue in development. It\'s intended that when reviewing the code behind this project that you\'ll find a refactored code document that uses Redux to handle state management for the web application.","languages":["Javascript","Node","React-Redux","Redux"],"repository":"https://tinyurl.com/ReduxRepo","deployed":"https://tinyurl.com/ReduxECommerce"},"reactPortfolio":{"id":5,"header":"REACT Portfolio","altName":"reactPortfolio","description":"This project is intended to be a demonstration of my usage of REACT. I\'ve recreated my original developer portfolio and have added in a carousel that opens into a modal with additional information on each project. I\'ve also added a basic resume to the portfolio as well as links to my Github, Stack Overflow, and LinkedIn accounts.","languages":["Node","React","Semantic-UI-React","Bootstrap","HTML","Javascript","CSS"],"repository":"https://github.com/SmithBWare89/REACT-Portfolio","deployed":"https://smithbware89.github.io/REACT-Portfolio/"},"chatroomapp":{"id":6,"header":"Chatroom Application","altName":"chatroomapp","description":"Developed full stack applications via Vue, Vue-Router, and Firebase. Leveraged composition API structure to build components. Utilized FIrebase for hosting and storage of all comment data, while tracking user\'s authentication to allow application for serving data. Tested and designed API endpoints via JSON Server.","languages":["Node","Vue","Vue Router","Firebase","HTML","Javascript","CSS"],"repository":"https://tinyurl.com/chat-app-repository%20","deployed":"https://tinyurl.com/chatroom-app"},"appIcons":{"bootstrap":"../../assets/images/bootstrap.png","css3":"../../assets/images/css3.png","heroku":"../../assets/images/heroku.png","html5":"../../assets/images/html5.png","Java":"../../assets/images/Java.png","javascript":"../../assets/images/javascript.png","jquery":"../../assets/images/jquery.png","mongodb":"../../assets/images/mongodb.png","node":"../../assets/images/node.png","react":"../../assets/images/react.png","Spring":"../../assets/images/Spring.png","sql":"../../assets/images/sql.png"}}')},95:function(e,t,a){}},[[125,1,2]]]);
//# sourceMappingURL=main.d42d6503.chunk.js.map