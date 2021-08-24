// CONFIG DATA 
const CONFIGDATA = {
    titleHeader: 'Cậu ơi đang buồn chuyện gì hả, thất tình ? Bạn bè ? Hay chuyện gia đình ?',
    descriptionHeader: 'Thật sự tớ không trong hoàn cảnh của cậu nên không hiểu cảm giác của cậu được </br> nhưng cậu chỉ cần nghĩ là những chuyện xảy ra đều có nguyên nhân của nó đó </br> Cậu cứ buồn cứ khóc ...nó chỉ là cậu đang sống đúng với cảm xúc của cậu thôi^^',
    descriptionHeader: 'Tớ hy vọng là cậu sẽ đọc được những lời này của tớ ngoài gia đình những người thân quen còn có cả tớ nữa </br>Tớ luôn ở đây lắng nghe cảm nhận cậu nè',
    buttonYes: 'Cảm ơn cậu tớ đã khá hơn rồi !',
    buttonNo: 'Hmm',
    titleModar: 'Đấy phải thế chứ, mạnh mẽ lên, không người này thì người kia thôi',
    descriptionModar: 'ba mẹ sinh ra cậu á đã là một điều rất đẹp đẽ trên thế giới này rồi, cậu phải thật vui vẻ mà sống, chứ buồn hoài đâu đươc đâu đúng hong:)))).</br> Ai cũng xứng đáng có được hạnh phúc cả và cậu cũng thế ',
    descriptionModar: 'Dù quen hay không quen nhưng tớ hi vọng chút xíu sự tích cực nhỏ nhoi này có thể giúp cậu tí gì đó </br>Nào buồn thì cứ mở ra coi nhaaaa. Luv u! ',
};





// Author: andyngojs
// Facebook: http://fb.com/dn279
// Join us: https://fb.com/groups/dobeeteam.community














// Không được thay đổi ở đây - Not to change
$(document).ready(function() {setTimeout(function() {$('.spinner').fadeOut();$('#preloader').delay(350).fadeOut('slow');$('body').delay(350).css({'overflow': 'visible'})}, 600)});

function start(data) {
    var btnYes = document.querySelector('.btn--yes');
    var btnNo = document.querySelector('.btn--no');
    var popup = document.querySelector('.modal');
    var overlay = document.querySelector('.modal__overlay');
    var btnClose = document.querySelector('.btn-close');
    var headerModar = document.querySelector('.heading-name');
    var desccriptionModar = document.querySelector('.message');

    window.onload = () => {
        document.querySelector('.music').play()
        document.querySelector('.music').volume = 2
    };
    window.onkeypress = (e) => {
        if (e.charCode === 32) {
            document.querySelector('.music').play();
        }
    };

    document.querySelector('.header').innerHTML = `
        <h1 class="header-name">
            ${data.titleHeader}
            <i class="ti-heart"></i>
        </h1>
        <p class="header-description">${data.descriptionHeader}
            <i class="ti-face-smile"></i>
        </p>`;
    btnYes.innerHTML = `<i class="ti-thumb-up"></i> ${data.buttonYes}`;
    btnNo.innerHTML =  ` <i class="ti-thumb-down"></i> ${data.buttonNo}`;
    headerModar.innerHTML = `${data.titleModar} <i class="ti-heart"></i>`;
    desccriptionModar.innerHTML = `${data.descriptionModar}`

    btnYes.onclick = () => {
        popup.classList.add('show');
    };
    btnClose.onclick = () => {
        popup.classList.remove('show');
    };

    overlay.onclick = () => {
        popup.classList.remove('show');
    };

    btnNo.onclick = () => {
        btnNo.style.top = 100 + "px";
        btnYes.style.top = 280 + "px";

    };

    btnNo.onmouseover = (e) => {
        var x = Math.random() * e.relatedTarget.clientHeight * 0.9;
        var y = Math.random() * e.relatedTarget.clientWidth * 0.9;
        btnNo.style.top = x + "px";
        btnNo.style.right = y + "px";
    };

};

start(CONFIGDATA);

