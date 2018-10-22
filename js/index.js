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

const codeSnip = document.querySelector('#cta-img');
codeSnip.src = 'img/header-img.png';

const middleImg = document.querySelector('#middle-img');
middleImg.src = 'img/mid-page-accent.jpg';

// Update header section 

const title = document.querySelector('.cta .cta-text h1').innerText = 'DOM \n is \n Awesome';

const button = document.querySelector('.cta .cta-text button').innerText = 'Get Started';

const navTags = document.querySelectorAll('a');
navTags[0].innerText = "Home";
navTags[1].innerText = "Product";
navTags[2].innerText = "Vision";
navTags[3].innerText = "Features";
navTags[4].innerText = "About";
navTags[5].innerText = "Contact";

// Top content section

const topContentTitle = document.querySelectorAll('.main-content .top-content .text-content h4');
topContentTitle[0].innerText = "Features";
topContentTitle[1].innerText = "About";

const topContentP = document.querySelectorAll('.main-content .top-content .text-content p');
topContentP[0].innerText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?";
topContentP[1].innerText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?";

// Bottom content section

const bottomContentTitle = document.querySelectorAll('.main-content .bottom-content .text-content h4');
bottomContentTitle[0].innerText = "Services";
bottomContentTitle[1].innerText = "Product";
bottomContentTitle[2].innerText = "Vision";

const bottomContentP = document.querySelectorAll('.main-content .bottom-content .text-content p');
bottomContentP[0].innerText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?";
bottomContentP[1].innerText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?";
bottomContentP[2].innerText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?";

// Contact Section

const contactTitle = document.querySelector('.contact h4').innerText = "Contact";
const contactSection = document.querySelectorAll('.contact p');
contactSection[0].innerText = "123 Way 456 Street \n Somewhere, USA";
contactSection[1].innerText = "1 (888) 888-8888";
contactSection[2].innerText = "sales@greatidea.io";

// Footer

const myFooter = document.querySelector('footer p').innerText = "Copyright Great Idea! 2018";

// Add new elements

const newElement = document.createElement('a');
const mainNav = document.querySelector('header nav');
newElement.innerText = "Welcome";
mainNav.prepend(newElement);

const secondElement = document.createElement('a');
secondElement.innerText = "Magic";
mainNav.appendChild(secondElement);

// Add new content

const myNav = document.querySelectorAll('header nav a');
for (let i = 0; i < myNav.length; i++) {
  myNav[i].style.color = "green";
}

// Update styles

secondElement.addEventListener("mouseover", function(){ 
  const curColour = document.body.style.backgroundColor;

  if (curColour != 'red') {
    document.body.style.backgroundColor = "red";
  }
  else {
    document.body.style.backgroundColor = "blue";
  }
});


