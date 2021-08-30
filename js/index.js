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
logo.setAttribute('src', siteContent["nav"]["img-src"])
//Navigation
const nav = document.querySelectorAll('nav a');
nav.forEach((el, key) => el.textContent = Object.values(siteContent['nav'])[key]);

//add new navigations
const blog = document.createTextNode('Blog');
const home = document.createTextNode('Home');
const aBlog = document.createElement('a');
const aHome = document.createElement('a');
aBlog.appendChild(blog);
aHome.prepend(home);
aBlog.href, aHome.href = '#';
document.querySelector('header nav').appendChild(aBlog);
document.querySelector('header nav').prepend(aHome);

// change nav color to green
document.querySelectorAll('nav a').forEach(el => el.style.color = 'green');

//cta
document.querySelector('.cta-text h1').innerHTML = siteContent['cta']['h1'].replaceAll(' ', '<br> ');
document.querySelector('.cta-text button').textContent = siteContent['cta']['button'];
document.querySelector('#cta-img').src = siteContent['cta']['img-src'];

//main contents
const hTxt = Object.keys(siteContent['main-content']).filter(el => el.includes('-h4'));
document.querySelectorAll('.text-content h4').forEach((el, ndx) => el.textContent = siteContent['main-content'][hTxt[ndx]]);
document.getElementById('middle-img').src = siteContent['main-content']['middle-img-src'];
const contentTxt = Object.keys(siteContent['main-content']).filter(el => el.includes('-content'));
document.querySelectorAll('.text-content p').forEach((el, ndx) => el.textContent = siteContent['main-content'][contentTxt[ndx]]);

//contacs info
document.querySelector('.contact h4').textContent = siteContent['contact']['contact-h4'];
document.querySelectorAll('.contact p').forEach((el, ndx) => el.innerHTML = Object.values(siteContent['contact'])[ndx + 1].replace('Street', 'Street<br>'));

//footer
document.querySelector('footer p').textContent = siteContent['footer']['copyright'];

//stretch
const btn = document.querySelector('.cta-text button');
btn.style.borderRadius = '.75rem';

const footNav = document.querySelector('nav').cloneNode(true);
document.querySelector('footer').prepend(footNav);

const btnClick = document.querySelector('button');
btnClick.addEventListener('click', event => {
  alert('Awesome!');
  document.body.style.backgroundColor = 'grey';
})
