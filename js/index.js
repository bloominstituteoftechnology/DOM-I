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

// Image list
let imageList = document.querySelectorAll("img");
imageList[0].setAttribute('src', siteContent["nav"]["img-src"]);
imageList[1].setAttribute('src', siteContent["cta"]["img-src"]);
imageList[2].setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// DOM for child
Object.keys(siteContent).forEach(function(selector) {
  let parent = document.querySelector(selector) || document.querySelector('.' + selector);
  let childList = Array.from(parent.children);

  childList.forEach(function(element, index) {
    const arrayOfContent = Object.values(siteContent[selector]);
    element.innerText = arrayOfContent[index];
  })

});

// Brute force
let cta  = document.querySelector('.cta .cta-text');
cta.innerHTML = `
                  <h1>${siteContent['cta']['h1']}</h1>
                  <button>${siteContent['cta']['button']}</button>
                `;

let topContent = document.querySelector('.main-content .top-content');
topContent.innerHTML = `
                          <div class="text-content">
                            <h4>${siteContent['main-content']['features-h4']}</h4>
                            <p>${siteContent['main-content']['features-content']}</p>
                          </div>
                          <div class="text-content">
                            <h4>${siteContent['main-content']['about-h4']}</h4>
                            <p>${siteContent['main-content']['about-content']}</p>
                          </div>
                        `;

let bottomContent = document.querySelector('.main-content .bottom-content');
bottomContent.innerHTML = `
                          <div class="text-content">
                            <h4>${siteContent['main-content']['services-h4']}</h4>
                            <p>${siteContent['main-content']['services-content']}</p>
                          </div>
                          <div class="text-content">
                            <h4>${siteContent['main-content']['product-h4']}</h4>
                            <p>${siteContent['main-content']['product-content']}</p>
                          </div>
                          <div class="text-content">
                            <h4>${siteContent['main-content']['vision-h4']}</h4>
                            <p>${siteContent['main-content']['vision-content']}</p>
                          </div>  
                        `; 

// navigation color
let navigationText = document.querySelectorAll('nav a');
navigationText.forEach(function(text) {
  text.style.color = 'green';
})

let RandomA = document.createElement("a");
let RandomB = document.createElement("a");
RandomA.innerText = 'RandomA';
RandomB.innerText = 'RandomB';
navigationText[0].parentNode.appendChild(RandomA);
navigationText[0].parentNode.prepend(RandomB);

let navbar = navigationText[0].parentNode.parentNode;
navbar.style.background = 'green';
navbar.addEventListener('click', function() {
  if (navbar.style.background === 'green') {
    navbar.style.background = 'red';
  } else {
    navbar.style.background = 'green';
  }
})

// window.addEventListener('scroll', function(){
//   navbar.classList.add('sticky');
// })