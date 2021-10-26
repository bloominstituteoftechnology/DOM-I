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

// grabbing navbar
const container = document.querySelectorAll('nav a');
console.log(container);
// Updating TextContent for each link
container.forEach((element, index) => { 
  console.log(index);
  element.textContent = siteContent['nav'][`nav-item-${index+1}`];
   });

  //  Grabbing h1 and Updating Content 
   const h1 = document.querySelector('.cta-text h1');
    h1.textContent = siteContent['cta']['h1'];

    // Grabbing button
    const button = document.querySelector('.cta-text button');
     button.textContent = siteContent['cta']['button'];
    

    // Grabbing image

    const photo = document.querySelector('.cta img');
    photo.setAttribute('src',  siteContent['cta']['img-src']) ;
    console.log(photo);
   
    // Grabbing main-content 
    const main = document.querySelectorAll('.main-content')
    const h4s =  document.querySelectorAll('h4');
    console.log(h4s);
    h4s[0].textContent = siteContent['main-content']['features-h4'];
    h4s[1].textContent = siteContent['main-content']['about-h4'];
    h4s[2].textContent = siteContent['main-content']['product-h4'];
    h4s[3].textContent = siteContent['main-content']['services-h4'];
    h4s[4].textContent = siteContent['main-content']['vision-h4'];
   


    const ps = document.querySelectorAll('p');
   
    ps[0].textContent = siteContent['main-content']['features-content'];
    ps[1].textContent = siteContent['main-content']['about-content'];
    ps[2].textContent = siteContent['main-content']['product-content'];
    ps[3].textContent = siteContent['main-content']['services-content'];
    ps[4].textContent = siteContent['main-content']['vision-content'];

// Grabbing Mid-Image
  //  const photo = document.querySelector('.cta img');
    // photo.setAttribute('src',  siteContent['cta']['img-src']) ;
    // console.log(photo);

    const midImg = document.querySelector('.main-content img');
      midImg.setAttribute('src', siteContent['main-content']["middle-img-src"]);
      // Pay close attn to  classes and ids

 



  //    Grabbing Contact


  header.remove();
document.body.prepend(header);

const data ={
    "contact": {
        "contact-h4" : "Contact",
        "address" : "123 Way 456 Street Somewhere, USA",
        "phone" : "1-(888) 888-888",
        "email" : "sales@greatidea.io"
    }
};
    const contactH = document.querySelector('.contact h4')
    console.log(contactH);
    contactH.textContent = siteContent['contact']['contact-h4'];
    const contactP = document.querySelector('.contact address');
    console.log(contactP);
    contactP.textContent = siteContent['contact']["address"];
    const contactPhone = document.querySelector('.contact phone');
    console.log(contactPhone);
    contactPhone.textContent = siteContent['contact']["phone"]
    const contactEmail = document.querySelector('contact email');
    console.log(contactEmail);
    contactEmail.textContent = siteContent['contact']['email'];
  
  
  
      // const     "address" : "123 Way 456 Street Somewhere, USA",
  // //         "phone" : "1-(888) 888-888",
  // //         "email" : "sales@greatidea.io"
  // //     }
  // // };
  

  //   // const contactHeading = document.querySelector('.contact-h4');
  //    const address = document.querySelector("address");
  //   // const phone = document.querySelector('.phone');
  //   // const email = document.querySelector('.email');
  //   // console.log(contactHeading);
  //   console.log(address);




  
      
  
    

 

 

 




