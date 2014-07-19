# Code Examples
---

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

### Soloutions

[] Browser Drag and Drop

Create a code example showing how to use capabilities of new browsers to
drag and drop a file for upload.

soloution: http://www.dropzonejs.com/

[x] Browser Sound

Create a code example showing how to play a sound file without a plug-in.

soloution: http://www.storiesinflight.com/html5/audio.html

[] Menu JSON

Parse provided JSON and create a desktop and tablet friendly menu using Javascript.

soloution: http://alexb.ninja/wcup/scripts/main.js function showTeams()

[x]  Client Detection

Create a code example that determines if the user has a touch screen (possible?).

half soloution: http://modernizr.com/
