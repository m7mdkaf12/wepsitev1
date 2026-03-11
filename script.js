document.getElementById("loginForm").addEventListener("submit", function(event){

event.preventDefault();

let username = document.getElementById("username").value;
let password = document.getElementById("password").value;
let message = document.getElementById("message");

let lettersOnly = /^[A-Za-z\u0600-\u06FF\s]+$/;

if(username === "" || password === ""){
message.innerText = "Please enter your username and password.";
message.style.color = "red";
}

else if(!lettersOnly.test(username)){
message.innerText = "The username must contain only letters";
message.style.color = "red";
}

else{
message.innerText = "logged successfully";
message.style.color = "green";
}
});

const translateBtn = document.getElementById("translate-btn");
let isArabic = false;

translateBtn.addEventListener("click", function() {

    const heading = document.querySelector(".login-container h2");
    const labels = document.querySelectorAll(".login-container label");
    const loginButton = document.querySelector(".login-container button[type='submit']");
    const links = document.querySelectorAll(".pagesN a");

    if(!isArabic){

        heading.textContent = "نظام تسجيل الدخول";

        labels[0].textContent = "اسم المستخدم";
        labels[1].textContent = "كلمة المرور";

        loginButton.textContent = "تسجيل الدخول";

        links[0].textContent = "معلومات عنا";
        links[1].textContent = "خدماتنا";
        links[2].textContent = "الباقات";
        links[3].textContent = "أسعار الفندق";
        links[4].textContent = "اتصل بنا";

        translateBtn.textContent = "English";
        isArabic = true;

    } else {

        heading.textContent = "Login system";

        labels[0].textContent = "User name";
        labels[1].textContent = "Password";

        loginButton.textContent = "Login";

        links[0].textContent = "about";
        links[1].textContent = "services";
        links[2].textContent = "packages";
        links[3].textContent = "hotel prices";
        links[4].textContent = "contact us";

        translateBtn.textContent = "Arabic";
        isArabic = false;
    }

});
