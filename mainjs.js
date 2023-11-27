
document.addEventListener('DOMContentLoaded', function () {
    var input = document.querySelector('.num-input');
    var upButton = document.querySelector('.up');
    var downButton = document.querySelector('.down');

    upButton.addEventListener('click', function () {
        incrementValue();
    });

    downButton.addEventListener('click', function () {
        decrementValue();
    });

    function incrementValue() {
        var currentValue = parseInt(input.value, 10);
        var maxValue = parseInt(input.max, 10);

        if (currentValue < maxValue) {
            input.value = currentValue + 1;
        }
    }

    function decrementValue() {
        var currentValue = parseInt(input.value, 10);
        var minValue = parseInt(input.min, 10);

        if (currentValue > minValue) {
            input.value = currentValue - 1;
        }
    }
});


// weight
document.addEventListener('DOMContentLoaded', function () {
    var input = document.querySelector('.selection-age2 .num-input');
    var upButton = document.querySelector('.selection-age2 .up2');
    var downButton = document.querySelector('.selection-age2 .down2');

    upButton.addEventListener('click', function () {
        incrementValue();
    });

    downButton.addEventListener('click', function () {
        decrementValue();
    });

    function incrementValue() {
        var currentValue = parseInt(input.value, 10);
        var maxValue = parseInt(input.max, 10);

        if (currentValue < maxValue) {
            input.value = currentValue + 1;
        }
    }

    function decrementValue() {
        var currentValue = parseInt(input.value, 10);
        var minValue = parseInt(input.min, 10);

        if (currentValue > minValue) {
            input.value = currentValue - 1;
        }
    }
});

  

function redirectMain() {
    window.location.href = "age.html";
}

function redirectSigupToLogin() {
    window.location.href = ".//age.html";
}

function tologin(){
    window.location.href = "login.html"
}

function toheight(){
    window.location.href = "height.html";
}

function tosex(){
    window.location.href = "sex.html"
}

function toperfermale(){
    window.location.href = "Choose your preferred outfit male.html"
}

function toperferfemale(){
    window.location.href = "choose-female.html";
}

function todone(){
    window.location.href = "done.html"
}

function tore(){
    window.location.href = "main.html"
}

function towedding(){
    window.location.href = "wedding.html"
}

function tosearch(){
    window.location.href = "search.html";
}

function toone_out(){
    window.location.href = "Outfit details.html";
}

function toprofile(){
    window.location.href = "profile.html";
}

function tosetting(){
    window.location.href = "setting.html";
}

function todiscover(){
    window.location.href = "discover.html"
}

function tomix() {
    window.location.href = "mixandmach.html";
}

function toadd(){
    window.location.href = "add.html"
}

function toshirt(){
    let url = "https://shopee.co.th/%E0%B9%80%E0%B8%AA%E0%B8%B7%E0%B9%89%E0%B8%AD%E0%B9%80%E0%B8%8A%E0%B8%B4%E0%B9%89%E0%B8%95%E0%B8%84%E0%B8%AD%E0%B8%9B%E0%B8%81%E0%B9%81%E0%B8%82%E0%B8%99%E0%B8%A2%E0%B8%B2%E0%B8%A7%E0%B9%80%E0%B8%88%E0%B9%87%E0%B8%94%E0%B8%AA%E0%B9%88%E0%B8%A7%E0%B8%99%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B8%8A%E0%B8%B2%E0%B8%A2%E0%B8%A5%E0%B8%B2%E0%B8%A2%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B8%84%E0%B8%A5%E0%B8%B2%E0%B8%AA%E0%B8%AA%E0%B8%B4%E0%B8%81%E0%B8%AA%E0%B8%B5%E0%B9%88%E0%B8%AA%E0%B8%B5-%E0%B9%80%E0%B8%99%E0%B8%B7%E0%B9%89%E0%B8%AD%E0%B8%9C%E0%B9%89%E0%B8%B2%E0%B9%83%E0%B8%AA%E0%B9%88%E0%B8%AA%E0%B8%9A%E0%B8%B2%E0%B8%A2-%E0%B8%AA%E0%B9%84%E0%B8%95%E0%B8%A3%E0%B9%8C%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%98%E0%B8%B8%E0%B8%A3%E0%B8%81%E0%B8%B4%E0%B8%88-%E0%B8%A0%E0%B8%B9%E0%B8%A1%E0%B8%B4%E0%B8%90%E0%B8%B2%E0%B8%99-i.359672987.13471461361?sp_atk=76301d3b-0958-4f06-93be-d3c822941e2f&xptdk=76301d3b-0958-4f06-93be-d3c822941e2f"
    let newwin = window.open(url);
}

