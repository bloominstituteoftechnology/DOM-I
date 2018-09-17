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

let ctaImage = document.getElementById("cta-img");
ctaImage.setAttribute('src', siteContent["cta"]["img-src"])

let middleImage = document.getElementById("middle-img");
middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"])

let ctaButton = document.querySelector('button')
ctaButton.innerHTML = siteContent.cta.button;


let cta = document.querySelector('h1');
let onceMoreWithBreaks = siteContent.cta.h1
for (let i = 0; i < onceMoreWithBreaks.length; i++){
  onceMoreWithBreaks = onceMoreWithBreaks.replace(' ', '<br>')
}
cta.innerHTML = onceMoreWithBreaks;

let navLinks = document.querySelectorAll('nav a');
navLinks[0].innerText = siteContent['nav']['nav-item-1'];
navLinks[1].innerText = siteContent['nav']['nav-item-2'];
navLinks[2].innerText = siteContent['nav']['nav-item-3'];
navLinks[3].innerText = siteContent['nav']['nav-item-4'];
navLinks[4].innerText = siteContent['nav']['nav-item-5'];
navLinks[5].innerText = siteContent['nav']['nav-item-6'];


let topContentHeaders = document.querySelectorAll('.top-content .text-content h4');
topContentHeaders[0].innerText = siteContent["main-content"]["features-h4"];
topContentHeaders[1].innerText = siteContent["main-content"]["about-h4"];

let topContentText = document.querySelectorAll('.top-content .text-content p');
topContentText[0].innerText = siteContent["main-content"]["features-content"];
topContentText[1].innerText = siteContent["main-content"]["about-content"];

let bottomContentHeaders = document.querySelectorAll('.bottom-content .text-content h4');
bottomContentHeaders[0].innerText = siteContent["main-content"]["services-h4"];
bottomContentHeaders[1].innerText = siteContent["main-content"]["product-h4"];
bottomContentHeaders[2].innerText = siteContent["main-content"]["vision-h4"];

let bottomContentText = document.querySelectorAll('.bottom-content .text-content p');
bottomContentText[0].innerText = siteContent["main-content"]["services-content"];
bottomContentText[1].innerText = siteContent["main-content"]["product-content"];
bottomContentText[2].innerText = siteContent["main-content"]["vision-content"];

let contactHeader = document.querySelector('.contact h4');
contactHeader.innerText =
 siteContent["contact"]["contact-h4"];

 let contactInfo =
 document.querySelectorAll('.contact p');

 let contactAddress = siteContent.contact.address.replace('Street ', 'Street<br>')

 contactInfo[0].innerHTML =  contactAddress;
 contactInfo[1].innerText = siteContent.contact.phone;
 contactInfo[2].innerText = siteContent.contact.email;

 let footer = document.querySelector('footer p');
 footer.innerText = siteContent.footer.copyright;


 navLinks.forEach(item => {
   item.setAttribute('style', 'color: green');
 })

const welcome = document.createElement('a');
welcome.innerText = 'Welcome';
welcome.href='#';

const goodbye = document.createElement('a');
goodbye.innerText='Goodbye';
goodbye.href='#';
 let nav = document.querySelector('nav');
 nav.append(goodbye);
 nav.prepend(welcome);

 const newButton = document.createElement('button');
 newButton.innerText = 'Blue Text';
 newButton.setAttribute('style', 'display: block; cursor: pointer; margin: 10px')
footer.prepend(newButton);
newButton.setAttribute('id', 'blue-color-button');


document.getElementById('blue-color-button').addEventListener('click', function(){
  let allH4 = document.querySelectorAll('h4');
  let allP = document.querySelectorAll('p');
  allH4.forEach(item => {
    item.setAttribute('style', 'color: blue');
  });
  allP.forEach(item => {
    item.setAttribute('style', 'color: blue');
  });

  });

  const bacon = {
    "main-content": {
      "features-h4":"Features",
      "features-content": "Bacon ipsum dolor amet boudin cupim landjaeger, chicken corned beef shank swine beef short ribs turducken meatball t-bone shankle ham hock cow. Ground round meatloaf turkey venison drumstick t-bone shank brisket. Chuck tri-tip spare ribs swine. Salami pastrami jerky.",
      "about-h4":"About",
      "about-content": "Pastrami turducken. T-bone porchetta pork chop rump, bacon kielbasa pig ball tip shoulder sausage ham leberkas spare ribs venison burgdoggen. Biltong tongue cow ribeye, tail beef ribs short ribs. Buffalo shank tri-tip ball tip pork chop biltong. ",
      "middle-img-src": "img/mid-page-accent.jpg",
      "services-h4":"Services",
      "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
      "product-h4":"Product",
      "product-content": "Tenderloin corned beef kielbasa, beef ribs pastrami buffalo porchetta meatloaf pork chop pancetta turkey. Rump burgdoggen alcatra ham hock short loin, spare ribs ham shoulder tongue meatloaf drumstick flank biltong pork chop.  ",
      "vision-h4":"Vision",
      "vision-content": "Brisket ham hock ham, jerky bacon fatback pig leberkas kielbasa meatloaf alcatra shank tongue. Chicken tongue prosciutto turkey corned beef pork loin sirloin bacon pig drumstick.",
    },
  }

  const otherButton = document.createElement('button');
  otherButton.innerText = 'Black Text';
  otherButton.setAttribute('style', 'display: block; cursor: pointer');
  footer.prepend(otherButton);
  otherButton.setAttribute('id', 'black-color-button');

  document.getElementById('black-color-button').addEventListener('click', function(){
    let allH4 = document.querySelectorAll('h4');
    let allP = document.querySelectorAll('p');
    allH4.forEach(item => {
      item.setAttribute('style', 'color: black');
    });
    allP.forEach(item => {
      item.setAttribute('style', 'color: black');
    });

    });
const baconButton = document.createElement('button');
baconButton.innerText = 'Bacon Content';
baconButton.setAttribute('style', 'cursor: pointer');
baconButton.setAttribute('id', 'bacon-button')
let mainContent = document.querySelector('.main-content');
mainContent.prepend(baconButton);

document.getElementById('bacon-button').addEventListener('click', function(){

  topContentText[0].innerText = bacon["main-content"]["features-content"];
  topContentText[1].innerText = bacon["main-content"]["about-content"];
  bottomContentText[0].innerText = bacon["main-content"]["services-content"];
  bottomContentText[1].innerText = bacon["main-content"]["product-content"];
  bottomContentText[2].innerText = bacon["main-content"]["vision-content"];


  });
