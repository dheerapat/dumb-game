const yesBtn = document.getElementById('yes');
const noBtn = document.getElementById('no');
const main = document.getElementById('main');
const ans = document.getElementById('reveal');

noBtn.onmouseover = function () {
    noBtn.style.visibility = 'hidden';
};

yesBtn.onclick = function () {
    ans.style.display = 'block';
    main.style.display = 'none';
    yesBtn.style.visibility = 'hidden';
    noBtn.style.visibility = 'hidden';
}