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
let logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent['nav']['img-src']);

let nav = document.querySelectorAll('nav a');
console.log(nav);
for (i = 0; i <= nav.length - 1; i++) {
	currentItem = nav[i];
	console.log[i];
	console.log(currentItem);
	currentItem.innerHTML = siteContent['nav']['nav-item-' + [i + 1]];
}

for (i = 0; i <= nav.length - 1; i++) {
	nav[i].style.color = 'green';
}

let fullNav = document.querySelector('nav');
navitemOne = document.createElement('a');
navitemOne.innerHTML = 'NEW ITEM';
navitemTwo = document.createElement('a');
navitemTwo.innerHTML = 'NEW ITEM';
fullNav.prepend(navitemOne);
fullNav.appendChild(navitemTwo);

let ctaHead = document.querySelector('.cta h1');

ctaHead.innerHTML = siteContent.cta.h1;

let ctaButton = document.querySelector('.cta button');

ctaButton.innerHTML = siteContent.cta.button;

let ctaImg = document.querySelector('.cta img');

ctaImg.setAttribute('src', siteContent['cta']['img-src']);
//features
let featuresHfour = document.querySelector(
	'.main-content .top-content .text-content h4'
);

featuresHfour.innerHTML = siteContent['main-content']['features-h4'];

let featuresP = document.querySelector(
	'.main-content .top-content .text-content p'
);

featuresP.innerHTML = siteContent['main-content']['features-content'];

//about
let aboutH = document.querySelector(
	'.main-content .top-content .text-content:nth-child(2) h4'
);
aboutH.innerHTML = siteContent['main-content']['about-h4'];

let aboutP = document.querySelector(
	'.main-content .top-content .text-content:nth-child(2) p'
);
aboutP.innerHTML = siteContent['main-content']['about-content'];

//img
let centerImg = document.querySelector('.main-content .top-content + img');
console.log(centerImg);

centerImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

//services
let servicesH = document.querySelector(
	'.main-content .bottom-content .text-content h4'
);
servicesH.innerHTML = siteContent['main-content']['services-h4'];

let servicesP = document.querySelector(
	'.main-content .bottom-content .text-content p'
);
servicesP.innerHTML = siteContent['main-content']['services-content'];

//product
let productH = document.querySelector(
	'.main-content .bottom-content .text-content:nth-child(2) h4'
);
productH.innerHTML = siteContent['main-content']['product-h4'];

let productP = document.querySelector(
	'.main-content .bottom-content .text-content:nth-child(2) p'
);

productP.innerHTML = siteContent['main-content']['product-content'];

//vision
let visionH = document.querySelector(
	'.main-content .bottom-content .text-content:nth-child(3) h4'
);

visionH.innerHTML = siteContent['main-content']['vision-h4'];

let visionP = document.querySelector(
	'.main-content .bottom-content .text-content:nth-child(3) p'
);

visionP.innerHTML = siteContent['main-content']['product-content'];

//contact

let contactH = document.querySelector('.contact h4');
contactH.innerHTML = siteContent['contact']['contact-h4'];

let contactAddress = document.querySelector('.contact p');
contactAddress.innerHTML = siteContent['contact']['address'];

let contactPhone = document.querySelector('.contact p:nth-child(3)');

contactPhone.innerHTML = siteContent['contact']['phone'];

let contactEmail = document.querySelector('.contact p:nth-child(4)');

contactEmail.innerHTML = siteContent['contact']['email'];

//footer
let footer = document.querySelector('footer p');
footer.innerHTML = siteContent['footer']['copyright'];
