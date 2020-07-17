
// NavBar
const navigationBar = document.querySelector('nav')
const navigationItems = navigationBar.querySelectorAll('a')
navigationItems[0].textContent = 'Services'
navigationItems[1].textContent = 'Product'
navigationItems[2].textContent = 'Vision'
navigationItems[3].textContent = 'Features'
navigationItems[4].textContent = 'About'
navigationItems[5].textContent = 'Contact'

navigationItems.forEach (() => {
  for (let i = 0; i < navigationItems.length; i++) {
    navigationItems[i].style.color = 'green';
  }
})

// NavBar Logo
const logo = document.getElementById("logo-img");
logo.src = '/img/logo.png'
logo.addEventListener('mouseover')

// title image, heading, and button
const ctaImage = document.querySelector('#cta-img')
ctaImage.src = 'img/header-img.png'
const button = document.querySelector('button')
button.textContent = 'Get Started'
const heading = document.querySelector('h1')
heading.textContent = 'DOM IS AWESOME'

// Top Content
const topContent = document.querySelector('.top-content')
const topContentHeadings = topContent.querySelectorAll('h4')
const topContentTextAreas = topContent.querySelectorAll('p')
topContentHeadings[0].textContent = 'Features'
topContentTextAreas[0].textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

// Top Content Heading
topContentHeadings[1].textContent = 'About'
topContentTextAreas[1].textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

// Middle Image
const middleImage = document.querySelector('.middle-img')
middleImage.src = "img/mid-page-accent.jpg"

// Bottom Content 1
const bottomContent = document.querySelector('.bottom-content')
const bottomContentHeadings = bottomContent.querySelectorAll('h4')
const bottomContentTextAreas = bottomContent.querySelectorAll('p')
bottomContentHeadings[0].textContent = 'Services'
bottomContentTextAreas[0].textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

// Bottom Content 2 Heading
bottomContentHeadings[1].textContent = "Product"
bottomContentTextAreas[1].textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

// Bottom Content 3 Heading
bottomContentHeadings[2].textContent = 'Vision'
bottomContentTextAreas[2].textContent = 'Vision content elemen tum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

const contactSection = document.querySelector('.contact')
const contactHeading = contactSection.querySelector('h4')
const contactTextAreas = contactSection.querySelectorAll('p')

// Bottom Contact Section Heading
contactHeading.textContent = 'Contact'

// Bottom Contact Section Content
contactTextAreas[0].textContent = '123 Way 456 Street Somewhere, USA'
contactTextAreas[1].textContent = '1 (888) 888-8888 '
contactTextAreas[2].textContent = 'sales@greatidea.io'

// Copywright Content
const copywright = document.querySelector('footer p')
copywright.textContent = 'Copywright Great Idea! 2018'