document.addEventListener("mousemove", function (e) {
    let body = document.querySelector('body');
    let star = document.createElement('span')

    let size = Math.random() * 40;
    let hue = Math.random() * 360;
    let transfromValue = Math.random() * 360;

    star.style.left = e.offsetX + 'px'
    star.style.top = e.offsetY + 'px'
    star.style.fontSize = 10 + size + 'px';
    star.style.filter = 'hue-rotate(' + hue + 'deg)'
    star.style.transfrom = 'rotate(' + transfromValue + 'deg)'

    body.appendChild(star);

    setTimeout(function () {
        star.remove();
    }, 1000)
})