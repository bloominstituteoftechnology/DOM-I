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
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg"
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

// ===== STRETCH GOAL STYLES ======= 

let body = document.querySelector('body');
body.style.backgroundColor = "lightgrey";
body.style.fontSize = "1.2rem"
body.style.fontWeight = "bold"


//onload event handler 
window.addEventListener('load', function(event){
 alert("The page has loaded! Ready to go!")
})


// appendChild method 
let nav = document.querySelector('nav')
let navItems = Object.values(siteContent.nav);
navItems.pop(); 


let navSection1 = document.createElement("a")
navSection1.innerHTML = "Random"
nav.appendChild(navSection1); 
navItems.push(navSection1.innerHTML)

//prependChild method 
let navSection2 = document.createElement("a"); 
navSection2.innerHTML = "Random2"
nav.prepend(navSection2);
navItems.unshift(navSection2.innerHTML)

let navBar = document.querySelectorAll('nav a');


//looping through each nav item and pulling each array item from navItems array which was created from siteContent obj
navBar.forEach((link, index) => {
  link.innerHTML = navItems[index];
  link.style = "color:green"
  link.addEventListener('mouseenter', function(event){
    TweenMax.to(event.target, 1, {y:-30})
  })
  link.addEventListener('mouseleave', function(event){
    TweenMax.to(event.target, 1, {y:0})
  })
});

const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent['nav']['img-src'])

// ========== CTA ========== 

const ctaHeading = document.querySelector('.cta h1');
ctaHeading.innerHTML = siteContent['cta']['h1']

//Heading Mouseenter Event Handler
ctaHeading.addEventListener('mouseenter', function(event){
  event.target.style.color = "green";
  TweenMax.to(event.target, 1, {scale: 1.2})
})

//Heading Mouseleave Event Handler
ctaHeading.addEventListener('mouseleave', function(event){
  event.target.style.color = "black";
  TweenMax.to(event.target, 1, {scale: 1.0})  
})


const ctaButton = document.querySelector('.cta button');
ctaButton.innerHTML = siteContent['cta']['button']

//Button Click Event Handler
ctaButton.addEventListener('click', function(){
  if (ctaButton.innerHTML != "What Happened??"){
    ctaButton.innerHTML = "What Happened??"
  }else {
    ctaButton.innerHTML = siteContent['cta']['button']
  }
})

// Change Event Handler, changes CTA heading to match input
const input = document.querySelector('input');
input.addEventListener('change', function(event){
 ctaHeading.innerHTML = event.target.value;
})
const ctaImage = document.querySelector('#cta-img');
ctaImage.setAttribute('src', siteContent['cta']['img-src'])

//Double Click Event
ctaImage.addEventListener('dblclick',function(){
    TweenMax.to('#cta-img', 1, {x:-100})
})

// ============ Main Content ============= 

const mainHeadings = document.querySelectorAll('.text-content h4');
const mainContentArray = Object.values(siteContent['main-content']);
const mainHeadingsArray = [];
for(let x = 0; x < mainContentArray.length; x = x + 2){
  mainHeadingsArray.push(mainContentArray[x])
}
mainHeadingsArray.pop();
mainHeadings.forEach((item, index)=> {
  item.innerHTML = mainHeadingsArray[index];
})


const mainImg = document.querySelector('#middle-img');
mainImg.setAttribute('src', siteContent['main-content']['middle-img-src'])


const mainParagraphs = document.querySelectorAll('.text-content p')
const mainParagraphsArray = [];
for(let x = 1; x < mainContentArray.length; x = x + 2){
  mainParagraphsArray.push(mainContentArray[x]);
}
mainParagraphs.forEach((item, index) => {
  item.innerHTML = mainParagraphsArray[index];
})


// ===== Contact ===== 

const contactHeading = document.querySelector('.contact h4');
contactHeading.innerHTML = siteContent['contact']['contact-h4']

const contactArray = Object.values(siteContent.contact)
console.log(contactArray)
const contactInfo = document.querySelectorAll('.contact p')
contactInfo.forEach((item, i) => {
    if (i === 0){
      return undefined;
    }else {
      item.innerHTML = contactArray[i];
    }
})


// ======== footer ========

const footer = document.querySelector('footer p')
footer.innerHTML = siteContent['footer']['copyright']
