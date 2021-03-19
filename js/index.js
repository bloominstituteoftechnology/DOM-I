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


//NAV Tect Content & IMG SRC
const navText = document.querySelectorAll('.nav')
document.body.children[0].children[0].children[0].children[0].textContent = 'Services';
document.body.children[0].children[0].children[0].children[1].textContent = 'Product';
document.body.children[0].children[0].children[0].children[2].textContent = 'Vision';
document.body.children[0].children[0].children[0].children[3].textContent = 'Features';
document.body.children[0].children[0].children[0].children[4].textContent = 'About';
document.body.children[0].children[0].children[0].children[5].textContent = 'Contact';

document.querySelector('#logo-img').src = 'img/logo.png';
      //Looking back, could've used querySelectorAll('.nav') and then grabbed with ' const firstNav = nav[,,,,] '
      //OR ...'  querySelector('a:nth-of-type(1)')  '

//CTA Section
const str1 = 'DOM ';
const str2 = 'Is ';
const str3 = 'Awesome';
document.querySelector('h1').innerHTML = str1 + '<br>' + str2 + '</br>' + str3;

document.querySelectorAll('.cta-text');
document.querySelector('button').textContent = 'Get Started';

document.querySelector('#cta-img').src = 'img/header-img.png';

//Main Content --> MANUAL LONG-HAND:
    //Top
document.body.children[0].children[2].children[0].children[0].children[0].textContent = 'Features'
document.body.children[0].children[2].children[0].children[0].children[1].textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
document.body.children[0].children[2].children[0].children[1].children[0].textContent = 'About'
document.body.children[0].children[2].children[0].children[1].children[1].textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

    //IMG
document.querySelector('#middle-img').src = 'img/mid-page-accent.jpg';


    //Bottom
document.body.children[0].children[2].children[2].children[0].children[0].textContent = 'Services'
document.body.children[0].children[2].children[2].children[0].children[1].textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
document.body.children[0].children[2].children[2].children[1].children[0].textContent = 'Product'
document.body.children[0].children[2].children[2].children[1].children[1].textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
document.body.children[0].children[2].children[2].children[2].children[0].textContent = 'Vision'
document.body.children[0].children[2].children[2].children[2].children[1].textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

//TRIAL AND ERROR (VARIOUS CODE):
//EXAMPLE 1 Trial
// const firstSub = document.querySelectorAll('.top-content');
// const arrayOfTop = Array.from('.top-content')
// const arrayOfTopTC1 = Array.from(arrayOfTop[0])
// arrayOfTopTC1[0].textContent = 'Features'
//EXAMPLE 2 Trial
//const firstTextTC = document.querySelector()
//const secondSub = document.querySelector('.bottom-content');

// const listSubs = document.querySelectorAll('.media-content');
// listSubs.forEach('.media-content' => {
//   const subs = '.media-content'.querySelector
// })
// const h4 = 'text-content'.querySelector('h4')
// h4.textContent = ''

//EXAMPLE 3 Trial         -->         Trying to Iterate Through Above Values....:
// const mainElements = document.querySelectorAll('main-content');
// mainElements.forEach((mainElements, idx) => {
//   const subTitles = mainElements.querySelector('h4');
// })



//CONTACT
document.body.children[0].children[3].children[0].textContent = 'Contact'
const string1 = '123 Way 456 Street'
const string2 = 'Somewhere, USA'
document.body.children[0].children[3].children[1].innerHTML = string1 + '<br>' + string2
document.body.children[0].children[3].children[2].textContent = '1 (888) 888-8888'
document.body.children[0].children[3].children[3].textContent = 'sales@greatidea.io'


//FOOTER
document.body.children[0].children[4].children[0].textContent = 'Copyright Great Idea! 2018'


//NAV TEXT GREEN:
document.body.children[0].children[0].children[0].children[0].style.color = 'green';
document.body.children[0].children[0].children[0].children[1].style.color = 'green';
document.body.children[0].children[0].children[0].children[2].style.color = 'green';
document.body.children[0].children[0].children[0].children[3].style.color = 'green';
document.body.children[0].children[0].children[0].children[4].style.color = 'green';
document.body.children[0].children[0].children[0].children[5].style.color = 'green';

//NAV TWO NEW ITEMS:
const newParagraph1 = document.createElement('p');
newParagraph1.textContent = 'Goodbye';
document.querySelector('nav').appendChild(newParagraph1);

const newParagraph2 = document.createElement('p');
newParagraph2.textContent = 'Hello';
document.querySelector('nav').prepend(newParagraph2);



// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
