//====== Основной script ======//























//====== Код секундомера ======//


//Объявляем констаннты и переменные
const reload_btn = document.querySelector('.timer-buttons__reload');
const startstop_btn = document.querySelector('.timer-buttons__startstop');
const loop_btn = document.querySelector('.timer-buttons__loop');
const loopcontainer = document.querySelector('.timer-timelist-list');
const anim = document.querySelector('.anim');

let hour = 0;
let min = 0;
let sec = 0;
let msec = 0;
let init = false;
let t;


reload_btn.onclick = function () {

    ReloadTime();

};


startstop_btn.onclick = function () {

    startstop_btn.textContent = (startstop_btn.textContent == 'start') ? 'stop' : 'start';

    StartStop();

};


loop_btn.onclick = function () {

    LoopTime();

};


function StartTime() {



    //Запуск анимации

    anim.classList.remove("StopAnim");

    //Запуск анимации


    if (!init){
        clearInterval(t);
        anim.style.cssText = `animation-play-state: paused;`;
        return false;//для остановки тикера при нажатии кнопки stop/////
    } else{
        anim.style.cssText = `animation-play-state: running;`;
    }





    const timer = document.getElementById('timer');
    const mtimer = document.getElementById('mtimer');

    msec++;
    if (msec > 99) { //задаем числовые параметры, меняющиеся по ходу работы программы
        sec++;
        msec = msec - 100;
    }
    if (sec >= 60) {
        min++;
        sec = sec - 60;
    }
    if (min >= 60) {
        hour++;
        min = min - 60;
    }

    //Визуальное оформление

    if (msec < 10) {
        if (sec < 10) {
            if (min < 10) {
                if (hour < 10) {
                    timer.innerHTML = '0' + hour + ':0' + min + ':0' + sec;
                    mtimer.innerHTML = '.0' + msec;
                } else {
                    timer.innerHTML = hour + ':0' + min + ':0' + sec;
                    mtimer.innerHTML = '.0' + msec;
                }
            } else {
                if (hour < 10) {
                    timer.innerHTML = '0' + hour + ':' + min + ':0' + sec;
                    mtimer.innerHTML = '.0' + msec;
                } else {
                    timer.innerHTML = hour + ':' + min + ':0' + sec;
                    mtimer.innerHTML = '.0' + msec;
                }
            }
        } else {
            if (min < 10) {
                if (hour < 10) {
                    timer.innerHTML = '0' + hour + ':0' + min + ':' + sec;
                    mtimer.innerHTML = '.0' + msec;
                } else {
                    timer.innerHTML = hour + ':0' + min + ':' + sec;
                    mtimer.innerHTML = '.0' + msec;
                }
            } else {
                if (hour < 10) {
                    timer.innerHTML = '0' + hour + ':' + min + ':' + sec;
                    mtimer.innerHTML = '.0' + msec;
                } else {
                    timer.innerHTML = hour + ':' + min + ':' + sec;
                    mtimer.innerHTML = '.0' + msec;
                }
            }
        }
    } 
    else {
        if (sec < 10) {
            if (min < 10) {
                if (hour < 10) {
                    timer.innerHTML = '0' + hour + ':0' + min + ':0' + sec;
                    mtimer.innerHTML = '.' + msec;
                } else {
                    timer.innerHTML = hour + ':0' + min + ':0' + sec;
                    mtimer.innerHTML = '.' + msec;
                }
            } else {
                if (hour < 10) {
                    timer.innerHTML = '0' + hour + ':' + min + ':0' + sec;
                    mtimer.innerHTML = '.' + msec;
                } else {
                    timer.innerHTML = hour + ':' + min + ':0' + sec;
                    mtimer.innerHTML = '.' + msec;
                }
            }
        } else {
            if (min < 10) {
                if (hour < 10) {
                    timer.innerHTML = '0' + hour + ':0' + min + ':' + sec;
                    mtimer.innerHTML = '.' + msec;
                } else {
                    timer.innerHTML = hour + ':0' + min + ':' + sec;
                    mtimer.innerHTML = '.' + msec;
                }
            } else {
                if (hour < 10) {
                    timer.innerHTML = '0' + hour + ':' + min + ':' + sec;
                    mtimer.innerHTML = '.' + msec;
                } else {
                    timer.innerHTML = hour + ':' + min + ':' + sec;
                    mtimer.innerHTML = '.' + msec;
                }
            }
        }
    }

    //Визуальное оформление

}


function ClearClock(){

    hour = 0;
    min = 0;
    sec = 0;
    msec = 0;
    init = false;
    clearInterval(t);

    timer.innerHTML = '0' + hour + ':0' + min + ':0' + sec;
    mtimer.innerHTML = '.0' + msec;
}


function StopTime() {
    init = false;



    //timer.innerHTML = '0' + hour + ':0' + min + ':0' + sec;
    //mtimer.innerHTML = '.0' + msec;
}


