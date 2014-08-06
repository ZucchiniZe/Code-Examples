'use strict';
var md = new MobileDetect(window.navigator.userAgent);

function injectMenu() {
  $.ajax({
    type:'GET',
    dataType: 'json',
    url:'scripts/min.json',
    success: function(d) {
      var vcimenu = d.menustrip.menu[0];
      var href = '["@href"]';
      var text = '["@text"]';
      $('.dropdown-menu').append(
        '<li><a href="' + vcimenu.menu[0]["@href"] + '">' + vcimenu.menu[0]["@text"] + '</a></li>' +
        '<li><a href="' + vcimenu.menu[1]["@href"] + '">' + vcimenu.menu[1]["@text"] + '</a></li>' +
        '<li><a href="' + vcimenu.menu[2]["@href"] + '">' + vcimenu.menu[2]["@text"] + '</a></li>' +
        '<li><a href="' + vcimenu.menu[3]["@href"] + '">' + vcimenu.menu[3]["@text"] + '</a></li>' +
        '<li><a href="' + vcimenu.menu[4]["@href"] + '">' + vcimenu.menu[4]["@text"] + '</a></li>' +
        '<li><a href="' + vcimenu.menu[5]["@href"] + '">' + vcimenu.menu[5]["@text"] + '</a></li>' +
        '<li><a href="' + vcimenu.menu[6]["@href"] + '">' + vcimenu.menu[6]["@text"] + '</a></li>' +
        '<li><a href="' + vcimenu.menu[7]["@href"] + '">' + vcimenu.menu[7]["@text"] + '</a></li>' +
        '<li class="dropdown-menu"></li>' +
        '<ul class="dropdown-submenu">' +
          '<li><a href="#">IM NESTED</a></li>' +
        '</ul>'
      );
      $('#jsonInject').append(
        '<li>' + d.menustrip.menu[0]["@text"] + '</li>' +
        '<ul>' +
          '<li><a href="' + vcimenu.menu[0]["@href"] + '">' + vcimenu.menu[0]["@text"] + '</a></li>' +
          '<li><a href="' + vcimenu.menu[1]["@href"] + '">' + vcimenu.menu[1]["@text"] + '</a></li>' +
          '<li><a href="' + vcimenu.menu[2]["@href"] + '">' + vcimenu.menu[2]["@text"] + '</a></li>' +
          '<li><a href="' + vcimenu.menu[3]["@href"] + '">' + vcimenu.menu[3]["@text"] + '</a></li>' +
          '<li><a href="' + vcimenu.menu[4]["@href"] + '">' + vcimenu.menu[4]["@text"] + '</a></li>' +
          '<li><a href="' + vcimenu.menu[5]["@href"] + '">' + vcimenu.menu[5]["@text"] + '</a></li>' +
          '<li><a href="' + vcimenu.menu[6]["@href"] + '">' + vcimenu.menu[6]["@text"] + '</a></li>' +
          '<ul>' +
            '<li><a href="' + vcimenu.menu[6].menu[0]["@href"] + '">' + vcimenu.menu[6].menu[0]["@text"] + '</li>' +
            '<li><a href="' + vcimenu.menu[6].menu[1]["@href"] + '">' + vcimenu.menu[6].menu[1]["@text"] + '</li>' +
          '</ul>' +
          '<li><a href="' + vcimenu.menu[7]["@href"] + '">' + vcimenu.menu[7]["@text"] + '</a></li>' +
          '<ul>' +
            '<li><a href="' + vcimenu.menu[7].menu[0]["@href"] + '">' + vcimenu.menu[7].menu[0]["@text"] + '</li>' +
            '<li><a href="' + vcimenu.menu[7].menu[1]["@href"] + '">' + vcimenu.menu[7].menu[1]["@text"] + '</li>' +
            '<li><a href="' + vcimenu.menu[7].menu[2]["@href"] + '">' + vcimenu.menu[7].menu[2]["@text"] + '</li>' +
            '<li><a href="' + vcimenu.menu[7].menu[3]["@href"] + '">' + vcimenu.menu[7].menu[3]["@text"] + '</li>' +
            '<li><a href="' + vcimenu.menu[7].menu[4]["@href"] + '">' + vcimenu.menu[7].menu[4]["@text"] + '</li>' +
            '<li><a href="' + vcimenu.menu[7].menu[5]["@href"] + '">' + vcimenu.menu[7].menu[5]["@text"] + '</li>' +
            '<li><a href="' + vcimenu.menu[7].menu[6]["@href"] + '">' + vcimenu.menu[7].menu[6]["@text"] + '</li>' +
            '<li><a href="' + vcimenu.menu[7].menu[7]["@href"] + '">' + vcimenu.menu[7].menu[7]["@text"] + '</li>' +
          '</ul>' +
        '</ul>' +
        '<li>' + d.menustrip.menu[1]["@text"] + '</li>' +
        '<ul>' +
          '<li><a href="' + d.menustrip.menu[1].menu[0]["@href"] + '">' + d.menustrip.menu[1].menu[0]["@text"] + '</li>' +
          '<li><a href="' + d.menustrip.menu[1].menu[1]["@href"] + '">' + d.menustrip.menu[1].menu[1]["@text"] + '</li>' +
          '<li><a href="' + d.menustrip.menu[1].menu[2]["@href"] + '">' + d.menustrip.menu[1].menu[2]["@text"] + '</li>' +
          '<li><a href="' + d.menustrip.menu[1].menu[3]["@href"] + '">' + d.menustrip.menu[1].menu[3]["@text"] + '</li>' +
          '<li><a href="' + d.menustrip.menu[1].menu[4]["@href"] + '">' + d.menustrip.menu[1].menu[4]["@text"] + '</li>' +
          '<li><a href="' + d.menustrip.menu[1].menu[5]["@href"] + '">' + d.menustrip.menu[1].menu[5]["@text"] + '</li>' +
          '<li><a href="' + d.menustrip.menu[1].menu[6]["@href"] + '">' + d.menustrip.menu[1].menu[6]["@text"] + '</li>' +
        '</ul>' +
        '<li>' + d.menustrip.menu[2]["@text"] + '</li>' +
        '<ul>' +
          '<li><a href="' + d.menustrip.menu[2].menu[0]["@href"] + '">' + d.menustrip.menu[2].menu[0]["@text"] + '</li>' +
          '<li><a href="' + d.menustrip.menu[2].menu[1]["@href"] + '">' + d.menustrip.menu[2].menu[1]["@text"] + '</li>' +
          '<li><a href="' + d.menustrip.menu[2].menu[2]["@href"] + '">' + d.menustrip.menu[2].menu[2]["@text"] + '</li>' +
        '</ul>' +
        '<li>' + d.menustrip.menu[3]["@text"] + '</li>'
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
  $('#isMobile').html('<h1>You are on a mobile Device</h1><p>using isMobile</p>');
} else {
  $('#isMobile').html('<h1>You are not on a mobile device</h1><p>using isMobile</p>');
}
