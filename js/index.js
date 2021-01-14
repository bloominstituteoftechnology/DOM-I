const siteContent = {
	nav: {
		'nav-item-1': 'Services',
		'nav-item-2': 'Product',
		'nav-item-3': 'Vision',
		'nav-item-4': 'Features',
		'nav-item-5': 'About',
		'nav-item-6': 'Contact',
		'img-src': 'img/logo.png',
	},
	cta: {
		h1: 'DOM Is Awesome',
		button: 'Get Started',
		'img-src': 'img/header-img.png',
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
			'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
	},
	contact: {
		'contact-h4': 'Contact',
		address: '123 Way 456 Street Somewhere, USA',
		phone: '1 (888) 888-8888',
		email: 'sales@greatidea.io',
	},
	footer: {
		copyright: 'Copyright Great Idea! 2018',
	},
};

// Example: Update the img src for the logo
let logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent['nav']['img-src']);

//remove DOM from title to match Original
document.title = 'Great Idea!';

//add text to links
const navLinks = document.querySelectorAll('nav a');
navLinks[0].textContent = siteContent.nav['nav-item-1'];
navLinks[1].textContent = siteContent.nav['nav-item-2'];
navLinks[2].textContent = siteContent.nav['nav-item-3'];
navLinks[3].textContent = siteContent.nav['nav-item-4'];
navLinks[4].textContent = siteContent.nav['nav-item-5'];
navLinks[5].textContent = siteContent.nav['nav-item-6'];
//must be a better way to do this... with a for each.. RESEARCH THIS

//Adding <h1>DOM<br> Is<br> Awesome</h1>  - will attempt to pull from object later. 20 minutes on this is up.
document.querySelector('h1').insertAdjacentHTML('beforeend', 'DOM<br> Is<br> Awesome</DOM>');

//add 'Get Started' text to button
document.querySelector('button').textContent = siteContent.cta.button;

//add cta src attribute
document.getElementById('cta-img').setAttribute('src', siteContent['cta']['img-src']);

//add h4 elements
const fourHeads = document.querySelectorAll('h4')
fourHeads[0].textContent = siteContent['main-content']['features-h4'];
fourHeads[1].textContent = siteContent['main-content']['about-h4'];
fourHeads[2].textContent = siteContent['main-content']['services-h4'];
fourHeads[3].textContent = siteContent['main-content']['product-h4'];
fourHeads[4].textContent = siteContent['main-content']['vision-h4'];
fourHeads[5].textContent = siteContent['contact']['contact-h4'];

//add p elements
const pText = document.querySelectorAll('p')
pText[0].textContent = siteContent['main-content']['features-content'];
pText[1].textContent = siteContent['main-content']['about-content'];
pText[2].textContent = siteContent['main-content']['services-content'];
pText[3].textContent = siteContent['main-content']['product-content'];
pText[4].textContent = siteContent['main-content']['vision-content'];
//pText[5].textContent =  siteContent['contact']['address'];
pText[5].insertAdjacentHTML('afterbegin', '123 Way 456 Street<br>Somewhere, USA');
pText[6].textContent =  siteContent['contact']['phone'];
pText[7].textContent =  siteContent['contact']['email'];
pText[8].textContent =  siteContent['footer']['copyright'];

//add middle-img src attribute
document.getElementById('middle-img').setAttribute('src', siteContent['main-content']['middle-img-src']);




//testing
console.log(pText[5]);
console.log(siteContent['contact']);
