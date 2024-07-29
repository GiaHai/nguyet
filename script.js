function chooseCo() {
    var slide1 = document.getElementById("slide1");
    var slide2 = document.getElementById("slide2");

    slide1.style.display = "none";
    slide2.style.display = "block";
}

function chooseKhong() {
    var khongButton = document.getElementById("khong");
    var notice = document.getElementById("notice");

    khongButton.style.display = "none";
    notice.textContent = "Em phải chọn có";
    notice.style.visibility = "visible";
}

function openLetter() {
    var letterText = document.getElementById("letter-text");
    letterText.style.display = "block";
}