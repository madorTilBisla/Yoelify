var audio1 = new Audio('sounds/1.ogg');
var audio2 = new Audio('sounds/2.ogg');
var audio3 = new Audio('sounds/3.ogg');
var audio4 = new Audio('sounds/4.ogg');
var audio5 = new Audio('sounds/5.ogg');
var audio6 = new Audio('sounds/6.ogg');
var audio7 = new Audio('sounds/7.ogg');
var audio8 = new Audio('sounds/8.ogg');
var audio9 = new Audio('sounds/9.ogg');
var audio10 = new Audio('sounds/10.ogg');
var audio11 = new Audio('sounds/11.ogg');
var audio12 = new Audio('sounds/12.ogg');
var audio13 = new Audio('sounds/13.ogg');
var audio14 = new Audio('sounds/14.ogg');
var audio15 = new Audio('sounds/15.ogg');
var audio16 = new Audio('sounds/16.ogg');
var audio17 = new Audio('sounds/17.ogg');
var audio18 = new Audio('sounds/18.ogg');
var audio19 = new Audio('sounds/19.ogg');
var audio20 = new Audio('sounds/20.ogg');
var audio21 = new Audio('sounds/21.ogg');
var audio22 = new Audio('sounds/22.ogg');
var audio23 = new Audio('sounds/23.ogg');
var audio24 = new Audio('sounds/24.ogg');

window.addEventListener("load", function() {
    document.getElementById("one").addEventListener("click",play);
    document.getElementById("two").addEventListener("click",play);
    document.getElementById("three").addEventListener("click",play);
    document.getElementById("four").addEventListener("click",play);
    document.getElementById("five").addEventListener("click",play);
    document.getElementById("six").addEventListener("click",play);
    document.getElementById("seven").addEventListener("click",play);
    document.getElementById("eight").addEventListener("click",play);
    document.getElementById("nine").addEventListener("click",play);
    document.getElementById("ten").addEventListener("click",play);
    document.getElementById("eleven").addEventListener("click",play);
    document.getElementById("twelve").addEventListener("click",play);
    document.getElementById("thirteen").addEventListener("click",play);
    document.getElementById("fourteen").addEventListener("click",play);
    document.getElementById("fiveteen").addEventListener("click",play);
    document.getElementById("sixteen").addEventListener("click",play);
    document.getElementById("seventeen").addEventListener("click",play);
    document.getElementById("eightteen").addEventListener("click",play);
    document.getElementById("nineteen").addEventListener("click",play);
    document.getElementById("twenty").addEventListener("click",play);
    document.getElementById("twentyone").addEventListener("click",play);
    document.getElementById("twentytwo").addEventListener("click",play);
    document.getElementById("twentythree").addEventListener("click",play);
    document.getElementById("twentyfour").addEventListener("click",play);

    document.getElementById("play").addEventListener("click", allPlay);
    document.getElementById("follow").addEventListener("click", follows);
});

function play(event) {
    stopSound();
    document.getElementById("pause1").addEventListener("click",stopSound)
    document.getElementById("pause2").addEventListener("click",stopSound)
    document.getElementById("pause3").addEventListener("click",stopSound)
    document.getElementById("pause4").addEventListener("click",stopSound)
    document.getElementById("pause5").addEventListener("click",stopSound)
    document.getElementById("pause6").addEventListener("click",stopSound)
    document.getElementById("pause7").addEventListener("click",stopSound)
    document.getElementById("pause8").addEventListener("click",stopSound)
    document.getElementById("pause9").addEventListener("click",stopSound)
    document.getElementById("pause10").addEventListener("click",stopSound)
    document.getElementById("pause11").addEventListener("click",stopSound)
    document.getElementById("pause12").addEventListener("click",stopSound)
    document.getElementById("pause13").addEventListener("click",stopSound)
    document.getElementById("pause14").addEventListener("click",stopSound)
    document.getElementById("pause15").addEventListener("click",stopSound)
    document.getElementById("pause16").addEventListener("click",stopSound)
    document.getElementById("pause17").addEventListener("click",stopSound)
    document.getElementById("pause18").addEventListener("click",stopSound)
    document.getElementById("pause19").addEventListener("click",stopSound)
    document.getElementById("pause20").addEventListener("click",stopSound)
    document.getElementById("pause21").addEventListener("click",stopSound)
    document.getElementById("pause22").addEventListener("click",stopSound)
    document.getElementById("pause23").addEventListener("click",stopSound)
    document.getElementById("pause24").addEventListener("click",stopSound)

    switch(event.target.id) {
        case "one":
            audio1.play();
            break;
        case "two":
            audio2.play();
            break;
        case "three":
            audio3.play();
            break;
        case "four":
            audio4.play();
            break;
        case "five":
            audio5.play();
            break;
        case "six":
            audio6.play();
            break;
        case "seven":
            audio7.play();
            break;
        case "eight":
            audio8.play();
            break;
        case "nine":
            audio9.play();
            break;
        case "ten":
            audio10.play();
            break;
        case "eleven":
            audio11.play();
            break;
        case "twelve":
            audio12.play();
            break;
        case "thirteen":
            audio13.play();
            break;
        case "fourteen":
            audio14.play();
            break;
        case "fiveteen":
            audio15.play();
            break;
        case "sixteen":
            audio16.play();
            break;
        case "seventeen":
            audio17.play();
            break;
        case "eightteen":
            audio18.play();
            break;
        case "nineteen":
            audio19.play();
            break;
        case "twenty":
            audio20.play();
            break;
        case "twentyone":
            audio21.play();
            break;
        case "twentytwo":
            audio22.play();
            break;
        case "twentythree":
            audio23.play();
            break;
        case "twentyfour":
            audio24.play();
            break;
        default:
            break;
    }
}

