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
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);
let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);
let midImg = document.querySelector(".middle-img");
midImg.src =  siteContent["main-content"]["middle-img-src"];



// let navI = document.getElementById("nav-item-1");
// navI.textContent = siteContent["nav"]["nav-item-1"];
// let x = document.getElementsByTagName("nav");
let x = document.querySelectorAll("nav > a");
/// /Almost professinoal way of it
// let i ;
// for (i = 0; i < x.length; i++) {
//   let g = i+1;
//   x[i].textContent = siteContent["nav"]["nav-item-"+g];
// } 
// The interview question answer for applying a json object to a nav link
x.forEach(function(e,y){
  y = y+ 1;
   e.textContent = siteContent["nav"]["nav-item-"+y];
   e.style.color = "green";
});

// Now add the two new items to the nav ssystem

const parent = document.querySelector("nav");
const child = document.querySelector("nav");
const newContent  = document.createElement("a");
newContent.textContent = "New Stuff";
newContent.style.color = "green";
newContent.href = "#";
const newContentChild  = document.createElement("a");
newContentChild.textContent = "Old Stuff";
newContentChild.style.color = "green";
newContentChild.href = "#";
// Places at the begginning
parent.prepend(newContent);
// Places at the end
child.appendChild(newContentChild);



// // Stretch

let obj = {"button":"", "h1":"",
    "h4s":{
      "h4-1":"",
      "h4-2":""
    }
     };
obj["h1"] = document.querySelector("h1");
obj["h1"].textContent = siteContent['cta']['h1'];

obj["button"] = document.querySelector("button");
obj["button"].textContent = siteContent['cta']['button'];

obj["h4s"] = document.querySelectorAll(".top-content > .text-content");
// obj["h4s"]["h4-1"] = document.querySelector("h4");
// obj["h4s"]["h4-1"].textContent = "FEATURES";
// obj["h4s"][1] = document.querySelector("h4");
// obj["h4s"]["h4-1"].appendChild("h4");
// obj["h4s"]["h4-1"].textContent = "About"
// obj["h4s"]["h4-1"].appendChild(obj["h4s"]["h4-2"]);

console.log(obj);

// Manipulate the dom without building a object
//Update  Main Content
let h4s = document.querySelectorAll('.text-content h4');
h4s[0].textContent = siteContent['main-content']['features-h4']
h4s[1].innerHTML = siteContent['main-content']['about-h4']
h4s[2].innerHTML = siteContent['main-content']['services-h4']
h4s[3].innerHTML = siteContent['main-content']['product-h4']
h4s[4].innerHTML = siteContent['main-content']['vision-h4']


//Update the ptags for each h4
let h4p = document.querySelectorAll('.text-content p');
h4p[0].innerHTML = siteContent['main-content']['features-content']
h4p[1].innerHTML = siteContent['main-content']['about-content']
h4p[2].innerHTML = siteContent['main-content']['services-content']
h4p[3].innerHTML = siteContent['main-content']['product-content']
h4p[4].innerHTML = siteContent['main-content']['vision-content']

//Contact list
let contactMeNode = document.querySelectorAll('.contact');
contactMeNode[0].children[0].innerHTML = siteContent['contact']['contact-h4']
contactMeNode[0].children[1].innerHTML = siteContent['contact']['address']
contactMeNode[0].children[2].innerHTML = siteContent['contact']['phone']
contactMeNode[0].children[3].textContent = siteContent['contact']['email']

//The footer updated
document.querySelector('footer p').innerHTML = siteContent['footer']['copyright']

// What's the difference between innerHTML and textContent for text?


//. click the images to move them
ctaImg.addEventListener('dblclick', e =>{
  let style = e.target.getAttribute('style');
  if (!style) e.target.setAttribute('style','transform: rotate(270deg)')
  else {
    e.target.setAttribute('style','transform: rotate(0deg)')
    e.target.removeAttribute('style')
  }
})


midImg.addEventListener('click', (e) => {
  let style = midImg.getAttribute('style');
  if (!style) midImg.setAttribute('style','transform: rotate(180deg)')
  else {
    midImg.setAttribute('style','transform: rotate(0deg)')
    midImg.removeAttribute('style')
  }
},false
);


logo.addEventListener('mouseover', (e) => {
  
    logo.style.transform = 'rotate(130deg)';
  
});

logo.addEventListener('mouseleave', (e) => {
  logo.style.transform = 'rotate(0deg)';
});

let degs = 10;
logo.addEventListener('mousemove', e => {
  logo.style.transform = 'rotate('+degs+'deg)';
  if(degs <= 360){
    degs = degs + 10;
  }else{
    degs = 10;
  }
});
