
document.addEventListener("DOMContentLoaded", () =>{
    Tester();
    NavigatorF();
    RandomMovie();
    AutoSlide();
});

window.addEventListener("scroll", ()=> {
    let ScrollBTN = document.querySelector('.scrolbtn');
    let Distance = document.documentElement.scrollTop;
    if (Distance>750) {
        ScrollBTN.classList.add('visible');
    } else {
        ScrollBTN.classList.remove('visible');
    }
});

let menubtn = document.querySelector('.btn-menu');
menubtn.addEventListener("click", () => {
    let Navlist= document.querySelector('.navlist');
    Navlist.classList.toggle('active');})

let buttom = document.querySelector('.button');
buttom.addEventListener("click", () => {
    let data = prompt("Introduzca el dato a medir");
    if (data === null) {
        alert("No has insertado valor a medir");
        console.error("No has insertado valor a medir");
    }
    let value = document.querySelector('.value');
    value.value = data.length;
} )

let form = document.querySelector(".formbtn");
form.addEventListener("click", () => {
    let $formmodel = document.querySelector(".formmodel");
    $formmodel.classList.toggle("hide");
});

/* -----------------------   Section #0 ( Automatic Slider )   ------------------------------------------------- */

function AutoSlide () {
    let $SlideImg = document.querySelectorAll(".slider");
    let $SlideBtn = document.querySelectorAll(".slidemarker");
    let i = 0;

    setInterval(()=>{
        $SlideImg[i].classList.remove("active");
        $SlideBtn[i].classList.remove("active");
        i++;
        if (i >= $SlideImg.length) {
            i = 0;
        }
        $SlideImg[i].classList.add("active");
        $SlideBtn[i].classList.add("active");
    },10000);
};


/* -----------------------   Section #1   ------------------------------------------------- */

/* Funcion para calcular la diferencia de dias entre dos fechas */

    let Calculador = document.getElementById('calculator');
    
    Calculador.onclick = () => {
        let f1 = document.querySelector('.date1').value;
        let f2 = document.querySelector('.date2').value;

        let F1 = f1.toString();
        let F2 = f2.toString();

        let Fecha1 = new Date(F1);
        let Fecha2 = new Date(F2);

        const Dater = (Date1,Date2) => {
            let D1 = Date1.getTime();
            let D2 = Date2.getTime();
            let divider = 1000*60*60*24
            let operator = (D1-D2)/divider;
            if (operator < 0) {
                return alert(`Falta ${Math.abs(operator)} dias para la fecha seleccionada`),
                console.log(`Falta ${Math.abs(operator)} dias para la fecha seleccionada`);   
            }else if (operator === 0) {
                return alert(`No existe diferencia entre las fechas seleccionadas`),
                console.log(`No existe diferencia entre las fechas seleccionadas`);  
            }else {
                return alert(`Ha pasado ${operator} dias entre las fechas seleccionadas`),
                console.log(`Ha pasado ${operator} dias entre las fechas seleccionadas`);   
            }
        }
        Dater(Fecha1,Fecha2);
    }

/* ------------------------------------------------------------------------ */

/* Funcion para calcular contar vocales y consonantes */

let Medidor = document.getElementById('medir');
    
Medidor.onclick = () => {
    let Cadena = document.getElementById('cadena').value.toString().toLowerCase();
    let inputv = document.getElementById('Vocales');
    let inputc = document.getElementById('Consonantes');
    let Vocales = 0;
    let Consonantes = 0;
    let Numeros = 0;
        
    if (Cadena == "") {
        return console.log("No has introducido datos a medir"),alert("No has introducido datos a medir");
    } 
    
    for (let letra of Cadena) {
        if (/[1234567890]/.test(letra)) {
            Numeros++;
        } if (/[aeiou]/.test(letra)) {
            Vocales++;
        } if (/[bcdfghjklmnñpqrstvwxyz]/.test(letra)) {
            Consonantes++;
        }
    } return console.log(`La cadena de texto introducida contiene ${Vocales} vocales, ${Consonantes} consonantes y ${Numeros} numeros`),
    inputv.value = Vocales,
    inputc.value = Consonantes;
}

/* -----------------------   Section #2   ------------------------------------------------- */

/* Funcion para encender alarma */

let AlarmOn = document.querySelector('.turn-on');
let AudioOn = document.querySelector('div audio');
let Alarmlop;
AlarmOn.addEventListener('click', ()=> {
    Alarmlop = setInterval(()=>{
        AudioOn.play();
        Speaker = document.querySelector('.Bullhorn');
        Speaker.classList.toggle('Eneable');
    },1000);    
});