function stopSound() {
    document.getElementById("stop").style.visibility = "hidden";
    audio1.pause();
    audio2.pause();
    audio3.pause();
    audio4.pause();
    audio5.pause();
    audio6.pause();
    audio7.pause();
    audio8.pause();
    audio9.pause();
    audio10.pause();
    audio11.pause();
    audio12.pause();
    audio13.pause();
    audio14.pause();
    audio15.pause();
    audio16.pause();
    audio17.pause();
    audio18.pause();
    audio19.pause();
    audio20.pause();
    audio21.pause();
    audio22.pause();
    audio23.pause();
    audio24.pause();
}

function allPlay(event) {
    stopSound();
    document.getElementById("stop").style.visibility = "visible";
    document.getElementById("stop").addEventListener("click", stopSound);
    audio1.play(); 
    audio1.addEventListener('ended', function() {
        audio2.play(); 
        removeAudio();
        audio2.addEventListener('ended', function() {
            audio3.play();
            removeAudio();
            audio3.addEventListener('ended', function() {
                audio4.play();
                removeAudio();
                audio4.addEventListener('ended', function() {
                    audio5.play();
                    removeAudio();
                    audio5.addEventListener('ended', function() {
                        audio6.play();
                        removeAudio();
                        audio6.addEventListener('ended', function() {
                            audio7.play();
                            removeAudio();
                            audio7.addEventListener('ended', function() {
                                audio8.play();
                                removeAudio();
                                audio8.addEventListener('ended', function() {
                                    audio9.play();
                                    removeAudio();
                                    audio9.addEventListener('ended', function() {
                                        audio10.play();
                                        removeAudio();
                                        audio10.addEventListener('ended', function() {
                                            audio11.play();
                                            removeAudio();
                                            audio11.addEventListener('ended', function() {
                                                audio12.play();
                                                removeAudio();
                                                audio12.addEventListener('ended', function() {
                                                    audio13.play();
                                                    removeAudio();
                                                    audio13.addEventListener('ended', function() {
                                                        audio14.play();
                                                        removeAudio();
                                                        audio14.addEventListener('ended', function() {
                                                            audio15.play();
                                                            removeAudio();
                                                            audio15.addEventListener('ended', function() {
                                                                audio16.play();
                                                                removeAudio();
                                                                audio16.addEventListener('ended', function() {
                                                                    audio17.play();
                                                                    removeAudio();
                                                                    audio17.addEventListener('ended', function() {
                                                                        audio18.play();
                                                                        removeAudio();
                                                                        audio18.addEventListener('ended', function() {
                                                                            audio19.play();
                                                                            removeAudio();
                                                                            audio19.addEventListener('ended', function() {
                                                                                audio20.play();
                                                                                removeAudio();
                                                                                audio20.addEventListener('ended', function() {
                                                                                    audio21.play();
                                                                                    removeAudio();
                                                                                    audio21.addEventListener('ended', function() {
                                                                                        audio22.play();
                                                                                        removeAudio();
                                                                                        audio22.addEventListener('ended', function() {
                                                                                            audio23.play();
                                                                                            removeAudio();
                                                                                            audio23.addEventListener('ended', function() {
                                                                                                audio24.play();
                                                                                                removeAudio();
                                                                                            });
                                                                                        });
                                                                                    });
                                                                                });
                                                                            });
                                                                        });
                                                                    });
                                                                });
                                                            });
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
}



function removeAudio() {
    audio1.removeEventListener('ended', function() {
        audio2.play(); 
    });
    audio2.removeEventListener('ended', function() {
        audio3.play();
    });
    audio3.removeEventListener('ended', function() {
        audio4.play();
    });
    audio4.removeEventListener('ended', function() {
        audio5.play();
    });
    audio5.removeEventListener('ended', function() {
        audio6.play();
    });
    audio6.removeEventListener('ended', function() {
        audio7.play();
    });
    audio7.removeEventListener('ended', function() {
        audio8.play();
    });
    audio8.removeEventListener('ended', function() {
        audio9.play();
    });
    audio9.removeEventListener('ended', function() {
        audio10.play();
    });
    audio10.removeEventListener('ended', function() {
        audio11.play();
    });
    audio11.removeEventListener('ended', function() {
        audio12.play();
    });
    audio12.removeEventListener('ended', function() {
        audio13.play();
    });
    audio13.removeEventListener('ended', function() {
        audio14.play();
    });
    audio14.removeEventListener('ended', function() {
        audio15.play();
    });
    audio15.removeEventListener('ended', function() {
        audio16.play();
    });
    audio16.removeEventListener('ended', function() {
        audio17.play();
    });
    audio17.removeEventListener('ended', function() {
        audio18.play();
    });
    audio18.removeEventListener('ended', function() {
        audio19.play();
    });
    audio19.removeEventListener('ended', function() {
        audio20.play();
    });
    audio20.removeEventListener('ended', function() {
        audio21.play();
    });
    audio21.removeEventListener('ended', function() {
        audio22.play();
    });
    audio22.removeEventListener('ended', function() {
        audio23.play();
    });
    audio23.removeEventListener('ended', function() {
        audio24.play();
    });
}

function follows(event) {
    console.log(document.getElementById("follow").innerHTML );
    if (document.getElementById("follow").innerHTML === "במעקב") {
        document.getElementById("follow").innerHTML = "מעקב";
    } else if (document.getElementById("follow").innerHTML === "מעקב") {
        document.getElementById("follow").innerHTML = "במעקב";
    }
}