function StartStop() {
    if (init == false) {
        //ClearСlock();
        init = true;
        t = setInterval(StartTime, 10);
        setInterval(changeTitle,10);
        //clearInterval(t);
    } else {
        init = false;
    }
}


function ReloadTime() {
    if (init == true) {
        return false;
    } else {
        loopcontainer.innerHTML = '';
        anim.classList.add("StopAnim");
        ClearClock();
    }
}


function LoopTime() {
    if (init == false) {
        return false;
    } else {
        addLoopItem();
    }
}


function addLoopItem() {

    let loopdiv = document.createElement('div');
    
    
    loopdiv.className = "timer-timelist-list__item";
    
    
    // loopdiv.innerHTML = timer.innerHTML + mtimer.innerHTML;

    loopdiv.innerHTML = "<span>" + timer.innerHTML + "</span><span class='lowercase'>" + mtimer.innerHTML + "</span>";
    
    
    loopcontainer.prepend(loopdiv);


    //loopcontainer.innerHTML = '';
}


//====== Код секундомера ======//















//====== Change tag <title> ======//


let title = document.querySelector("title");

function changeTitle(){
    //title.innerHTML = hour + ":" + min + ":" + sec + ":" + msec;


    if (msec < 10) {
        if (sec < 10) {
            if (min < 10) {
                if (hour < 10) {
                    title.innerHTML = '0' + hour + ':0' + min + ':0' + sec + '.0' + msec;
                } else {
                    title.innerHTML = hour + ':0' + min + ':0' + sec + '.0' + msec;
                }
            } else {
                if (hour < 10) {
                    title.innerHTML = '0' + hour + ':' + min + ':0' + sec + '.0' + msec;
                } else {
                    title.innerHTML = hour + ':' + min + ':0' + sec + '.0' + msec;
                }
            }
        } else {
            if (min < 10) {
                if (hour < 10) {
                    title.innerHTML = '0' + hour + ':0' + min + ':' + sec + '.0' + msec;

                } else {
                    title.innerHTML = hour + ':0' + min + ':' + sec + '.0' + msec;
                }
            } else {
                if (hour < 10) {
                    title.innerHTML = '0' + hour + ':' + min + ':' + sec + '.0' + msec;
                } else {
                    title.innerHTML = hour + ':' + min + ':' + sec + '.0' + msec;
                }
            }
        }
    }
    else {
        if (sec < 10) {
            if (min < 10) {
                if (hour < 10) {
                    title.innerHTML = '0' + hour + ':0' + min + ':0' + sec + '.' + msec;
                } else {
                    title.innerHTML = hour + ':0' + min + ':0' + sec + '.' + msec;
                }
            } else {
                if (hour < 10) {
                    title.innerHTML = '0' + hour + ':' + min + ':0' + sec + '.' + msec;
                } else {
                    title.innerHTML = hour + ':' + min + ':0' + sec + '.' + msec;
                }
            }
        } else {
            if (min < 10) {
                if (hour < 10) {
                    title.innerHTML = '0' + hour + ':0' + min + ':' + sec + '.' + msec;
                } else {
                    title.innerHTML = hour + ':0' + min + ':' + sec + '.' + msec;
                }
            } else {
                if (hour < 10) {
                    title.innerHTML = '0' + hour + ':' + min + ':' + sec + '.' + msec;
                } else {
                    title.innerHTML = hour + ':' + min + ':' + sec + '.' + msec;
                }
            }
        }
    }



}


//====== Change tag <title> ======//


















//====== Точки на часах ======//

c = document.querySelector('.clock');
let template = document.createElement('template');

setPunto();

function setPunto() {
    for (let i = 0; i < 360; i += 6) {//  Сместил цикл на 10 для правильного расставления точек
        generarPunto(i, "point");
        let bola = template.content.cloneNode(true);
        c.appendChild(bola);
    }
}



function generarPunto(grados, clase) {
    template.innerHTML = `
	<div class="${clase} point${grados}"></div>

	<style>
	.point${grados}{
		transform:rotate(${grados}deg);
	}
	</style>
	`
}

//====== Точки на часах ======//




















//====== Основной script ======//

















//---Анииация волны на кнопках---

var btnWave = document.getElementsByClassName("btn-wave"),
    forEach = Array.prototype.forEach;

forEach.call(btnWave, function (b) {
    b.addEventListener('click', addElement);
});

function addElement(e) {
    var addDiv = document.createElement("div"),
        mValue = Math.max(this.clientWidth, this.clientHeight),
        rect = this.getBoundingClientRect();
    sDiv = addDiv.style,
        px = 'px';

    sDiv.width = sDiv.height = mValue + px;
    sDiv.left = e.clientX - rect.left - (mValue / 2) + px;
    sDiv.top = e.clientY - rect.top - (mValue / 2) + px;

    addDiv.classList.add('pulse');
    this.appendChild(addDiv);
}

//---/Анииация волны на кнопках---







//======Адаптив часов через JS======


const clock = document.querySelector('.clock ');

timer.style.cssText = 'font-size: ' + clock.offsetWidth; +'px;';


//======/Адаптив часов через JS======