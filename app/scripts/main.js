'use strict';

function injectMenu() {
  $.ajax({
    type:'GET',
    dataType: 'json',
    url:'scripts/new.json',
    success: function(data) {
      console.log('hello! c:');
      console.log(data);
      var vcimenu = data.menustrip.menu[0];
      $('.dropdown-menu').append(
        '<li><a href="' + vcimenu.menu[0].href + '">' + vcimenu.menu[0].text + '</a></li>' +
        '<li><a href="' + vcimenu.menu[1].href + '">' + vcimenu.menu[1].text + '</a></li>' +
        '<li><a href="' + vcimenu.menu[2].href + '">' + vcimenu.menu[2].text + '</a></li>' +
        '<li><a href="' + vcimenu.menu[3].href + '">' + vcimenu.menu[3].text + '</a></li>' +
        '<li><a href="' + vcimenu.menu[4].href + '">' + vcimenu.menu[4].text + '</a></li>' +
        '<li><a href="' + vcimenu.menu[5].href + '">' + vcimenu.menu[5].text + '</a></li>' +
        '<li><a href="' + vcimenu.menu[6].href + '">' + vcimenu.menu[6].text + '</a></li>'
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
