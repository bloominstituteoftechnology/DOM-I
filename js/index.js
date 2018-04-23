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

// updated to show the top right circle code snippet image
let codeImg = document.getElementById("cta-img");
codeImg.setAttribute('src', siteContent["cta"]["img-src"])

// updated to show the middle large width code snippet image
let codeMiddleImg = document.getElementById("middle-img");
codeMiddleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

// nav bar code here
let navLinkOne = document.getElementsByTagName("a");
navLinkOne[0].innerHTML = siteContent["nav"]["nav-item-1"]
navLinkOne[1].innerHTML = siteContent["nav"]["nav-item-2"]
navLinkOne[2].innerHTML = siteContent["nav"]["nav-item-3"]
navLinkOne[3].innerHTML = siteContent["nav"]["nav-item-4"]
navLinkOne[4].innerHTML = siteContent["nav"]["nav-item-5"]
navLinkOne[5].innerHTML = siteContent["nav"]["nav-item-6"]
// navLinkOne.forEach(element => {console.log(element)});

//Adding new navbar links
let navigation = document.querySelector('nav');
let aTagOne = document.createElement('a');
aTagOne.setAttribute('href', '#');
aTagOne.innerHTML = 'Home';
navigation.prepend(aTagOne);

let aTagTwo = document.createElement('a');
aTagTwo.setAttribute('href', '#');
aTagTwo.innerHTML = 'End';
navigation.append(aTagTwo);

//CTA Text and Button
let ctaText = document.getElementsByTagName('h1');
let ctaButton = document.getElementsByTagName('button');
ctaText[0].innerHTML = siteContent['cta']['h1']
ctaButton[0].innerHTML = siteContent['cta']['button']

//Main Content Paragraphs and Header
let mainHeader = document.getElementsByTagName('h4');
let mainText = document.getElementsByTagName('p');

//Main Content Headers Only
mainHeader[0].innerHTML = siteContent['main-content']['features-h4']
mainHeader[1].innerHTML = siteContent['main-content']['about-h4']
mainHeader[2].innerHTML = siteContent['main-content']['services-h4']
mainHeader[3].innerHTML = siteContent['main-content']['product-h4']
mainHeader[4].innerHTML = siteContent['main-content']['vision-h4']

//Main Content Paragraphs Only
mainText[0].innerHTML = siteContent['main-content']['features-content']
mainText[1].innerHTML = siteContent['main-content']['about-content']
mainText[2].innerHTML = siteContent['main-content']['services-content']
mainText[3].innerHTML = siteContent['main-content']['product-content']
mainText[4].innerHTML = siteContent['main-content']['vision-content']

//Contact Information
let contactHeader = document.getElementsByTagName('h4');
contactHeader[5].innerHTML = siteContent['contact']['contact-h4']
let contactText = document.getElementsByTagName('p');
contactText[5].innerHTML = siteContent['contact']['address']
contactText[6].innerHTML = siteContent['contact']['phone']
contactText[7].innerHTML = siteContent['contact']['email']

//Footer
let footerText = document.getElementsByTagName('p');
footerText[8].innerHTML = siteContent['footer']['copyright']

//Nav text color change
navLinkOne[0].style.color = 'green';
navLinkOne[1].style.color = 'green';
navLinkOne[2].style.color = 'green';
navLinkOne[3].style.color = 'green';
navLinkOne[4].style.color = 'green';
navLinkOne[5].style.color = 'green';
navLinkOne[6].style.color = 'green';
navLinkOne[7].style.color = 'green';


