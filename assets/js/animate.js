var windowheight = window.innerHeight;
var revealpoint = 100;

window.addEventListener('scroll', reveal);
                   
function animateValue(id, start, end, duration) {
    if (start === end) return;
    var range = end - start;
    var current = start;
    var increment = end > start? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var obj = document.getElementById(id);
    var timer = setInterval(function() {
        current += increment;
        obj.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

function reveal(){
    var bottoms = document.querySelectorAll(".fade-bottom");

    for(var i = 0; i < bottoms.length; i++){

        var bottomTop = bottoms[i].getBoundingClientRect().top;

        if(bottomTop < windowheight - revealpoint){
            bottoms[i].classList.add('animate');
        }
    }

    var lefts = document.querySelectorAll(".fade-left");

    for(var i = 0; i < lefts.length; i++){

        var leftTop = lefts[i].getBoundingClientRect().top;

        if(leftTop < windowheight - revealpoint){
            lefts[i].classList.add('animate');
        }
    }

    var rights = document.querySelectorAll(".fade-right");

    for(var i = 0; i < rights.length; i++){

        var rightTop = rights[i].getBoundingClientRect().top;

        if(rightTop < windowheight - revealpoint){
            rights[i].classList.add('animate');
        }
    }

    var zooms = document.querySelectorAll(".zoom");

    for(var i = 0; i < zooms.length; i++){

        var zoomTop = zooms[i].getBoundingClientRect().top;

        if(zoomTop < windowheight - revealpoint){
            zooms[i].classList.add('animate');
        }
    }

    var opacity = document.querySelectorAll(".opacity");

    for(var i = 0; i < opacity.length; i++){

        var opacityTop = opacity[i].getBoundingClientRect().top;

        if(opacityTop < windowheight - revealpoint){
            opacity[i].classList.add('animate');
        }
    }

    var counts = document.querySelectorAll(".count");

    for(var i = 0; i < counts.length; i++){

        var countsTop = counts[i].getBoundingClientRect().top;

        if(countsTop < windowheight - revealpoint && counts[i].classList.contains("count-active") == false){
            counts[i].classList.add('count-animate');
            animateValue("value-first", 0, 15, 4000);
            animateValue("value-second", 0, 1700, 4000);
        }
    }
}