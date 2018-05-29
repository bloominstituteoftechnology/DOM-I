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
const array = document.querySelectorAll('nav a');

let navItemOne = array[0];

navItemOne.innerHTML = siteContent["nav"]["nav-item-1"];

let navItemTwo = array[1];

navItemTwo.innerHTML = siteContent["nav"]["nav-item-2"];

let navItemThree = array[2];

navItemThree.innerHTML = siteContent["nav"]["nav-item-3"];

let navItemFour = array[3];

navItemFour.innerHTML = siteContent["nav"]["nav-item-4"];

let navItemFive = array[4];

navItemFive.innerHTML = siteContent["nav"]["nav-item-5"];

let navItemSix = document.querySelectorAll('nav a')['5'];

navItemSix.innerHTML = siteContent["nav"]["nav-item-6"];

let logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent['nav']['img-src']);
let ctaImage = document.getElementById('cta-img');
ctaImage.setAttribute('src', siteContent['cta']['img-src']);

document.querySelector('.cta-text h1').innerHTML = siteContent["cta"]["h1"];
document.querySelector('.cta-text button').innerHTML = siteContent["cta"]["button"];

document.querySelectorAll('.main-content .top-content .text-content h4')[0].innerHTML = siteContent["main-content"]["features-h4"];
document.querySelectorAll('.main-content .top-content .text-content p')[0].innerHTML = siteContent["main-content"]["features-content"];
document.querySelectorAll('.main-content .top-content .text-content h4')[1].innerHTML = siteContent["main-content"]["about-h4"];
document.querySelectorAll('.main-content .top-content .text-content p')[1].innerHTML = siteContent["main-content"]["about-content"];
document.getElementById('middle-img').setAttribute('src', siteContent['main-content']['middle-img-src']);
document.querySelectorAll('.main-content .bottom-content .text-content h4')[0].innerHTML = siteContent["main-content"]["services-h4"];
document.querySelectorAll('.main-content .bottom-content .text-content p')[0].innerHTML = siteContent["main-content"]["services-content"];
document.querySelectorAll('.main-content .bottom-content .text-content h4')[1].innerHTML = siteContent["main-content"]["product-h4"];
document.querySelectorAll('.main-content .bottom-content .text-content p')[1].innerHTML = siteContent["main-content"]["product-content"];
document.querySelectorAll('.main-content .bottom-content .text-content h4')[2].innerHTML = siteContent["main-content"]["vision-h4"];
document.querySelectorAll('.main-content .bottom-content .text-content p')[2].innerHTML = siteContent["main-content"]["vision-content"];

document.querySelector('.contact h4').innerHTML = siteContent['contact']['contact-h4'];
document.querySelectorAll('.contact p')[0].innerHTML = siteContent['contact']['address'];
document.querySelectorAll('.contact p')[1].innerHTML = siteContent['contact']['phone'];
document.querySelectorAll('.contact p')[2].innerHTML = siteContent['contact']['email'];

document.querySelector('footer p').innerHTML = siteContent['footer']['copyright'];

array.forEach(element => element.style.color = 'green');

document.querySelector('nav').appendChild(document.createElement('a')).innerHTML = "Blog";
document.querySelector('nav').prepend(document.createElement('a'));
document.querySelector('nav a').innerHTML = "Home";

document.querySelector('nav').firstElementChild.style.color = 'green';
document.querySelector('nav').lastElementChild.style.color = 'green';
document.querySelector('.container').style.backgroundColor = "white";


//CODE FOR EVENT LISTENERS
document.querySelector('.cta-text button').addEventListener("click", (e) => {
  e.target.style.backgroundColor = 'yellow';
})

// document.querySelector('#cta-img').addEventListener("mouseenter", () => {
//   alert('You hovered over the CTA Image!')
// })



document.body.addEventListener("keypress",  (e) => {
  if (e.key == 'r' && document.querySelector('.container').style.backgroundColor != 'red') {
    document.querySelector('.container').style.backgroundColor = 'red';
  } else if (e.key == 'r' && document.querySelector('.container').style.backgroundColor == 'red') {
      document.querySelector('.container').style.backgroundColor = 'white';
    } else {
      return alert('Something strange afoot');
    }
  });

document.querySelector('.main-content .top-content .text-content p').addEventListener("select", (e) => {
  e.target.style.color = "purple";
});

document.querySelector('.middle-img').style.visibility = "visible";

document.querySelector('.middle-img').addEventListener("dblclick", (e) => {
  if(e.target.style.visibility == "visible") {
    e.target.style.visibility = "invisible";
  } else {
    e.target.style.visibility = "visible";
  }
});

document.getElementById('logo-img').addEventListener("click", (e) => {
  e.target.style.display = "hidden";
});

document.querySelectorAll('.main-content .top-content .text-content p')[1].addEventListener("mouseenter", (e) => {
  e.target.style.backgroundColor = "orange";
});

document.querySelectorAll('.main-content .top-content .text-content p')[1].addEventListener("mouseleave", (e) => {
  e.target.style.backgroundColor = "cyan";
});

document.body.addEventListener("copy", () => {
  alert("You copied something!")
})
