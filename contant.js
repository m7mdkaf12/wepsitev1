document.querySelector("form").addEventListener("submit", function(event) {

event.preventDefault();

alert("Your message has been sent successfully!");

this.reset(); 

});

const translateBtn = document.getElementById("translate-btn");
let isArabic = false;

translateBtn.addEventListener("click", function(){

const title = document.querySelector(".contact h1");
const labels = document.querySelectorAll("label");
const options = document.querySelectorAll("select option");
const button = document.querySelector("form button");
const links = document.querySelectorAll(".pagesN a");

if(!isArabic){

// العنوان
title.textContent = "اتصل بنا";

// الحقول
labels[0].textContent = "الاسم";
labels[1].textContent = "الموضوع";
labels[2].textContent = "الرسالة";
labels[3].textContent = "رقم الهاتف";

// الخيارات
options[0].textContent = "مشكلة في الموقع";
options[1].textContent = "مساعدة";
options[2].textContent = "اقتراح";
options[3].textContent = "أخرى";

// الزر
button.textContent = "إرسال";

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
title.textContent = "Contact Us";

labels[0].textContent = "Name";
labels[1].textContent = "Subject";
labels[2].textContent = "Message";
labels[3].textContent = "Phone";

options[0].textContent = "Website problem";
options[1].textContent = "Help";
options[2].textContent = "Suggestion";
options[3].textContent = "Other";

button.textContent = "Send";

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