function topants(){
    let url = "https://shopee.co.th/Inyourstyles.brand-%E0%B8%81%E0%B8%B2%E0%B8%87%E0%B9%80%E0%B8%81%E0%B8%87%E0%B8%A2%E0%B8%B5%E0%B8%99%E0%B8%AA%E0%B9%8C%E0%B8%97%E0%B8%A3%E0%B8%87%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%AD%E0%B8%81%E0%B8%95%E0%B8%A3%E0%B8%87-%E0%B8%AA%E0%B8%B5%E0%B8%9F%E0%B9%89%E0%B8%B2%E0%B8%8B%E0%B8%B5%E0%B8%94-i.600902369.12676017762?sp_atk=8e4ba88d-c86a-444f-8b32-461f340dc39a&xptdk=8e4ba88d-c86a-444f-8b32-461f340dc39a"
    let newwin = window.open(url);
}

function totanktop(){
    let url = "https://shopee.co.th/(Unisex)-%E0%B9%80%E0%B8%AA%E0%B8%B7%E0%B9%89%E0%B8%AD%E0%B8%81%E0%B8%A5%E0%B9%89%E0%B8%B2%E0%B8%A1-%E0%B8%9C%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%B4%E0%B9%88%E0%B8%A1-%E0%B9%83%E0%B8%AA%E0%B9%88%E0%B8%AA%E0%B8%9A%E0%B8%B2%E0%B8%A2-C-A-Canda-%E0%B9%81%E0%B8%97%E0%B9%89-%F0%9F%92%AF-i.171740988.17797350701?sp_atk=6ee6fca7-f3a6-44bd-972b-6541ff6c3492&xptdk=6ee6fca7-f3a6-44bd-972b-6541ff6c3492"
    let newwin = window.open(url);
}

function tobag(){
    let url = "https://shopee.co.th/Leacat-%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%9B%E0%B9%8B%E0%B8%B2%E0%B8%AA%E0%B8%B0%E0%B8%9E%E0%B8%B2%E0%B8%A2%E0%B9%84%E0%B8%AB%E0%B8%A5%E0%B9%88-%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%9B%E0%B9%8B%E0%B8%B2%E0%B8%96%E0%B8%B7%E0%B8%AD-%E0%B8%9C%E0%B9%89%E0%B8%B2%E0%B9%81%E0%B8%84%E0%B8%99%E0%B8%A7%E0%B8%B2%E0%B8%AA-%E0%B8%A5%E0%B8%B2%E0%B8%A2%E0%B8%95%E0%B8%B1%E0%B8%A7%E0%B8%AD%E0%B8%B1%E0%B8%81%E0%B8%A9%E0%B8%A3-%E0%B8%AA%E0%B9%84%E0%B8%95%E0%B8%A5%E0%B9%8C%E0%B8%A1%E0%B8%B4%E0%B8%99%E0%B8%B4%E0%B8%A1%E0%B8%AD%E0%B8%A5-%E0%B8%AA%E0%B9%8D%E0%B8%B2%E0%B8%AB%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%AA%E0%B8%95%E0%B8%A3%E0%B8%B5-%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B9%80%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%99-i.82607892.20240068659"
    let newwin = window.open(url)
}


let user = document.getElementById("User");
let pass = document.getElementById("Password");
console.log(user)
console.log(pass)

function Login() {
    let usernmae = user.value;
    let password = pass.value;
    

    if ( usernmae === "admin" && password === "admin") {
        console.log("เข้าสู่ระบบสำเร็จ")
        let age = "age.html"
        let newwin = window.open(age)
        
    }
    else {
         alert("รหัสผ่านไม่ถูกต้อง")   
    }
}


function Sigup() {
    let usernmae = user.value;
    let password = pass.value;
    

    if ( usernmae === "admin" && password === "admin") {
        console.log("เข้าสู่ระบบสำเร็จ")
        alert("สร้างบัญชีสำเร็จ")
        let age = "age.html"
        let newwin = window.open(age)
        
    }
    else {
         alert("กรอกข้อมูลให้ครบถ้วน")   
    }
}


function Nextsignup() {
    tologin();
}


function nexttoheight() {
    toheight();
}

function nexttosex() {
    tosex();
}

function nexttoprefermale(){
    toperfermale();
}

function nexttopreferfemale(){
    toperferfemale()
}

function nexttoalldone() {
    todone();
}

function nexttorecom() {
    tore();
}

function nexttowedding() {
    towedding()
}

function nexttosea() {
    tosearch();
}

function nexttoone_out(){
    toone_out();
}

function nexttoprofile() {
    toprofile();
}

function Nexttosetting() {
    tosetting();
}


function nexttodiscover() {
    todiscover();
}

function nexttomix(){
    tomix();
}

function nexttoadd() {
    toadd();
}


function Shop1(){
    toshirt();
}

function Shop2(){
    topants();
}

function Shop3(){
    totanktop();
}

function Shop4(){
    tobag();
}