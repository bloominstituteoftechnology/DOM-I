const siteContent = {
	nav: {
		'nav-item-1': 'Services',
		'nav-item-2': 'Product',
		'nav-item-3': 'Vision',
		'nav-item-4': 'Features',
		'nav-item-5': 'About',
		'nav-item-6': 'Contact',
		'img-src': 'img/logo.png'
	},
	cta: {
		h1: 'DOM Is Awesome',
		button: 'Get Started',
		'img-src': 'img/header-img.png'
	},
	'main-content': {
		'features-h4': 'Features',
		'features-content':
			'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'about-h4': 'About',
		'about-content':
			'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'middle-img-src': 'img/mid-page-accent.jpg',
		'services-h4': 'Services',
		'services-content':
			'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'product-h4': 'Product',
		'product-content':
			'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'vision-h4': 'Vision',
		'vision-content':
			'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
	},
	contact: {
		'contact-h4': 'Contact',
		address: '123 Way 456 Street Somewhere, USA',
		phone: '1 (888) 888-8888',
		email: 'sales@greatidea.io'
	},
	footer: {
		copyright: 'Copyright Great Idea! 2018'
	}
};

// Example: Update the img src for the logo
logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent['nav']['img-src']);

// setting the names and colors for the a link

const nav = document.querySelector('nav');
const navA = document.querySelectorAll('nav a');

navA[0].innerText = siteContent['nav']['nav-item-1'];

navA[1].innerText = siteContent['nav']['nav-item-2'];

navA[2].innerText = siteContent['nav']['nav-item-3'];

navA[3].innerText = siteContent['nav']['nav-item-4'];

navA[4].innerText = siteContent['nav']['nav-item-5'];

navA[5].innerText = siteContent['nav']['nav-item-6'];

// append and prepend
let listItem2 = document.createElement('a');
listItem2.textContent = 'Ideas';
listItem2.style.color = 'green';
nav.prepend(listItem2);

let listItem = document.createElement('a');
listItem.textContent = 'Experiments';
listItem.style.color = 'green';
nav.appendChild(listItem);

//adding color to each a element
navA.forEach(function(a) {
	a.style.color = 'green';
});

// The CTA section
const domIsAwesomeH1 = document.querySelector('.cta-text h1');
domIsAwesomeH1.innerHTML = siteContent['cta']['h1'].split(' ').join('<br>'); //adding line breaks to the h1 cta

const domIsAwesomeButton = document.querySelector('.cta-text button');
domIsAwesomeButton.textContent = siteContent['cta']['button'];

const domIsAwesomeImg = document.getElementById('cta-img');
domIsAwesomeImg.src = siteContent['cta']['img-src'];

// main content section
topFeaturesH4 = document.querySelector('.top-content div h4').textContent = siteContent['main-content']['features-h4'];

topFeaturesP = document.querySelector('.top-content div p').textContent =
	siteContent['main-content']['features-content'];

topAboutH4 = document.querySelector('.top-content .text-content:nth-of-type(2) h4').textContent = // DON'T FORGET TO ADD . FOR CLASSES
	siteContent['main-content']['about-h4'];

topAboutP = document.querySelector('.top-content .text-content:nth-of-type(2) p').textContent = //// HASHES FOR ID'S////////////////
	siteContent['main-content']['about-content'];

//Middle image
MiddleImg = document.getElementById('middle-img').src = siteContent['main-content']['middle-img-src'];

//Bottom content
bottomServicesH4 = document.querySelector('.bottom-content .text-content:nth-of-type(1) h4').textContent = // DON'T FORGET TO ADD . FOR CLASSES
	siteContent['main-content']['services-h4'];

bottomServicesp = document.querySelector('.bottom-content .text-content:nth-of-type(1) p').textContent = // DON'T FORGET TO ADD . FOR CLASSES
	siteContent['main-content']['services-content'];

bottomProductH4 = document.querySelector('.bottom-content .text-content:nth-of-type(2) h4').textContent = // HASHES FOR ID'S////////////////
	siteContent['main-content']['product-h4'];

bottomProductH4 = document.querySelector('.bottom-content .text-content:nth-of-type(2) p').textContent = // DON'T FORGET TO ADD . FOR CLASSES
	siteContent['main-content']['product-content'];

bottomVisionH4 = document.querySelector('.bottom-content .text-content:nth-of-type(3) h4').textContent = // HASHES FOR ID'S////////////////
	siteContent['main-content']['vision-h4'];

bottomVisionH4 = document.querySelector('.bottom-content .text-content:nth-of-type(3) p').textContent = // DON'T FORGET TO ADD . FOR CLASSES
	siteContent['main-content']['vision-content'];

// Contact section
contactContentH4 = document.querySelector('.contact h4').textContent = siteContent['contact']['contact-h4'];

contactContentH4 = document.querySelector('.contact p:nth-of-type(1)').textContent = siteContent['contact']['address'];

contactContentH4 = document.querySelector('.contact p:nth-of-type(2)').textContent = siteContent['contact']['phone'];

contactContentH4 = document.querySelector('.contact p:nth-of-type(3)').textContent = siteContent['contact']['email'];

//Footer section
foot = document.querySelector('footer p').textContent = siteContent['footer']['copyright'];
