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

// Images
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const circleImg = document.getElementById('cta-img');
circleImg.setAttribute('src', siteContent['cta']['img-src'])

const middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src'])

//nav
const navBar = document.querySelectorAll('a');
navBar[0].textContent = siteContent['nav']['nav-item-1'];
navBar[1].textContent = siteContent['nav']['nav-item-2'];
navBar[2].textContent = siteContent['nav']['nav-item-3'];
navBar[3].textContent = siteContent['nav']['nav-item-4'];
navBar[4].textContent = siteContent['nav']['nav-item-5'];
navBar[5].textContent = siteContent['nav']['nav-item-6'];

//Center Content 
const mainText = document.querySelector('h1');
mainText.textContent = siteContent['cta']['h1'];

const button = document.querySelector('button');
button.textContent =siteContent['cta']['button'];

//Bottom content Headings 
const h4 = document.querySelectorAll('.text-content > h4');
h4[0].textContent = siteContent['main-content']['features-h4'];
h4[1].textContent = siteContent['main-content']['about-h4'];
h4[2].textContent = siteContent['main-content']['services-h4'];
h4[3].textContent = siteContent['main-content']['product-h4'];
h4[4].textContent = siteContent['main-content']['vision-h4'];

//Content Paragraphs 
const p = document.querySelectorAll('.text-content > p');
p[0].textContent = siteContent['main-content']['features-content'];
p[1].textContent = siteContent['main-content']['about-content'];
p[2].textContent = siteContent['main-content']['services-content'];
p[3].textContent = siteContent['main-content']['product-content'];
p[4].textContent = siteContent['main-content']['vision-content'];

//Contact Heading
const contactH4 = document.querySelector('.contact > h4');
contactH4.textContent = siteContent['contact']['contact-h4'];

//Contact Paragraphs 
const contactP = document.querySelectorAll('.contact > p');
contactP[0].textContent = siteContent['contact']['address'];
contactP[1].textContent = siteContent['contact']['phone'];
contactP[2].textContent = siteContent['contact']['email'];

//Footer
const footer = document.querySelector('footer');
footer.textContent = siteContent['footer']['copyright'];



//New nav items
const home = document.createElement('a');
const team = document.createElement('a');

home.textContent = 'Home';
home.href = 'index.html';
team.textContent = 'Our Team';
team.href = '#';

let newNav = document.querySelector('header > nav');
newNav.prepend(home);
newNav.appendChild(team);


//Change nav text color 

const navColor = document.querySelectorAll('header > nav > a');
navColor.forEach(navBar => {
  navBar.style.color = 'green';
});


//Stretch goal

//Updated styles

const lakersNavColor = document.querySelectorAll('header > nav > a');
lakersNavColor.forEach(navBar => {
  navBar.style.color = 'purple';
});

const navBoldFont = document.querySelectorAll('header > nav');
navBoldFont.forEach(navBar => {
  navBar.style.fontWeight = 'bold';
})


const h1Color = document.querySelectorAll('.cta-text > h1');
h1Color.forEach(mainText => {
  mainText.style.color = 'gold';
});

const buttonColor = document.querySelectorAll('.cta-text > button');
buttonColor.forEach(button => {
  button.style.color = 'purple';
});

const h4Color = document.querySelectorAll('.text-content > h4');
h4Color.forEach(h4 => {
  h4.style.color = 'purple';
});

const pColor = document.querySelectorAll('.text-content > p');
pColor.forEach(p => {
  p.style.color = 'gold';
});

const contactH4Color = document.querySelectorAll('.contact > h4');
contactH4Color.forEach(contactH4 => {
  contactH4.style.color = 'purple';
});

const contactPColor = document.querySelectorAll('.contact > p');
contactPColor.forEach(contactP => {
  contactP.style.color = 'gold';
});

const footerColor = document.querySelectorAll('footer');
footerColor.forEach(footer => {
  footer.style.color = 'purple';
});


