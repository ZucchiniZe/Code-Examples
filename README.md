# Code Examples ![](http://img.shields.io/badge/docs-half-yellow.svg?style=flat)
These are the code examples for the projects I am working on

## Installing

To install the project do `npm install` for the nodejs modules and `bower install` for the web packages like jQuery and bootstrap

It expects that you have [nodejs](http://nodejs.org) installed

## Sound Example

For the sound I converted the sound to a wav file for better playback but mainly because the `<audio>` tag didnt want to accept it very well.
Then I put the audio file in the audio tag like so
```html
<audio id="laser" src="audio/laser.wav" preload="audio"></audio>
```
then I refreenced it in the javascript file with the function playSound, here is the code,
```javascript
function playSound() {
  document.getElementById('laser').play();
}
```
then I refrenced the function in the html code on the big button by putting `javascript:playSound();` in the href for the button so it calls
the function and plays the audio.

## Client Detection

```javascript
var isMobile = {
    Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
    BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
    iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
    Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
    Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
    any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
}

if( isMobile.any() ) {
  $('#isMobile').html('<h1>You are on a mobile Device</h1>');
} else {
  $('#isMobile').html('<h1>You are not on a mobile device</h1>');
}
```
For the client detection what we do is try and find out the clients useragent and cross checks it with; android, blackberry, iOS, opera, and windows phone.
The variable is isMobile, isMobile.any checks all of them and isMobile.<useragent> is just the <useragent>

## Soloutions

![](http://img.shields.io/badge/drag%20and%20drop-half-yellow.svg?style=flat)

Create a code example showing how to use capabilities of new browsers to
drag and drop a file for upload.
soloution: http://www.dropzonejs.com/

![](http://img.shields.io/badge/sound-complete-green.svg?style=flat)

Create a code example showing how to play a sound file without a plug-in.
soloution: http://www.storiesinflight.com/html5/audio.html

![](http://img.shields.io/badge/JSON%20Menu-complete-green.svg?style=flat)

Parse provided JSON and create a desktop and tablet friendly menu using Javascript.
soloution: http://alexb.ninja/wcup/scripts/main.js function showTeams()

![](http://img.shields.io/badge/Client%20Detection-complete-green.svg?style=flat)

Create a code example that determines if the user has a touch screen (possible?).
half soloution: http://modernizr.com/
