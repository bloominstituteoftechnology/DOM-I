const siteContent = {
  "nav": {
    "nav-item-1": "Services",  //header nav a
    "nav-item-2": "Product",   //header nav a
    "nav-item-3": "Vision",    //header nav a
    "nav-item-4": "Features",  //header nav a
    "nav-item-5": "About",     //header nav a
    "nav-item-6": "Contact",   //header nav a
    "img-src": "img/logo.png"  //ID = logo-img
  },
  "cta": {
    "h1": "DOM Is Awesome",//section class cts; div class cta-text h1
    "button": "Get Started",//section class cts; div class cta-text buttton
    "img-src": "img/header-img.png"//section class cts;
  },
  "main-content": {
    "features-h4":"Features",  //section class main-content; div class top-content
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

//-----------------------------nav
const navA = document.queryselectorAll('a');
const Values =object.values(sitecontent.nav);

for (let i = 0; i < navA.length; i++) {
  navA[i]. textcontent = values[i];
}


// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//-----------------------CTA
//"cta": {
  // "h1": "DOM Is Awesome",     
  // "button": "Get Started",    
  // "img-src": "img/header-img.png"

  //---------------------h1
  const ctaH1 = document.queryselector('div.cta-text > h1');

  ctaH1.textcontent =sitecontent["cta"]["h1"]

  //---------button
  const ctabutton = document.queryselector('div.cta-text > button');
  
  ctaButton.textcontent = sitecontent["cta"]["button"];

  //----------CTA image
  const ctaImage = document.getElementById('cta-img');

  ctaimage.setAttribute('src', sitecontent["cta"]["img-src"]);