let AlarmOff = document.querySelector('.turn-off');
AlarmOff.addEventListener('click', ()=>{
    clearInterval(Alarmlop);
});

/* Funcion para activar reloj en pantalla */

let ClockOn = document.querySelector('.control_on');
let ClockTimer;

ClockOn.addEventListener("click", () => {  
    ClockTimer = setInterval( ()=> {
        let Watch = new Date().toLocaleTimeString();
        let ClockLetters = document.querySelector('.localtime');
        ClockLetters.textContent = Watch;
    }, 1000);
    ClockOn.disabled = true;
});

let ClockOff = document.querySelector('.control_off');

ClockOff.addEventListener('click', ()=> {
    clearInterval(ClockTimer);
    let ClockLetters = document.querySelector('.localtime');
        ClockLetters.textContent = '00-00-00';
});


/* -----------------------   Section #3   ------------------------------------------------- */
let Dom = document;
let $Ball = document.querySelector('.crazyball');
let $Stage = document.querySelector('.stage');

let X = 0;
let Y = 0;


Dom.addEventListener("keydown", (e)=> {
    function moveBall (Event,Ball,Stage) {
        let BCBall = $Ball.getBoundingClientRect();
        let BCStage = $Stage.getBoundingClientRect();
            switch (Event.keyCode) {
            case 37:
                Event.preventDefault();
                if (BCBall.left > BCStage.left) X--;   
                break;
            case 38:
                Event.preventDefault();
                if (BCBall.top > BCStage.top) Y--;                
                break;
            case 39:
                Event.preventDefault();
                if (BCBall.right < BCStage.right) X++;                
                break;
            case 40:
                Event.preventDefault();
                if (BCBall.bottom < BCStage.bottom) Y++;                
                break;
            default:
                break;
            } 
            Ball.style.transform = `translate(${X*10}px,${10*Y}px)`;
    } 
    moveBall(e ,$Ball,$Stage ); 
});

/* -----------------------   Section #4   ------------------------------------------------- */
let Origin = document.querySelector('.calendarcon');
let StopUpdate = document.querySelector('.Reset');

let Days = document.querySelector('.rdays');
let Hours = document.querySelector('.rhours');
let Minutes = document.querySelector('.rminutes');
let Seconds = document.querySelector('.rseconds');

let UCStopper;
    let MSSeconds = 1000;
    let MSMinutes = MSSeconds*60;
    let MSHours = MSMinutes*60;
    let MSDays = MSHours*24;
    
    let Stardate;

Origin.addEventListener('click', ()=>{  
    
    Stardate = document.querySelector(".finaldate").value;
    let StardateTS = new Date(Stardate.toString());

    UCStopper = setInterval(() => {
        let Present = new Date();
        let difference = StardateTS-Present; 

        let RDays = Math.floor(difference/MSDays);
        let RHours = new Date(difference).getHours();
        let RMinutes = new Date(difference).getMinutes();
        let RSeconds = new Date(difference).getSeconds();

        if (Present > 0 && StardateTS > 0 && difference > 0) {
            let Remain = document.querySelector('.remain');

            Remain.innerHTML = `<div class="rdays"><h3>${RDays} days</h3></div>
                                <div class="rhours"><h3>${RHours} hours</h3></div>
                                <div class="rminutes"><h3>${RMinutes} minutes </h3></div>
                                <div class="rseconds"><h3>${RSeconds} seconds</h3></div>`
        }
    },1000);     

    StopUpdate.addEventListener('click', ()=> {   
        clearInterval(UCStopper);
        let Clear = document.getElementById('calendar');
        Clear.value = "";
        let Remain = document.querySelector('.remain');
        Remain.innerHTML = `
                            <div class="rdays"><h3>Days</h3></div>
                            <div class="rhours"><h3>Hours</h3></div>
                            <div class="rminutes"><h3>Minutes</h3></div>
                            <div class="rseconds"><h3>Seconds</h3></div> `
    });
});


/* -----------------------   Section #5   ------------------------------------------------- */

