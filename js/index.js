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
logo.setAttribute('src', siteContent["nav"]["img-src"])

const navigation = document.querySelector('nav');
const links = document.querySelectorAll('a');
const ctaH1 = document.querySelector('h1');
const ctaButton = document.querySelector('button');
const ctaImg = document.querySelector('#cta-img');
const mainH4 = document.querySelectorAll('.main-content h4');
const mainP = document.querySelectorAll('.main-content p');
const midImg = document.querySelector('.middle-img');
const contactH4 = document.querySelector('.contact h4');
const contactP = document.querySelectorAll('.contact p');
const footerP = document.querySelector('footer p');
const start = document.createElement('a');
const end = document.createElement('a'); 

// adding new items to navigation 
navigation.appendChild(start);
navigation.prepend(end);

// creates new navigation array object
let navArr = Object.values(siteContent['nav']);
for(let i = 0; i < navArr.length -1; i++){
  links[i].textContent = navArr[i];
  links[i].style.color = 'green';
}

start.textContent = 'Howdy';
end.textContent = 'Telephone Heater';
start.style.color ='green';
end.style.color = 'green';

ctaH1.innerHTML = siteContent['cta']['h1'].split("").join("<br>");

ctaButton.textContent = siteContent['cta']['button'];
ctaImg.setAttribute('src', siteContent['cta']['img-src']);
mainH4[0].textContent = siteContent['main-content']['features-h4'];
mainH4[1].textContent = siteContent['main-content']['about-h4'];
mainH4[2].textContent = siteContent['main-content']['services-h4'];
mainH4[3].textContent = siteContent['main-content']['product-h4'];
mainH4[4].textContent = siteContent['main-content']['vision-h4'];
mainP[0].textContent = siteContent['main-content']['features-content'];
mainP[1].textContent = siteContent['main-content']['about-content'];
mainP[2].textContent = siteContent['main-content']['services-content'];
mainP[3].textContent = siteContent['main-content']['product-content'];
mainP[4].textContent = siteContent['main-content']['vision-content'];
midImg.setAttribute('src', siteContent['main-content']['middle-img-src']);
contactH4.textContent = siteContent['contact']['contact-h4'];
siteContent["contact"].address = "123 Way 456 Street | Somewhere, USA";
contactP[0].innerHTML = siteContent['contact']['address'].split(" | ").join("<br>");
contactP[1].textContent = siteContent['contact']['phone'];
contactP[2].textContent = siteContent['contact']['email'];
footerP.textContent = siteContent['footer']['copyright'];






// Attempt #1 before student support 

// // getting nav items assingning to navItems
// const navItems = document.querySelectorAll('nav a');
// console.log(navItems);

// // loop through the array and assign the green color 
// navItems.color = 'green';

// // Getting circular image of code snippet 
// const ctaImg = document.querySelector('#cta-img');
// ctaImg.setAttribute('src', siteContent["cta"]["img-src"])

// // setting middle banner image
// const midImg = document.querySelector('#middle-img');
// midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])



// // navItems.forEach(navItems => console.log(navItems.textContent)); - this prints each nav item's text content

// // turning navItems into an array & assigning text Content
// const navArray = Array.from(navItems);
// console.log(navArray);
// // forEach assigns each element in navArray to have green text
// navArray.forEach(array => {
//   array.style.color = 'green'
// });

// // setting nav text content
// navArray[0].textContent = siteContent['nav']['nav-item-0'];
// navArray[1].textContent = siteContent['nav']['nav-item-1'];
// navArray[2].textContent = siteContent['nav']['nav-item-2'];
// navArray[3].textContent = siteContent['nav']['nav-item-3'];
// navArray[4].textContent = siteContent['nav']['nav-item-4'];
// navArray[5].textContent = siteContent['nav']['nav-item-5'];

// // //  adding pastNav
// // const pastNav = document.createElement('nav');
// // pastNav.textContent = 'Past';
// // pastNav.href = '#';
// // document.querySelector('nav').appenedChild(pastNav);

// // const futureNav = document.createElement('nav');
// // futureNav.textContent = 'Past';
// // futureNav.href = '#';
// // document.querySelector('nav').appenedChild(futureNav);

// // CTA content
// const ctaContent = document.querySelector('.cta h1');
// ctaContent.innerHTML = 'DOM<br> Is<br> Awesome';
// document.querySelector('button').textContent ='Get Started';
// console.log(ctaContent);



