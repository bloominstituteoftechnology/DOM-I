const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

//accepts an array of elements and iterates through arr and object, setting obj text content and appending t oparent
function updateElementsTextContent(arr, obj) {
  let keyArr = Object.keys(obj);
  for (let i in arr) {
    arr[i].textContent = obj[keyArr[i]];
  }
}

//Populate nav;
const navAnchorNodeList = document.querySelectorAll('nav a');
const navAnchorArr = Array.from(navAnchorNodeList);
navAnchorArr.splice(navAnchorArr.length - 1, 1); //remove img from array
updateElementsTextContent(navAnchorArr, siteContent.nav);

const ctaTextNodeList = document.querySelectorAll('.cta-text *')
const ctaTextArr = Array.from(ctaTextNodeList);
updateElementsTextContent(ctaTextArr, siteContent.cta);

const ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent.cta["img-src"]);

const topContentTextNodeList = document.querySelectorAll('.top-content div *');
const topContentTextArr = Array.from(topContentTextNodeList);
const bottomContentTextNodeList = document.querySelectorAll('.bottom-content div *');
const bottomContentTextArr = Array.from(bottomContentTextNodeList);
const middleContentTextArr = topContentTextArr.concat(bottomContentTextArr);

const mainContentObjCopy = Object.assign({}, siteContent["main-content"]);
delete mainContentObjCopy["middle-img-src"];

updateElementsTextContent(middleContentTextArr, mainContentObjCopy);

const middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

const contactTextNodeList = document.querySelectorAll(".contact *");
const contactTextArray = Array.from(contactTextNodeList);
updateElementsTextContent(contactTextArray, siteContent.contact);

const footerTextNodeList = document.querySelectorAll("footer *");
const footerTextArray = Array.from(footerTextNodeList);
updateElementsTextContent(footerTextArray, siteContent.footer);


//Add Event Listeners

//1. Animate CTA Image
ctaImg.addEventListener("load", function startAnimationCTA(event) {
  let img = event.target;
  let angle = 0;
  let lastTime = null;
  let spinRadius = 40;

  function spin(time) {
    img.style.position = "relative";
    if (lastTime != null) {
      angle += (time - lastTime) * .005;
    }
    if (spinRadius > 0) {
      img.style.top = (Math.sin(angle) * spinRadius) + 'px';
      img.style.left = (Math.cos(angle) * spinRadius) + 'px'
      lastTime = time;
      spinRadius -= .25
      requestAnimationFrame(spin);
    }
  }
  requestAnimationFrame(spin);
});

window.addEventListener("cached", function cacheAlert() {
  alert('caching is active on this page');
});


//2. Add t-rex functionality to Get Started Button
let getStartedButton = document.querySelector('.cta-text button');
let ctaDiv = document.querySelector('.cta-text');
let tRexImgURL = '../img/trex.jpg';
getStartedButton.addEventListener("click", function trexReplace(event) {
  let tRexElem = document.createElement('img');
  tRexElem.setAttribute('src', tRexImgURL);
  tRexElem.setAttribute('alt', 'T-rex Skeleton');
  tRexElem.style.maxWidth, tRexElem.style.maxHeight = '100%';
  ctaDiv.innerHTML = '';
  ctaDiv.appendChild(tRexElem);
  ctaDiv.style.backgroundColor = 'black';
});

//3. Add Hovering Insanity Blackness
let hoverElems = document.querySelectorAll('header *, footer, .container section *');
let hoverElemsArr = Array.from(hoverElems);

function onHoverBgChange(event, bg) {
  let target = event.target;
  let oldBg = "black";
  if (bg === "black") {
    oldBg = target.style.backgroundColor;
  }

  target.style.backgroundColor = bg;
  event.stopPropogation;

  let newTrigger = 'pointerleave';
  if (target.type === 'pointerleave') {
    newTrigger = 'pointerenter';
  }

  target.addEventListener(newTrigger, function (event) {
    onHoverBgChange(event, oldBg);
  });
}

for (let i in hoverElemsArr) {
  let elem = hoverElemsArr[i];
  elem.addEventListener('pointerenter', function (event) {
    onHoverBgChange(event, "black");
  });
}


//4. turns screen green on resize
let body = document.querySelector('body');

window.addEventListener('resize', function () {
  body.style.backgroundColor = 'green';

});

//5. turns screen white on scroll
window.addEventListener('scroll', function () {
  body.style.backgroundColor = 'white';
});


//6. adds trailing dots behind mouse

let points = [];
window.addEventListener('mousemove', function mousetrail(event) {
  let point = document.createElement('div');
  point.setAttribute('class', 'drawingPoint')
  point.style.position = 'absolute';
  point.style.display = 'inline-block';
  point.style.width = '2px'
  point.style.height = '2px'
  point.style.backgroundColor = 'red';
  body.appendChild(point);
  point.style.top = event.clientY + 'px';
  point.style.left = event.clientX + 'px';
  points.push(point);
  if (points.length > 125) {
    console.log('shiftedpoint');
    points[0].parentNode.removeChild(points[0]);
    points.shift();
  }
});

let containerElem = document.querySelector('.container');
//7. removes trailing dot if mouse goes off screen
containerElem.addEventListener('mouseout', function deletemousetrail(event) {
  console.log(points[0].parentNode);
  for (let i = 0; i < points.length; i++) {

    points[i].parentNode.removeChild(points[i]);
  }
  points = [];
});