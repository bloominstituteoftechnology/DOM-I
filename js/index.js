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

let links = document.querySelectorAll('a');
    links[0].textContent = siteContent['nav']["nav-item-1"];
    links[1].textContent = siteContent['nav']["nav-item-2"];
    links[2].textContent = siteContent['nav']["nav-item-3"];
    links[3].textContent = siteContent['nav']["nav-item-4"];
    links[4].textContent = siteContent['nav']["nav-item-5"];
    links[5].textContent = siteContent['nav']["nav-item-6"];
    Array.from(links).forEach( link => {
      link.style.color = 'green';
    })
    const newLink = document.createElement('a');
    const newNav = document.querySelector('nav');
      newLink.innerText = 'Our Team'
      newLink.href = "#"
      newNav.append(newLink);
      newLink.style.color = 'green' 

    let header = document.querySelector('h1')
    header.textContent = siteContent['cta']['h1'];

    let getButton = document.querySelector('button')
    getButton.innerText = "Get Started"

  let code = document.getElementById("cta-img");
  code.setAttribute('src', siteContent["cta"]["img-src"])
  
  let mainContent = document.querySelectorAll('.text-content')
  mainContent[0].querySelector('h4').textContent = siteContent['main-content']['features-h4']
  mainContent[0].querySelector('p').textContent = siteContent['main-content']['features-content']
  mainContent[1].querySelector('h4').textContent = siteContent['main-content']['about-h4']
  mainContent[1].querySelector('p').textContent = siteContent['main-content']['about-content']  
  mainContent[2].querySelector('h4').textContent = siteContent['main-content']['services-h4']
  mainContent[2].querySelector('p').textContent = siteContent['main-content']['services-content']
  mainContent[3].querySelector('h4').textContent = siteContent['main-content']['product-h4']
  mainContent[3].querySelector('p').textContent = siteContent['main-content']['product-content']
  mainContent[4].querySelector('h4').textContent = siteContent['main-content']['vision-h4']
  mainContent[4].querySelector('p').textContent = siteContent['main-content']['vision-content']

  let middleImg = document.getElementById("middle-img");
  middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

  let info = document.querySelector('.contact')
    info.getElementsByTagName('h4')[0].textContent = siteContent["contact"]["contact-h4"]
    info.getElementsByTagName('p')[0].textContent = siteContent["contact"]["address"]
    info.getElementsByTagName('p')[1].textContent = siteContent["contact"]["phone"]
    info.getElementsByTagName('p')[2].textContent = siteContent["contact"]["email"]

    let foot = document.querySelector('footer')
    foot.innerText = "Copyright Great Idea! 2020"