function Tester() {
    let formbox = document.getElementById("formtester");
    let formlink = document.getElementById("link");
    let formWheigth = document.getElementById("Wheigth");
    let formWwidth = document.getElementById("Wwidth");
    let formWopen = document.getElementById("Wopen");
    let formWclose = document.getElementById("Wclose");
    let newwindow;

    formWopen.addEventListener("click", (e)=> {
        e.preventDefault();
        formbox.preventDefault;
        console.log("lokol");
        newwindow = window.open(formlink.value, "tester", `innerHeight = ${formWheigth.value}, innerWidth = ${formWwidth.value}`,);
    });

    formWclose.addEventListener("click", (e)=>{
        e.preventDefault();
        formbox.preventDefault;
        newwindow.close();
    });
}; 

/* -----------------------   Section #6   ------------------------------------------------- */

function NavigatorF() {
    let d= document,
        n= navigator,
        ua= n.userAgent;

    let cell = {android: ()=> ua.match(/android/i),
                ios: ()=> ua.match(/iphone│ipad│ipod/i),
                windows: ()=> ua.match(/windows phone/i),
                any: function() {
                    return this.android() || this.ios() || this.windows(); 
                }
    };
    
    let pc = {linux: ()=> ua.match(/linux/i),
              mac: ()=> ua.match(/mac os/i),
              windows: ()=> ua.match(/windows nt/i),
              any: function() {
               return this.linux() || this.mac() || this.windows(); 
            }
    };

    let browser = {chrome: ()=> ua.match(/chrome/i),
                   safari: ()=> ua.match(/safari/i),
                   firefox: ()=> ua.match(/firefox/i),
                   opera: ()=> ua.match(/opera|opera mini/i),
                   edge: ()=> ua.match(/edge/i),
                   ie: ()=> ua.match(/msie|iemobile/i),
                   any: function() {
                    return(this.chrome() ||
                           this.safari() ||
                           this.firefox() ||
                           this.opera() ||
                           this.edge() || 
                           this.ie() )                          
                }        
    };
    
    let $Infset = document.querySelector(".pieces");
    $Infset.innerHTML = `
                        <div class="piecepar">Device</div>
                        <div class="piecenone">${cell.any()? "Mobile" : "Desktop"}</div>
                        <div class="piecepar">Plataform</div>
                        <div class="piecenone">${cell.any()? cell.any(): pc.any()}</div>
                        <div class="piecepar">Navigator</div>
                        <div class="piecenone">${browser.any()}</div>
                        `
};

function NetworkStatus () {
    let n= navigator;
    let $NWStatus = document.getElementById('NW');

    if (n.onLine) {
        $NWStatus.innerHTML = ` <p>Network Status</p>
                                <div class="onlinestatus">
                                    <p>You're currently ONLINE</p>
                                    <div class="nsonicon">
                                        <img src="Imgs/onlineicon.svg" alt="OnlineIcon" class="onlineicon">
                                    </div>
                                </div>`
    } else {
        $NWStatus.innerHTML =  `<p>Network Status</p>                
                                <div class="offlinestatus">
                                    <p>You're currently OFFLINE</p>
                                    <div class="nsofficon">
                                        <img src="Imgs/offlineicon.svg" alt="OfflineIcon" class="offlineicon">
                                    </div>
                                </div>`
    }
};

NetworkStatus ()

function Getgeo() {
    let n = navigator;

    let success = (position)=> {
        let coorde = position.coords;
        let Longitude = coorde.longitude;
        let Latitude = coorde.latitude;
        
        function generarMapa(latitud, longitud) {
            return `<img src="https://maps.googleapis.com/maps/api/staticmap?center=${latitud},${longitud}&zoom=15&size=100x100" alt="Mapa de Google">`;};

        let $geoinfo = document.querySelector('.geoinfo'); 
            $geoinfo.innerHTML = `
                                  <div class="geodata">
                                    <div class="longi">
                                        <h4>Longitude</h4>
                                        <h3>${Longitude}</h3>
                                    </div>
                                    <div class="latit">
                                        <h4>Latitude</h4>
                                        <h3>${Latitude}</h3>
                                    </div>
                                    <div class="accur">
                                        <h4>Accuracy</h4>
                                        <h3>${coorde.accuracy}</h3>
                                    </div>
                                    </div>
                                    <div class="gmap">
                                        <div>${generarMapa(Latitude,Longitude)}</div>
                                    </div>`   
    }; 

    let error = (err)=> {
        let $geoinfo = document.querySelector('.geoinfo');
            $geoinfo.innerHTML = `
                                 <h4> There have been an Error type: ${err.code}</h4>
                                 <h3>${err.message}</h3>`        
    } 

    let options = {
        enableHighAccuracy:true,
        timeout:5000,
        maximunAge:0
    };

    n.geolocation.getCurrentPosition(success,error,options);
}

