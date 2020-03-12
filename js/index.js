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

//Images

    // Example: Update the img src for the logo
      let logo = document.getElementById("logo-img");
      logo.setAttribute('src', siteContent["nav"]["img-src"])

    // Update the img src for the header

      let hedImg = document.getElementById("cta-img");
      hedImg.setAttribute('src', siteContent["cta"]["img-src"])

    // Update the img src for middle content

      let contImg = document.getElementById("middle-img");
      contImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

//Header

    //Add Content

      

      // a

        const aSelector = document.querySelectorAll('a');

// aSelector.forEach(link => {link.textContent = link.siteContent.nav})


        for(i = 0 ; i < aSelector.length; i++){

  aSelector[i].textContent = siteContent.nav[`nav-item-${i}`];
    //Change Nav to green
  aSelector[i].style.color = 'green';

 

}

        // aSelector[0].textContent = siteContent.nav['nav-item-1']
        // aSelector[1].textContent = siteContent.nav['nav-item-2']
        // aSelector[2].textContent = siteContent.nav['nav-item-3']
        // aSelector[3].textContent = siteContent.nav['nav-item-4']
        // aSelector[4].textContent = siteContent.nav['nav-item-5']
        // aSelector[5].textContent = siteContent.nav['nav-item-6']

    // h1

      const ctaSelector = document.querySelector('h1');
      ctaSelector.textContent = siteContent.cta['h1']

    // button 

      const btnSelector = document.querySelector('button');
      btnSelector.textContent = siteContent.cta["button"]

      //Button event


      function grBg (){

        document.querySelector('body').style.backgroundColor = 'grey';
      }


      btnSelector.addEventListener('click', grBg)

// Main-Content

      //h4

        const mainH4 = document.querySelectorAll('h4');
        mainH4[0].textContent = siteContent["main-content"]["features-h4"]
        mainH4[1].textContent = siteContent["main-content"]["about-h4"]
        mainH4[2].textContent = siteContent["main-content"]["services-h4"]
        mainH4[3].textContent = siteContent["main-content"]["product-h4"]
        mainH4[4].textContent = siteContent["main-content"]["vision-h4"]
        mainH4[5].textContent = siteContent["contact"]["contact-h4"]

      //p

        const mainP = document.querySelectorAll('p');
        mainP[0].textContent = siteContent['main-content']['features-content']
        mainP[1].textContent = siteContent['main-content']['about-content']
        mainP[2].textContent = siteContent['main-content']['services-content']
        mainP[3].textContent = siteContent['main-content']['product-content']
        mainP[4].textContent = siteContent['main-content']['vision-content']
        mainP[5].textContent = siteContent['contact']['address']
        mainP[6].textContent = siteContent['contact']['phone']
        mainP[7].textContent = siteContent['contact']['email']

//Footer

        mainP[8].textContent = siteContent['footer']['copyright']





//DOM Manipulation

    //Change Nav to green

      // aSelector[0].style.color = 'green';
      // aSelector[1].style.color = 'green';
      // aSelector[2].style.color = 'green';
      // aSelector[3].style.color = 'green';
      // aSelector[4].style.color = 'green';
      // aSelector[5].style.color = 'green';


    //Add Two Elements with .append and .prepend

//Variables

    const navEL = document.querySelector('nav');
    const nodeFronta = document.createElement("a");
    const nFText = document.createTextNode("ThankScience");
    const nodeBacka = document.createElement("a");
    const nBText = document.createTextNode("It Works!");

    nodeFronta.prepend(nFText);
    nodeBacka.appendChild(nBText);


    //Please Work Damn You!

    
    
     navEL.prepend(nodeFronta);
     navEL.appendChild(nodeBacka);

    



   

//Stretch Goal

  //Update styles
ctaSelector.style.textShadow = `3px 2px red`
