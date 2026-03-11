document.getElementById("bookingForm").addEventListener("submit", function(e){

e.preventDefault();

let owner = document.getElementById("ownerName").value;
let dog = document.getElementById("dogName").value;
let city = document.getElementById("city").value;
let rooms = document.getElementById("rooms").value;

let message = document.getElementById("bookingMessage");

if(owner == "" || dog == "" || city == ""){
message.innerHTML = "Error: Please fill all fields";
message.style.color = "red";
}

else{

let price;

if(rooms == "1"){
price = 15;
}
else if(rooms == "2"){
price = 25;
}
else{
price = 35;
}

message.innerHTML =
"Booking Details <br>" +
"Owner Name: " + owner + "<br>" +
"Dog Name: " + dog + "<br>" +
"City: " + city + "<br>" +
"Rooms: " + rooms + "<br>" +
"Total Price: $" + price;

message.style.color = "lightgreen";

}

});


const translateBtn = document.getElementById("translate-btn");
let isArabic = false;

translateBtn.addEventListener("click", function() {

    const title = document.querySelector(".prices-title");
    const priceCards = document.querySelectorAll(".price-card h2");
    const priceDescriptions = document.querySelectorAll(".price-card p");
    const priceAmounts = document.querySelectorAll(".price-card h3");
    const bookingTitle = document.querySelector(".booking-title");
    const bookingLabels = document.querySelectorAll(".booking-form label");
    const bookingButton = document.querySelector(".booking-form button");
    const links = document.querySelectorAll(".pagesN a");

    if(!isArabic) {

        // تغيير اتجاه الصفحة
        document.body.setAttribute("dir", "rtl");

        // العنوان الرئيسي
        title.textContent = "أسعار الفندق";

        // بطاقات الأسعار
        priceCards[0].textContent = "غرفة واحدة";
        priceCards[1].textContent = "غرفتان";
        priceCards[2].textContent = "ثلاث غرف";

        priceDescriptions[0].textContent = "مثالية لكلب واحد";
        priceDescriptions[1].textContent = "مساحة وراحة أكبر";
        priceDescriptions[2].textContent = "مساحة واسعة للكلاب النشطة";

        priceAmounts[0].textContent = "$15 / الليلة";
        priceAmounts[1].textContent = "$25 / الليلة";
        priceAmounts[2].textContent = "$35 / الليلة";

        // نموذج الحجز
        bookingTitle.textContent = "حجز غرفة";
        bookingLabels[0].textContent = "اسمك";
        bookingLabels[1].textContent = "اسم الكلب";
        bookingLabels[2].textContent = "المدينة";
        bookingLabels[3].textContent = "عدد الغرف";
        bookingButton.textContent = "إرسال";

        // روابط القائمة
        links[0].textContent = "الرئيسية";
        links[1].textContent = "من نحن";
        links[2].textContent = "الخدمات";
        links[3].textContent = "الباقات";
        links[4].textContent = "أسعار الفندق";
        links[5].textContent = "اتصل بنا";

        // زر التحويل
        translateBtn.textContent = "English";

        isArabic = true;

    } else {

        // إعادة الاتجاه للإنجليزية
        document.body.removeAttribute("dir");

        // العنوان الرئيسي
        title.textContent = "Hotel Prices";

        // بطاقات الأسعار
        priceCards[0].textContent = "One Room";
        priceCards[1].textContent = "Two Rooms";
        priceCards[2].textContent = "Three Rooms";

        priceDescriptions[0].textContent = "Perfect for one dog";
        priceDescriptions[1].textContent = "More space and comfort";
        priceDescriptions[2].textContent = "Large space for active dogs";

        priceAmounts[0].textContent = "$15 / night";
        priceAmounts[1].textContent = "$25 / night";
        priceAmounts[2].textContent = "$35 / night";

        // نموذج الحجز
        bookingTitle.textContent = "Book a Room";
        bookingLabels[0].textContent = "Your Name";
        bookingLabels[1].textContent = "Dog Name";
        bookingLabels[2].textContent = "City";
        bookingLabels[3].textContent = "Number of Rooms";
        bookingButton.textContent = "Send";

        // روابط القائمة
        links[0].textContent = "home";
        links[1].textContent = "about";
        links[2].textContent = "services";
        links[3].textContent = "packages";
        links[4].textContent = "hotel prices";
        links[5].textContent = "contact us";

        // زر التحويل
        translateBtn.textContent = "Arabic";

        isArabic = false;

    }

});