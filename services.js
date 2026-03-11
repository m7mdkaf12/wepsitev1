const translateBtn = document.getElementById("translate-btn");
let isArabic = false;

translateBtn.addEventListener("click", function(){

const title = document.querySelector(".services-title");
const serviceTitles = document.querySelectorAll(".service-card h2");
const serviceText = document.querySelectorAll(".service-card p");
const links = document.querySelectorAll(".pagesN a");

if(!isArabic){

// العنوان الرئيسي
title.textContent = "خدماتنا";

// الخدمات
serviceTitles[0].textContent = "تمشية الكلاب";
serviceText[0].textContent = "خدمة تمشية يومية للحفاظ على نشاط وصحة الكلاب";

serviceTitles[1].textContent = "العناية بالكلاب";
serviceText[1].textContent = "خدمات تنظيف وتجميل احترافية للكلاب";

serviceTitles[2].textContent = "سباحة الكلاب";
serviceText[2].textContent = "منطقة سباحة آمنة ليستمتع بها الكلاب";

serviceTitles[3].textContent = "رعاية الكلاب";
serviceText[3].textContent = "رعاية كاملة وإشراف على الكلاب داخل الفندق";

// القائمة
links[0].textContent = "الرئيسية";
links[1].textContent = "من نحن";
links[2].textContent = "الخدمات";
links[3].textContent = "الباقات";
links[4].textContent = "أسعار الفندق";
links[5].textContent = "اتصل بنا";

translateBtn.textContent = "English";
isArabic = true;

}else{

// English
title.textContent = "Our Services";

serviceTitles[0].textContent = "Dog Walking";
serviceText[0].textContent = "Daily walking service to keep dogs active and healthy.";

serviceTitles[1].textContent = "Dog Grooming";
serviceText[1].textContent = "Professional grooming services for dogs.";

serviceTitles[2].textContent = "Dog Swimming";
serviceText[2].textContent = "A safe swimming area for dogs to enjoy.";

serviceTitles[3].textContent = "Dog Care";
serviceText[3].textContent = "Full care and supervision for dogs in the hotel.";

links[0].textContent = "home";
links[1].textContent = "about";
links[2].textContent = "services";
links[3].textContent = "packages";
links[4].textContent = "hotel prices";
links[5].textContent = "contact us";

translateBtn.textContent = "Arabic";
isArabic = false;

}

});