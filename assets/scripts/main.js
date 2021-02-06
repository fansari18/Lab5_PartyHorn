// main.js

// TODO
var vol = document.getElementById('volume-number');
var slider = document.getElementById('volume-slider');
var sound = document.getElementById('horn-sound');
var airhorn = document.getElementById('radio-air-horn');
var carhorn = document.getElementById('radio-car-horn');
var partyhorn = document.getElementById('radio-party-horn');
var honkbutton = document.getElementById('honk-btn');
var volbar = document.getElementById('volume-image');
var soundimage= document.getElementById('sound-image');


const input = document.querySelector('input');
vol.addEventListener('input', updateValue);

function updateValue(e) {
  slider.value = e.target.value;
  sound.volume=(e.target.value)/100;
 
}

slider.addEventListener('input', updateSlider);
function updateSlider(e) {
    e.preventDefault();

   vol.value = e.target.value; 
   sound.volume = (e.target.value)/100;

   if(vol.value == 0) {
    volbar.src= './assets/media/icons/volume-level-0.svg';
    console.log("leve0");
}
 else if( vol.value >= 1 &&  vol.value <=33 ) {
     volbar.src = './assets/media/icons/volume-level-1.svg';
     console.log("level1");
 }
 else if ( vol.value>=34 && vol.value <=66 ){
    volbar.src = './assets/media/icons/volume-level-2.svg';
    console.log("level2");
}
else{
    volbar.src = './assets/media/icons/volume-level-3.svg';
    console.log("level3");

}
 }




airhorn.addEventListener('change', updateAirRadio);
function updateAirRadio(e) {
    sound.setAttribute('src','./assets/media/audio/air-horn.mp3');
    soundimage.src = './assets/media/images/air-horn.svg';
    console.log("test");
}

carhorn.addEventListener('change', updateCarRadio);
function updateCarRadio(e) {
    sound.setAttribute('src','./assets/media/audio/car-horn.mp3');
    soundimage.src = './assets/media/images/car.svg';

    
}

partyhorn.addEventListener('change', updatePartyRadio);
function updatePartyRadio(e) {
    sound.setAttribute('src','./assets/media/audio/party-horn.mp3');
    soundimage.src = './assets/media/images/party-horn.svg';

    
}

honkbutton.addEventListener('click', honkSound);
function honkSound(e){
    e.preventDefault();
    if(vol.value == 0) {
        sound.muted= true;
    }
    else {
        sound.muted = false;
        sound.play();  
    }
}














