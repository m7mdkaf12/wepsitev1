const translateBtn = document.getElementById("translate-btn");
let isArabic = false;

translateBtn.addEventListener("click", function(){

    const titles = document.querySelectorAll(".about-text h1");
    const paragraphs = document.querySelectorAll(".about-text p");
    const links = document.querySelectorAll(".pagesN a");

    if(!isArabic){

        // العناوين
        titles[0].textContent = "من نحن";
        titles[1].textContent = "هدفنا";

        // الفقرات
        paragraphs[0].textContent =
        "نحن جمعية توفر غرف فندقية للكلاب في بيئة آمنة، كما نقدم مرافق ومنتجات مخصصة للكلاب.";

        paragraphs[1].textContent =
        "هدفنا هو تقديم خدمات توفر مكاناً آمناً للكلاب بالإضافة إلى خدمات مثل التنظيف والمشي والرعاية الصحية.";

        // القائمة
        links[0].textContent = "الرئيسية";
        links[1].textContent = "من نحن";
        links[2].textContent = "الخدمات";
        links[3].textContent = "الباقات";
        links[4].textContent = "أسعار الفندق";
        links[5].textContent = "اتصل بنا";

        translateBtn.textContent = "English";
        isArabic = true;

    } else {

        // English
        titles[0].textContent = "About Us";
        titles[1].textContent = "Our Target";

        paragraphs[0].textContent =
        "We are an association that provides hotel rooms for dogs in a safe environment and offers facilities and products for dogs.";

        paragraphs[1].textContent =
        "Our goal is to provide services that offer a safe place for dogs in addition to services such as cleaning, walking, and healthcare.";

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