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
  "change": {
    "h1": "Ebi Is Da Best"
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

let addImgCodeSnip = document.getElementById("cta-img");
addImgCodeSnip.setAttribute('src', siteContent["cta"]["img-src"])

let middleImg= document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])


//Nav Items
let addNav = document.querySelectorAll('a');
addNav[0].innerText = siteContent["nav"]["nav-item-1"];
addNav[1].innerText = siteContent["nav"]["nav-item-2"];
addNav[2].innerText = siteContent["nav"]["nav-item-3"];
addNav[3].innerText = siteContent["nav"]["nav-item-4"];
addNav[4].innerText = siteContent["nav"]["nav-item-5"];
addNav[5].innerText = siteContent["nav"]["nav-item-6"];

//cta section
let ctaH1 = document.querySelector("h1");
let ct = ctaH1.innerText = siteContent["cta"]["h1"].split(' ').join("\n")

let ctaBtn = document.querySelector('button')
ctaBtn.innerText = siteContent['cta']['button']

//Main Content  Items

let contentH4 = document.querySelectorAll('.text-content > h4')
contentH4[0].innerText = siteContent['main-content']['features-h4']
contentH4[1].innerText = siteContent['main-content']['about-h4']
contentH4[2].innerText = siteContent['main-content']['services-h4']
contentH4[3].innerText = siteContent['main-content']['product-h4']
contentH4[4].innerText = siteContent['main-content']['vision-h4']


let contentP = document.querySelectorAll('.text-content > p')
contentP[0].innerText = siteContent['main-content']['features-content']
contentP[1].innerText = siteContent['main-content']['about-content']
contentP[2].innerText = siteContent['main-content']['services-content']
contentP[3].innerText = siteContent['main-content']['product-content']
contentP[4].innerText = siteContent['main-content']['vision-content']


//Contact
let contactH4 = document.querySelector('.contact > h4')
contactH4.innerText = siteContent['contact']['contact-h4']

let contactSection = document.querySelectorAll('.contact > p')
contactSection[0].innerText = siteContent['contact']['address'].split('Street').join('Street \n')
contactSection[1].innerText = siteContent['contact']['phone']
contactSection[2].innerText = siteContent['contact']['email']


// Footer
let footerContent = document.querySelector('footer')
footerContent.innerText = siteContent['footer']['copyright']

let navi = document.getElementsByTagName('nav')[0]

let addNewLinks = (link)=>{
  let newLinks = document.createElement('a');
  newLinks.innerText = link;
  return newLinks;
}



navi.prepend(addNewLinks('🏠'));
navi.append(addNewLinks('🎁'))

x = document.querySelector('nav > a')
y = document.querySelectorAll('nav > a')[7]
x.style.fontSize = '1.2em';
y.style.fontSize = '1.2em'

//stretch
demo = document.getElementsByTagName('button')[0]
demo.innerText = 'Click Me'
demo.addEventListener('click', function(){
  if(ctaH1.innerText=== ct){
    ctaH1.innerText = siteContent['change']['h1'].split('Ebi').join('Ebi \n').split('Is').join('Is \n')
  } else {
    ctaH1.innerText = ct;
  }

  
  })