const urlList = [
    "https://www.avito.ru/",
    "https://my.itmo.ru/",
    "https://www.wikipedia.com"
];

let currentIndex = 0;
let intervalId = null;

function showPage(index) {
    document.getElementById('webFrame').src = urlList[index];
}

function showNextPage() {
    currentIndex = (currentIndex + 1) % urlList.length;
    showPage(currentIndex);
}

function showPrevPage() {
    currentIndex = (currentIndex - 1 + urlList.length) % urlList.length;
    showPage(currentIndex);
}

document.getElementById('nextButton').onclick = showNextPage;
document.getElementById('prevButton').onclick = showPrevPage;

document.getElementById('startButton').onclick = function() {
    const interval = parseInt(document.getElementById('intervalInput').value) * 1000; 
    if (isNaN(interval) || interval <= 0) {
        alert("Пожалуйста, введите корректный интервал.");
        return;
    }
    
    if (intervalId) clearInterval(intervalId);
    
    intervalId = setInterval(showNextPage, interval);
};

document.getElementById('stopButton').onclick = function() {
    clearInterval(intervalId);
    intervalId = null;
};

window.onload = function() {
    showPage(currentIndex);
};
