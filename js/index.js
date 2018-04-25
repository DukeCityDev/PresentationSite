let elem = document.querySelector('.carousel');
let instance = M.Carousel.init(elem);




//PARTICLES JS
/* ---- particles.js config ---- */

particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.6313181133058181,
            "width": 1.4
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": false,
                "mode": "repulse"
            },
            "onclick": {
                "enable": false,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});

particlesJS("particles-js2", {
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.6313181133058181,
            "width": 1.4
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": false,
                "mode": "repulse"
            },
            "onclick": {
                "enable": false,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});

function getOffset(el) {
    el = el.getBoundingClientRect();
    return {
        left: el.left + window.scrollX,
        top: el.top + window.scrollY
    }
}

let initializeScroll = (scrollElement)=>{
    let scrollElementFinal = document.getElementById(scrollElement);
    let {top} = getOffset(scrollElementFinal);
    console.log(top);
    scrollTo(top);
};


let scrollTo = (x)=>{window.scroll({
    top: x,
    left: 0,
    behavior: 'smooth'
});};

let slideShowFunction = (clicks)=>{
    if(clicks === 1){
        initializeScroll("tech-description");
    } else if (clicks === 2){
        $(".desc-1").css("opacity",1);
    } else if (clicks === 3){
        $(".desc-2").css("opacity",1);
    } else if (clicks === 4){
        initializeScroll("means-section");
    }else if (clicks === 5){
        $("#means-text").fadeOut(800);
        setTimeout(
            function(){
                $("#means-text").text("It changes for reason 1");
                $("#means-text").fadeIn(800);
            },
            800);
    } else if (clicks === 6){
        $("#means-text").fadeOut(800);
        setTimeout(
            function(){
                $("#means-text").text("It changes for reason 2");
                $("#means-text").fadeIn(800);
            },
            800);
    } else if (clicks === 7){
        $("#means-text").fadeOut(800);
        setTimeout(
            function(){
                $("#means-text").text("It changes for reason 3");
                $("#means-text").fadeIn(800);
            },
            800);
    } else if (clicks === 8){
        $("#means-text").fadeOut(800);
        setTimeout(
            function(){
                $("#means-text").text("It changes for reason 4");
                $("#means-text").fadeIn(800);
            },
            800);
    } else if(clicks === 9){
        initializeScroll("laser-market");
        let table = document.getElementById("market-table");
        let marketText = document.getElementById("market-text");
        marketText.style.opacity = 1;
        table.style.opacity = 1;
    } else if(clicks === 10){
        initializeScroll("business-model-section");
    } else if (clicks === 11){
        $("#business-model-text").fadeOut(800);
        setTimeout(
            function(){
                $("#business-model-text").text("Biz Model Text 2");
                $("#business-model-text").fadeIn(800);
            },
            800);
    } else if (clicks === 12){
        $("#business-model-text").fadeOut(800);
        setTimeout(
            function(){
                $("#business-model-text").text("Biz Model Text 3");
                $("#business-model-text").fadeIn(800);
            },
            800);
    } else if (clicks === 13){
        $("#business-model-text").fadeOut(800);
        setTimeout(
            function(){
                $("#business-model-text").text("Biz Model Text 4");
                $("#business-model-text").fadeIn(800);
            },
            800);
    } else if (clicks === 14) {
        $("#business-model-text").fadeOut(800);
        setTimeout(
            function () {
                $("#business-model-text").text("Biz Model Text 5");
                $("#business-model-text").fadeIn(800);
            },
            800);
    } else if (clicks === 15){
        initializeScroll("target-business");
    } else if (clicks === 16){
        instance.next();
    } else if (clicks === 17){
        instance.next();
    } else if (clicks === 18){
        instance.next();
    } else if(clicks === 19){
        initializeScroll("particles-js2");
    }
};

let slideShow = ()=>{
    let clicks = 0;
   $(window).click((event)=>{
        clicks++;
        slideShowFunction(clicks);
    });
};

slideShow();