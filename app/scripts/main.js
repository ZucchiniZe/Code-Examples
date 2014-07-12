'use strict';

function injectMenu() {
  $.ajax({
    type:'GET',
    dataType: 'json',
    url:'scripts/data.json',
    success: function(data) {
      console.log('hello! c:');
      console.log(data);
      $('#jsonInject').append(
        '<p>' + data.menustrip.key + '</p>'
      );
    },
    error: function(error, error1, error2) {
      console.log(error);
      console.log(error1);
      console.log(error2);
    }
  });
}

$(document).ready(function(){
  injectMenu();
});

function playSound() {
  document.getElementById('laser').play();
}

// var doc = document.documentElement;
//
// doc.ondragover = function () {
//   this.className = 'hover';
//   return false;
// };
//
// doc.ondragend = function () {
//   this.className = '';
//   return false;
// }
//
// doc.ondrop = functon (event) {
//   event.preventDefault && even.preventDefault();
//   this.className = '';
//
//   var files = event.dataTransfer.files;
//
//   return false;
// }
//
// var dndSupported = function () {
//   var div = document.createElement('div');
//   return ('draggable' in div) || ('ondragstart' in div && 'ondrop' in div);
// }
//
// if (!dndSupported()) {
//   document.getElementById('upload').onchange = function (event) {
//   var files = this.files;
//   }
// }
//
// var formData = new FormData();
// for (var i = 0; i < files.length; i++) {
//   formData.append('file', files[i]);
// }
//
// var xhr = new XMLHttpRequest();
// xhr.open('POST', '/upload');
// xhr.onload = functiob () {
//   if (xhr.status === 200) {
//     console.log('all done: ' + xhr.status);
//   } else {
//     console.log('Something screwed up mang')
//   }
// }
//
// xhr.send(formData);
