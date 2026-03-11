const translateBtn = document.getElementById("translate-btn");
let isArabic = false;

translateBtn.addEventListener("click", function(){

const title = document.querySelector(".packages-title");
const packageTitles = document.querySelectorAll(".package-card h2");
const packageText = document.querySelectorAll(".package-card p");
const customText = document.querySelector(".custom-package p");
const links = document.querySelectorAll(".pagesN a");

if(!isArabic){

// العنوان
title.textContent = "الباقات";

// أسماء الباقات
packageTitles[0].textContent = "الباقة المميزة";
packageTitles[1].textContent = "الباقة الكلاسيكية";
packageTitles[2].textContent = "الباقة الأساسية";

// تفاصيل الباقات
packageText[0].textContent = "- المشي أربع مرات / أربع نشاطات يومياً";
packageText[1].textContent = "- منطقة عشب خاصة";
packageText[2].textContent = "- تحديثات وصور يومية";
packageText[3].textContent = "- مكافآت (حسب الاتفاق مع صاحب الكلب)";

packageText[4].textContent = "- المشي ثلاث مرات / ثلاث نشاطات يومياً";
packageText[5].textContent = "- منطقة لعب داخلية";
packageText[6].textContent = "- منطقة استرخاء";
packageText[7].textContent = "- جلسة تنظيف";

packageText[8].textContent = "- المشي مرتين يومياً";
packageText[9].textContent = "- منطقة لعب خارجية";
packageText[10].textContent = "- مسار تدريب";
packageText[11].textContent = "- منطقة حفر بالرمل";

// النص الأخير
customText.textContent =
"تتوفر باقات مخصصة للإقامات الطويلة أو للكلاب ذات الاحتياجات الخاصة. يمكن للعملاء التواصل مع الشركة لترتيب الباقات المخصصة.";

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
title.textContent = "Our Packages";

packageTitles[0].textContent = "Premium Package";
packageTitles[1].textContent = "Classic Package";
packageTitles[2].textContent = "Basic Package";

packageText[0].textContent = "- Walk four times / four activities daily";
packageText[1].textContent = "- Private grass area";
packageText[2].textContent = "- Daily updates and photos";
packageText[3].textContent = "- Treats (as agreed with the pet owner)";

packageText[4].textContent = "- Walk three times / three activities daily";
packageText[5].textContent = "- Indoor play area";
packageText[6].textContent = "- Relaxation area";
packageText[7].textContent = "- Grooming session";

packageText[8].textContent = "- Walk twice daily";
packageText[9].textContent = "- Outdoor play area";
packageText[10].textContent = "- Agility course";
packageText[11].textContent = "- Sand digging area";

customText.textContent =
"Custom packages are available for long stays or for dogs with special needs. Customers should contact the company to arrange custom packages.";

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