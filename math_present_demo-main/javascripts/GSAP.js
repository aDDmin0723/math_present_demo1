var slides = gsap.utils.toArray('.slide');
var editor = ace.edit("editor");
var Now_slides = 0, slides_num = gsap.utils.toArray('.slide').lenth;
var PreviewArea = document.getElementById('preview');
const modeSwitch = document.getElementById("mode-switch");
var localstorageFile = document.getElementById('localstorageFile');
var filechoose = document.getElementById('header');
modeSwitch.addEventListener("change", () => {
    if (modeSwitch.checked) {
        slides = gsap.utils.toArray('.slide');
        Now_slides = 0;
        slides_num = gsap.utils.toArray('.slide').length;
        gsap.set(slides, { opacity: 0, duration: 0.5 });
        gsap.set(slides, { height: 0, width: 0, duration: 0, autoAlpha: 0 });
        gsap.set(editor.container, { opacity: 0, duration: 0.5 });
        gsap.set(editor.container, { height: 0, width: 0, duration: 0, autoAlpha: 0 });
        gsap.set(slides[0], { height: 'auto', width: 'auto', duration: 0.5 });
        gsap.to(slides[0], { opacity: 1, x: '0%', autoAlpha: 1 });
        PreviewArea.scroll({ top: 0 });
        PreviewArea.style.overflow = 'auto';
        document.documentElement.requestFullscreen(); // 將整個文件放大到全屏
        localstorageFile.style.display = 'none';
        filechoose.style.display = 'none';

    } else {
        gsap.set(slides, { height: 'auto', width: '100%', duration: 0.5 });
        gsap.set(slides, { opacity: 1, x: '0%', autoAlpha: 1 });
        gsap.set(editor.container, { height: 'auto', width: '100%', duration: 0.5 });
        gsap.set(editor.container, { opacity: 1, x: '0%', autoAlpha: 1 });
        PreviewArea.style.overflow = 'auto';
        setTimeout(() => {
            document.exitFullscreen();
        }, 100);
    }
});

document.addEventListener('fullscreenchange', function (event) {
    if (!document.fullscreenElement) {
        var checkbox = document.getElementById('mode-switch');
        checkbox.checked = false;
        gsap.set(slides, { height: 'auto', width: '100%', duration: 0.5 });
        gsap.set(slides, { opacity: 1, x: '0%', autoAlpha: 1 });
        gsap.set(editor.container, { height: 'auto', width: '100%', duration: 0.5 });
        gsap.set(editor.container, { opacity: 1, x: '0%', autoAlpha: 1 });
        PreviewArea.style.overflow = 'auto';
        localstorageFile.style.display = 'block';
        filechoose.style.display = 'block';
    }
});

lastButton.addEventListener("click", function () {
    if (Now_slides >= 1) {
        Now_slides = Now_slides - 1;
        showSlide(Now_slides);
    }
});

document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
        if (Now_slides >= 1) {
            Now_slides = Now_slides - 1;
            showSlide(Now_slides);
        }
    }
});

animateButton.addEventListener("click", function () {
    if (Now_slides < slides_num - 1) {
        Now_slides = Now_slides + 1;
        showSlide(Now_slides);
    }
});

document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowRight") {
        if (Now_slides < slides_num - 1) {
            Now_slides = Now_slides + 1;
            showSlide(Now_slides);
        }
    }
});

function showSlide(index) {

    gsap.set(slides, { opacity: 0, autoAlpha: 0 });
    gsap.set(slides, { height: 0, width: 0 });
    gsap.set(slides[index], {
        height: 'auto', width: 'auto', autoAlpha: 1
    });

    var animationType = slides[index].classList[1];
    switch (animationType) {
        case '1':
            gsap.set(slides[index], { opacity: 0, x: '-100%' });
            gsap.to(slides[index], { duration: 2, x: '0%', opacity: 1 });
            break;
        case '2':
            gsap.set(slides[index], { opacity: 0, y: '-100%', x: '0%' });
            gsap.to(slides[index], { duration: 2, y: '0%', x: '0%', opacity: 1 });
            break;
        case '3':
            gsap.set(slides[index], { opacity: 0, y: '100%', x: '0%' });
            gsap.to(slides[index], { duration: 2, y: '0%', x: '0%', opacity: 1 });
            break;
        default:
            gsap.set(slides[index], { opacity: 0, x: '-100%' });
            gsap.to(slides[index], { duration: 1, x: '0%', opacity: 1 });

    }

}