Getgeo();

/* -----------------------   Section #7   ------------------------------------------------- */

    const galeria = document.querySelector(".moviescontainer");
    const ruta = 'Imgs/Sorteo de películas/';
    const Fotos = ["Arrival.jpg","Avatar The Way of water.jpg","Dune 2.jpg","Everything Everywhere All at Once.jpg","Forrest Gump.jpg","Galdiator.jpg","Gone Girl.jpg","Green Book.jpg","Killers of the Flower Moon.jpg","La la land.jpg","Napoleon.jpg","Oppenheimer.jpg","Parasite.jpg","Past lives.jpg","Pirates of the Caribbean.jpg","Poor things.jpg","Predestination.jpg","Saving private Ryan.jpg","Shawshank Redemption.jpg","Spotlight.jpg","The Curious Case of Benjamin Buttom.jpg","The Godfather.jpg","The Silence of the Lambs.jpg"];

    Fotos.forEach(Foto=>{
        const foto = document.createElement("img");
        foto.src = ruta + Foto;
        foto.classList.add("movie-item");
        galeria.appendChild(foto);
    });


function RandomMovie () {
    let $Poster = document.querySelector(".Poster");
    let $SugesstionBtn = document.getElementById('Sugesstion');
    let $DivImg = document.querySelector(".divimg");
    let $MovieName = document.querySelector(".moviename");
    let $Movies = document.querySelectorAll(".movie-item");
    let RandomPick = Math.floor(Math.random()*$Movies.length);
    let Sugested = $Movies[RandomPick];
    let $CloseBtn = document.querySelector(".closeposter");

        $SugesstionBtn.addEventListener("click", ()=> {
            $Poster.classList.add('PosterVisible');
            $DivImg.appendChild(Sugested);
            $MovieName.innerText = Fotos[RandomPick].substring(0,((Fotos[RandomPick].length)-4));
        });

        $CloseBtn.addEventListener("click", ()=>{
            $Poster.classList.remove('PosterVisible');
            location.reload();
        });
};




/* Funcion para invertir una cadena de texto
const Cadena = (cadena = "") => 
(!cadena)
    ? console.warn("No has introducido una cadena de texto")
    : console.info(cadena.split("").reverse().join(""));

Cadena("que has hecho con toda la cadena");
*/

/* ------------------------------------------------------------------------ */

/* Funcion para contar la cantidad de veces que se repite una palabra en una cadena de texto

const countword = (cadena = "", palabra = "") => {
    if (!cadena) return console.warn("No ingresaste un texto adecuado");
    if (!palabra) return console.warn("No ingresaste la palabra a buscar");
    
    let i=0,
        contador=0;

    while (i !== -1 ) {
        i = cadena.indexOf(palabra,i);
        if (i !== -1) {
            i++;
            contador++;
        }
    }
    return console.info(`La palabra ${palabra} se repite ${contador} veces en la cadena dada`)
}

countword("hola mundo adios mundo","mundo"); */

/* ------------------------------------------------------------------------ */


/* Funcion para validar si n numero es primo

const primo = (numero=undefined) => {
    if (numero === undefined) {
        return console.warn("No has ingresado un numero");
    }if (typeof numero !== "number") {
        return console.warn("El valor insertado no es un numero");
    }if (numero <= 1) {
        return console.warn("El numero debe ser mayor que uno");
    }

    let divisible = false;

    for (let i = 2; i < numero; i++) {
        if ((numero % i) === 0) {
            divisible = true;
            break;
        }        
    }

    if (divisible == true) {
        console.error("El valor insertado no es un numero primo");
    } else {
        console.info(`El valor insertado ${numero} es un numero primo`);
    }
}

primo();
primo("a");
primo(-5);
primo(0);
primo(10);
primo(13);        */

/* ------------------------------------------------------------------------ */

/* Funcion para validar si n numero es par

const par = (numero=undefined) => {
    if (numero === undefined) {
        return console.warn("No has ingresado un numero");
    }if (typeof numero !== "number") {
        return console.warn("El valor insertado no es un numero");
    }

    let paridad = false;

        if ((numero % 2) === 0) {
            paridad = true;
        }        

    if (paridad == true) {
        console.info(`El valor insertado ${numero} es un numero par`);
    } else {
        console.error("El valor insertado es un numero impar");
    }
}

par();
par("a");
par(-5);
par(0);
par(10);
par(13);       */

/* ------------------------------------------------------------------------ */