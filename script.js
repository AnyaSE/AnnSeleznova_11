function changeVisability () {
    document.getElementById("dropdown__menu").classList.toggle("hide");
}

let block = document.getElementById('subheader__nav');
let close = document.getElementById('close');

console.log(subheader__nav);
console.log(close);

close.addEventListener('click', function () {
    subheader__nav.style.display = 'none';
});