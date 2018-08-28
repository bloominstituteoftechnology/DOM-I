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

// NAV  LINKS
const aTag    = document.querySelectorAll('nav a'),
      aTagArray   = Array.from(aTag);

  for (let i=0; i<aTagArray.length; i++){
    const string = `nav-item-${i+1}`;
    aTagArray[i].innerHTML = siteContent['nav'][string] ;
  };

  // SECTION CLASS CTA

  const h1Cta   = document.querySelector('.cta-text h1'),
        btnCta  = document.querySelector('.cta-text button'),
        imgCta  = document.querySelector('#cta-img');

        h1Cta.innerHTML   = siteContent['cta']['h1'] ;
        btnCta.innerHTML  = siteContent['cta']['button'] ;
        imgCta.src        = siteContent['cta']['img-src'] ;


// SECTION CLASS MAIN CONTENT
   
      const h4TopContent    = document.querySelectorAll('.main-content .top-content .text-content h4'),
            pTopContent     = document.querySelectorAll('.main-content .top-content .text-content p'),
            img             = document.querySelector('.main-content .middle-img');
            h4BottomContent = document.querySelectorAll('.main-content .bottom-content .text-content h4'),
            pBottomContent  = document.querySelectorAll('.main-content .bottom-content .text-content p');
            let imge        = document.querySelector('.main-content .middle-img');

            h4TopContent[0].innerHTML     = siteContent['main-content']['features-h4'];
            pTopContent[0].innerHTML      = siteContent['main-content']['features-content'];
            h4TopContent[1].innerHTML     = siteContent['main-content']['about-h4'];
            pTopContent[1].innerHTML      = siteContent['main-content']['about-content'];
            img.src                       = siteContent['main-content']['middle-img-src'];
            h4BottomContent[0].innerHTML      = siteContent['main-content']['services-h4'];
            pBottomContent [0].innerHTML      = siteContent['main-content']['services-content'];
            h4BottomContent [1].innerHTML     = siteContent['main-content']['product-h4'];
            pBottomContent [1].innerHTML      = siteContent['main-content']['product-content'];
            h4BottomContent [2].innerHTML     = siteContent['main-content']['vision-h4'];
            pBottomContent [2].innerHTML      = siteContent['main-content']['vision-content'];

// SECTION CLASS  CONTACT

const h4Contact    = document.querySelector('.contact h4'),
      pContact     = document.querySelectorAll('.contact p');

      h4Contact.innerHTML       = siteContent['contact']['contact-h4'];
      pContact[0].innerHTML     = siteContent['contact']['address'];
      pContact[1].innerHTML     = siteContent['contact']['phone'];
      pContact[2].innerHTML     = siteContent['contact']['email'];

// FOOTER

const pFooter  = document.querySelector('footer');

      pFooter.innerHTML = siteContent['footer']['copyright'];

     
   
  


