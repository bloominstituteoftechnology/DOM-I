// Ans. (3)
// ~-=-~-=-~-=-~-=-~-=-~-=-~-=-~-=-~-=-~-=-~-=-~-=- //
document.querySelector("h1").textContent=siteContent.cta.h1;
document.querySelector("button").textContent=siteContent.cta.button
document.getElementById("cta-img").src=siteContent.cta["img-src"]
document.getElementById("middle-img").src = siteContent["main-content"]["middle-img-src"]; //(1)
document.querySelector("footer p").textContent = siteContent.footer.copyright

// (1) I dont know why this doesnt need .cta.

//Main
H4List = document.querySelectorAll(".main-content h4");
PList = document.querySelectorAll(".text-content p");

const arr = Object.values(siteContent["main-content"]);

H4List.forEach((item, index) => {
  const arrH4 = arr.filter(item => !item.includes("."));
  const arrP = arr.filter(item => item.includes(" "));

  H4List[index].innerText = arrH4[index];
  PList[index].innerText = arrP[index];
})

//Contact Head
document.querySelector(".contact h4").innerText = siteContent["contact"]["contact-h4"];

//Contact Info
cArr = Object.values(siteContent["contact"]);
cArr.shift();

document.querySelectorAll(".contact p").forEach((item, index) => {
  item.textContent = cArr[index];
})
