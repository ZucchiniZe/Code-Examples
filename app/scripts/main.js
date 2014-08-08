'use strict';
var md = new MobileDetect(window.navigator.userAgent);

function injectMenu() {
  $.ajax({
    type:'GET',
    dataType: 'json',
    url:'scripts/min.json',
    success: function(d) {
      $('#jsonInject').html(
        '<li>' + d.menustrip.menu[0]["@text"] + '</li>' +
        '<ol>' +
          '<li><a href="' + d.menustrip.menu[0].menu[0]["@href"] + '">' + d.menustrip.menu[0].menu[0]["@text"] + '</a></li>' +
          '<li><a href="' + d.menustrip.menu[0].menu[1]["@href"] + '">' + d.menustrip.menu[0].menu[1]["@text"] + '</a></li>' +
          '<li><a href="' + d.menustrip.menu[0].menu[2]["@href"] + '">' + d.menustrip.menu[0].menu[2]["@text"] + '</a></li>' +
          '<li><a href="' + d.menustrip.menu[0].menu[3]["@href"] + '">' + d.menustrip.menu[0].menu[3]["@text"] + '</a></li>' +
          '<li><a href="' + d.menustrip.menu[0].menu[4]["@href"] + '">' + d.menustrip.menu[0].menu[4]["@text"] + '</a></li>' +
          '<li><a href="' + d.menustrip.menu[0].menu[5]["@href"] + '">' + d.menustrip.menu[0].menu[5]["@text"] + '</a></li>' +
          '<li><a href="' + d.menustrip.menu[0].menu[6]["@href"] + '">' + d.menustrip.menu[0].menu[6]["@text"] + '</a></li>' +
          '<ol>' +
            '<li><a href="' + d.menustrip.menu[0].menu[6].menu[0]["@href"] + '">' + d.menustrip.menu[0].menu[6].menu[0]["@text"] + '</li>' +
            '<li><a href="' + d.menustrip.menu[0].menu[6].menu[1]["@href"] + '">' + d.menustrip.menu[0].menu[6].menu[1]["@text"] + '</li>' +
          '</ol>' +
          '<li><a href="' + d.menustrip.menu[0].menu[7]["@href"] + '">' + d.menustrip.menu[0].menu[7]["@text"] + '</a></li>' +
          '<ol>' +
            '<li><a href="' + d.menustrip.menu[0].menu[7].menu[0]["@href"] + '">' + d.menustrip.menu[0].menu[7].menu[0]["@text"] + '</li>' +
            '<li><a href="' + d.menustrip.menu[0].menu[7].menu[1]["@href"] + '">' + d.menustrip.menu[0].menu[7].menu[1]["@text"] + '</li>' +
            '<li><a href="' + d.menustrip.menu[0].menu[7].menu[2]["@href"] + '">' + d.menustrip.menu[0].menu[7].menu[2]["@text"] + '</li>' +
            '<li><a href="' + d.menustrip.menu[0].menu[7].menu[3]["@href"] + '">' + d.menustrip.menu[0].menu[7].menu[3]["@text"] + '</li>' +
            '<li><a href="' + d.menustrip.menu[0].menu[7].menu[4]["@href"] + '">' + d.menustrip.menu[0].menu[7].menu[4]["@text"] + '</li>' +
            '<li><a href="' + d.menustrip.menu[0].menu[7].menu[5]["@href"] + '">' + d.menustrip.menu[0].menu[7].menu[5]["@text"] + '</li>' +
            '<li><a href="' + d.menustrip.menu[0].menu[7].menu[6]["@href"] + '">' + d.menustrip.menu[0].menu[7].menu[6]["@text"] + '</li>' +
            '<li><a href="' + d.menustrip.menu[0].menu[7].menu[7]["@href"] + '">' + d.menustrip.menu[0].menu[7].menu[7]["@text"] + '</li>' +
          '</ol>' +
        '</ol>' +
        '<li>' + d.menustrip.menu[1]["@text"] + '</li>' +
        '<ol>' +
          '<li><a href="' + d.menustrip.menu[1].menu[0]["@href"] + '">' + d.menustrip.menu[1].menu[0]["@text"] + '</li>' +
          '<li><a href="' + d.menustrip.menu[1].menu[1]["@href"] + '">' + d.menustrip.menu[1].menu[1]["@text"] + '</li>' +
          '<li><a href="' + d.menustrip.menu[1].menu[2]["@href"] + '">' + d.menustrip.menu[1].menu[2]["@text"] + '</li>' +
          '<li><a href="' + d.menustrip.menu[1].menu[3]["@href"] + '">' + d.menustrip.menu[1].menu[3]["@text"] + '</li>' +
          '<li><a href="' + d.menustrip.menu[1].menu[4]["@href"] + '">' + d.menustrip.menu[1].menu[4]["@text"] + '</li>' +
          '<li><a href="' + d.menustrip.menu[1].menu[5]["@href"] + '">' + d.menustrip.menu[1].menu[5]["@text"] + '</li>' +
          '<li><a href="' + d.menustrip.menu[1].menu[6]["@href"] + '">' + d.menustrip.menu[1].menu[6]["@text"] + '</li>' +
        '</ol>' +
        '<li>' + d.menustrip.menu[2]["@text"] + '</li>' +
        '<ol>' +
          '<li><a href="' + d.menustrip.menu[2].menu[0]["@href"] + '">' + d.menustrip.menu[2].menu[0]["@text"] + '</li>' +
          '<li><a href="' + d.menustrip.menu[2].menu[1]["@href"] + '">' + d.menustrip.menu[2].menu[1]["@text"] + '</li>' +
          '<li><a href="' + d.menustrip.menu[2].menu[2]["@href"] + '">' + d.menustrip.menu[2].menu[2]["@text"] + '</li>' +
        '</ol>' +
        '<li>' + d.menustrip.menu[3]["@text"] + '</li>' +
        '<ol>' +
          '<li><a href="' + d.menustrip.menu[3].menu[0]["@href"] + '">' + d.menustrip.menu[3].menu[0]["@text"] + '</li>' +
          '<li><a href="' + d.menustrip.menu[3].menu[1]["@href"] + '">' + d.menustrip.menu[3].menu[1]["@text"] + '</li>' +
          '<li><a href="' + d.menustrip.menu[3].menu[2]["@href"] + '">' + d.menustrip.menu[3].menu[2]["@text"] + '</li>' +
          '<ol>' +
            '<li><a href="' + d.menustrip.menu[3].menu[2].menu[0]["@href"] + '">' + d.menustrip.menu[3].menu[2].menu[0]["@text"] + '</li>' +
            '<li><a href="' + d.menustrip.menu[3].menu[2].menu[1]["@href"] + '">' + d.menustrip.menu[3].menu[2].menu[1]["@text"] + '</li>' +
            '<li><a href="' + d.menustrip.menu[3].menu[2].menu[2]["@href"] + '">' + d.menustrip.menu[3].menu[2].menu[2]["@text"] + '</li>' +
          '</ol>' +
        '</ol>' +
        '<li>' + d.menustrip.menu[4]["@text"] + '</li>' +
        '<ol>' +
          '<li><a href="' + d.menustrip.menu[4].menu[0]["@href"] + '">' + d.menustrip.menu[4].menu[0]["@text"] + '</li>' +
          '<li><a href="' + d.menustrip.menu[4].menu[1]["@href"] + '">' + d.menustrip.menu[4].menu[1]["@text"] + '</li>' +
          '<li><a href="' + d.menustrip.menu[4].menu[2]["@href"] + '">' + d.menustrip.menu[4].menu[2]["@text"] + '</li>' +
          '<li><a href="' + d.menustrip.menu[4].menu[3]["@href"] + '">' + d.menustrip.menu[4].menu[3]["@text"] + '</li>' +
          '<ol>' +
            '<li><a href="' + d.menustrip.menu[4].menu[3].menu[0]["@href"] + '">' + d.menustrip.menu[4].menu[3].menu[0]["@text"] + '</li>' +
            '<li><a href="' + d.menustrip.menu[4].menu[3].menu[1]["@href"] + '">' + d.menustrip.menu[4].menu[3].menu[1]["@text"] + '</li>' +
            '<li><a href="' + d.menustrip.menu[4].menu[3].menu[2]["@href"] + '">' + d.menustrip.menu[4].menu[3].menu[2]["@text"] + '</li>' +
            '<ol>' +
              '<li><a href="' + d.menustrip.menu[4].menu[3].menu[2].menu[0]["@href"] + '">' + d.menustrip.menu[4].menu[3].menu[2].menu[0]["@text"] + '</li>' +
              '<li><a href="' + d.menustrip.menu[4].menu[3].menu[2].menu[1]["@href"] + '">' + d.menustrip.menu[4].menu[3].menu[2].menu[1]["@text"] + '</li>' +
              '<li><a href="' + d.menustrip.menu[4].menu[3].menu[2].menu[2]["@href"] + '">' + d.menustrip.menu[4].menu[3].menu[2].menu[2]["@text"] + '</li>' +
            '</ol>' +
          '</ol>' +
        '</ol>' +
        '<li>' + d.menustrip.menu[5]["@text"] + '</li>' +
        '<ol>' +
          '<li><a href="' + d.menustrip.menu[5].menu[0]["@href"] + '">' + d.menustrip.menu[5].menu[0]["@text"] + '</li>' +
          '<li><a href="' + d.menustrip.menu[5].menu[1]["@href"] + '">' + d.menustrip.menu[5].menu[1]["@text"] + '</li>' +
          '<li><a href="' + d.menustrip.menu[5].menu[2]["@href"] + '">' + d.menustrip.menu[5].menu[2]["@text"] + '</li>' +
          '<li><a href="' + d.menustrip.menu[5].menu[3]["@href"] + '">' + d.menustrip.menu[5].menu[3]["@text"] + '</li>' +
          '<li><a href="' + d.menustrip.menu[5].menu[4]["@href"] + '">' + d.menustrip.menu[5].menu[4]["@text"] + '</li>' +
          '<li><a href="' + d.menustrip.menu[5].menu[5]["@href"] + '">' + d.menustrip.menu[5].menu[5]["@text"] + '</li>' +
          '<li><a href="' + d.menustrip.menu[5].menu[6]["@href"] + '">' + d.menustrip.menu[5].menu[6]["@text"] + '</li>' +
          '<li><a href="' + d.menustrip.menu[5].menu[7]["@href"] + '">' + d.menustrip.menu[5].menu[7]["@text"] + '</li>' +
          '<ol>' +
            '<li><a href="' + d.menustrip.menu[5].menu[7].menu[0]["@href"] + '">' + d.menustrip.menu[5].menu[7].menu[0]["@text"] + '</li>' +
            '<li><a href="' + d.menustrip.menu[5].menu[7].menu[1]["@href"] + '">' + d.menustrip.menu[5].menu[7].menu[1]["@text"] + '</li>' +
            '<li><a href="' + d.menustrip.menu[5].menu[7].menu[2]["@href"] + '">' + d.menustrip.menu[5].menu[7].menu[2]["@text"] + '</li>' +
            '<li><a href="' + d.menustrip.menu[5].menu[7].menu[3]["@href"] + '">' + d.menustrip.menu[5].menu[7].menu[3]["@text"] + '</li>' +
            '<li><a href="' + d.menustrip.menu[5].menu[7].menu[4]["@href"] + '">' + d.menustrip.menu[5].menu[7].menu[4]["@text"] + '</li>' +
            '<li><a href="' + d.menustrip.menu[5].menu[7].menu[5]["@href"] + '">' + d.menustrip.menu[5].menu[7].menu[5]["@text"] + '</li>' +
            '<li><a href="' + d.menustrip.menu[5].menu[7].menu[6]["@href"] + '">' + d.menustrip.menu[5].menu[7].menu[6]["@text"] + '</li>' +
            '<li><a href="' + d.menustrip.menu[5].menu[7].menu[7]["@href"] + '">' + d.menustrip.menu[5].menu[7].menu[7]["@text"] + '</li>' +
          '</ol>' +
        '</ol>' +
        '<li>' + d.menustrip.menu[6]["@text"] + '</li>' +
        '<ol>' +
          '<li><a href="' + d.menustrip.menu[6].menu[0]["@href"] + '">' + d.menustrip.menu[6].menu[0]["@text"] + '</li>' +
          '<ol>' +
            '<li><a href="' + d.menustrip.menu[6].menu[0].menu[0]["@href"] + '">' + d.menustrip.menu[6].menu[0].menu[0]["@text"] + '</li>' +
            '<li><a href="' + d.menustrip.menu[6].menu[0].menu[1]["@href"] + '">' + d.menustrip.menu[6].menu[0].menu[1]["@text"] + '</li>' +
            '<li><a href="' + d.menustrip.menu[6].menu[0].menu[2]["@href"] + '">' + d.menustrip.menu[6].menu[0].menu[2]["@text"] + '</li>' +
            '<li><a href="' + d.menustrip.menu[6].menu[0].menu[3]["@href"] + '">' + d.menustrip.menu[6].menu[0].menu[3]["@text"] + '</li>' +
            '<ol>' +
              '<li><a href="' + d.menustrip.menu[6].menu[0].menu[3].menu[0]["@href"] + '">' + d.menustrip.menu[6].menu[0].menu[3].menu[0]["@text"] + '</li>' +
              '<li><a href="' + d.menustrip.menu[6].menu[0].menu[3].menu[1]["@href"] + '">' + d.menustrip.menu[6].menu[0].menu[3].menu[1]["@text"] + '</li>' +
              '<li><a href="' + d.menustrip.menu[6].menu[0].menu[3].menu[2]["@href"] + '">' + d.menustrip.menu[6].menu[0].menu[3].menu[2]["@text"] + '</li>' +
            '</ol>' +
          '</ol>' +
          '<li><a href="' + d.menustrip.menu[6].menu[1]["@href"] + '">' + d.menustrip.menu[6].menu[1]["@text"] + '</li>' +
          '<ol>' +
            '<li><a href="' + d.menustrip.menu[6].menu[1].menu[0]["@href"] + '">' + d.menustrip.menu[6].menu[1].menu[0]["@text"] + '</li>' +
            '<li><a href="' + d.menustrip.menu[6].menu[1].menu[1]["@href"] + '">' + d.menustrip.menu[6].menu[1].menu[1]["@text"] + '</li>' +
          '</ol>' +
          '<li><a href="' + d.menustrip.menu[6].menu[2]["@href"] + '">' + d.menustrip.menu[6].menu[2]["@text"] + '</li>' +
          '<li><a href="' + d.menustrip.menu[6].menu[3]["@href"] + '">' + d.menustrip.menu[6].menu[3]["@text"] + '</li>' +
          '<li><a href="' + d.menustrip.menu[6].menu[4]["@href"] + '">' + d.menustrip.menu[6].menu[4]["@text"] + '</li>' +
          '<li><a href="' + d.menustrip.menu[6].menu[5]["@href"] + '">' + d.menustrip.menu[6].menu[5]["@text"] + '</li>' +
          '<ol>' +
            '<li><a href="' + d.menustrip.menu[6].menu[5].menu[0]["@href"] + '">' + d.menustrip.menu[6].menu[5].menu[0]["@text"] + '</li>' +
            '<li><a href="' + d.menustrip.menu[6].menu[5].menu[1]["@href"] + '">' + d.menustrip.menu[6].menu[5].menu[1]["@text"] + '</li>' +
            '<li><a href="' + d.menustrip.menu[6].menu[5].menu[2]["@href"] + '">' + d.menustrip.menu[6].menu[5].menu[2]["@text"] + '</li>' +
            '<li><a href="' + d.menustrip.menu[6].menu[5].menu[3]["@href"] + '">' + d.menustrip.menu[6].menu[5].menu[3]["@text"] + '</li>' +
          '</ol>' +
          '<li><a href="' + d.menustrip.menu[6].menu[6]["@href"] + '">' + d.menustrip.menu[6].menu[6]["@text"] + '</li>' +
          '<li><a href="' + d.menustrip.menu[6].menu[7]["@href"] + '">' + d.menustrip.menu[6].menu[7]["@text"] + '</li>' +
          '<li><a href="' + d.menustrip.menu[6].menu[8]["@href"] + '">' + d.menustrip.menu[6].menu[8]["@text"] + '</li>' +
          '<li><a href="' + d.menustrip.menu[6].menu[9]["@href"] + '">' + d.menustrip.menu[6].menu[9]["@text"] + '</li>' +
          '<ol>' +
            '<li><a href="' + d.menustrip.menu[6].menu[9].menu[0]["@href"] + '">' + d.menustrip.menu[6].menu[9].menu[0]["@text"] + '</li>' +
            '<li><a href="' + d.menustrip.menu[6].menu[9].menu[1]["@href"] + '">' + d.menustrip.menu[6].menu[9].menu[1]["@text"] + '</li>' +
          '</ol>' +
          '<li><a href="' + d.menustrip.menu[6].menu[10]["@href"] + '">' + d.menustrip.menu[6].menu[10]["@text"] + '</li>' +
          '<ol>' +
            '<li><a href="' + d.menustrip.menu[6].menu[10].menu[0]["@href"] + '">' + d.menustrip.menu[6].menu[10].menu[0]["@text"] + '</li>' +
            '<li><a href="' + d.menustrip.menu[6].menu[10].menu[1]["@href"] + '">' + d.menustrip.menu[6].menu[10].menu[1]["@text"] + '</li>' +
            '<li><a href="' + d.menustrip.menu[6].menu[10].menu[2]["@href"] + '">' + d.menustrip.menu[6].menu[10].menu[2]["@text"] + '</li>' +
            '<li><a href="' + d.menustrip.menu[6].menu[10].menu[3]["@href"] + '">' + d.menustrip.menu[6].menu[10].menu[3]["@text"] + '</li>' +
            '<li><a href="' + d.menustrip.menu[6].menu[10].menu[4]["@href"] + '">' + d.menustrip.menu[6].menu[10].menu[4]["@text"] + '</li>' +
            '<li><a href="' + d.menustrip.menu[6].menu[10].menu[5]["@href"] + '">' + d.menustrip.menu[6].menu[10].menu[5]["@text"] + '</li>' +
            '<li><a href="' + d.menustrip.menu[6].menu[10].menu[6]["@href"] + '">' + d.menustrip.menu[6].menu[10].menu[6]["@text"] + '</li>' +
            '<li><a href="' + d.menustrip.menu[6].menu[10].menu[7]["@href"] + '">' + d.menustrip.menu[6].menu[10].menu[7]["@text"] + '</li>' +
            '<li><a href="' + d.menustrip.menu[6].menu[10].menu[8]["@href"] + '">' + d.menustrip.menu[6].menu[10].menu[8]["@text"] + '</li>' +
            '<li><a href="' + d.menustrip.menu[6].menu[10].menu[9]["@href"] + '">' + d.menustrip.menu[6].menu[10].menu[9]["@text"] + '</li>' +
            '<li><a href="' + d.menustrip.menu[6].menu[10].menu[10]["@href"] + '">' + d.menustrip.menu[6].menu[10].menu[10]["@text"] + '</li>' +
            '<li><a href="' + d.menustrip.menu[6].menu[10].menu[11]["@href"] + '">' + d.menustrip.menu[6].menu[10].menu[11]["@text"] + '</li>' +
            '<li><a href="' + d.menustrip.menu[6].menu[10].menu[12]["@href"] + '">' + d.menustrip.menu[6].menu[10].menu[12]["@text"] + '</li>' +
            '<li><a href="' + d.menustrip.menu[6].menu[10].menu[13]["@href"] + '">' + d.menustrip.menu[6].menu[10].menu[13]["@text"] + '</li>' +
            '<li><a href="' + d.menustrip.menu[6].menu[10].menu[14]["@href"] + '">' + d.menustrip.menu[6].menu[10].menu[14]["@text"] + '</li>' +
            '<li><a href="' + d.menustrip.menu[6].menu[10].menu[15]["@href"] + '">' + d.menustrip.menu[6].menu[10].menu[15]["@text"] + '</li>' +
            '<li><a href="' + d.menustrip.menu[6].menu[10].menu[16]["@href"] + '">' + d.menustrip.menu[6].menu[10].menu[16]["@text"] + '</li>' +
            '<li><a href="' + d.menustrip.menu[6].menu[10].menu[17]["@href"] + '">' + d.menustrip.menu[6].menu[10].menu[17]["@text"] + '</li>' +
            '<li><a href="' + d.menustrip.menu[6].menu[10].menu[18]["@href"] + '">' + d.menustrip.menu[6].menu[10].menu[18]["@text"] + '</li>' +
            '<li><a href="' + d.menustrip.menu[6].menu[10].menu[19]["@href"] + '">' + d.menustrip.menu[6].menu[10].menu[19]["@text"] + '</li>' +
            '<li><a href="' + d.menustrip.menu[6].menu[10].menu[20]["@href"] + '">' + d.menustrip.menu[6].menu[10].menu[20]["@text"] + '</li>' +
            '<li><a href="' + d.menustrip.menu[6].menu[10].menu[21]["@href"] + '">' + d.menustrip.menu[6].menu[10].menu[21]["@text"] + '</li>' +
            '<li><a href="' + d.menustrip.menu[6].menu[10].menu[22]["@href"] + '">' + d.menustrip.menu[6].menu[10].menu[22]["@text"] + '</li>' +
            '<li><a href="' + d.menustrip.menu[6].menu[10].menu[23]["@href"] + '">' + d.menustrip.menu[6].menu[10].menu[23]["@text"] + '</li>' +
            '<li><a href="' + d.menustrip.menu[6].menu[10].menu[24]["@href"] + '">' + d.menustrip.menu[6].menu[10].menu[24]["@text"] + '</li>' +
            '<li><a href="' + d.menustrip.menu[6].menu[10].menu[25]["@href"] + '">' + d.menustrip.menu[6].menu[10].menu[25]["@text"] + '</li>' +
            '<li><a href="' + d.menustrip.menu[6].menu[10].menu[26]["@href"] + '">' + d.menustrip.menu[6].menu[10].menu[26]["@text"] + '</li>' +
          '</ol>' +
          '<li><a href="' + d.menustrip.menu[6].menu[11]["@href"] + '">' + d.menustrip.menu[6].menu[11]["@text"] + '</li>' +
          '<ol>' +
            '<li><a href="' + d.menustrip.menu[6].menu[11].menu[0]["@href"] + '">' + d.menustrip.menu[6].menu[11].menu[0]["@text"] + '</li>' +
            '<li><a href="' + d.menustrip.menu[6].menu[11].menu[1]["@href"] + '">' + d.menustrip.menu[6].menu[11].menu[1]["@text"] + '</li>' +
            '<li><a href="' + d.menustrip.menu[6].menu[11].menu[2]["@href"] + '">' + d.menustrip.menu[6].menu[11].menu[2]["@text"] + '</li>' +
            '<li><a href="' + d.menustrip.menu[6].menu[11].menu[3]["@href"] + '">' + d.menustrip.menu[6].menu[11].menu[3]["@text"] + '</li>' +
            '<li><a href="' + d.menustrip.menu[6].menu[11].menu[4]["@href"] + '">' + d.menustrip.menu[6].menu[11].menu[4]["@text"] + '</li>' +
            '<li><a href="' + d.menustrip.menu[6].menu[11].menu[5]["@href"] + '">' + d.menustrip.menu[6].menu[11].menu[5]["@text"] + '</li>' +
          '</ol>' +
          '<li><a href="' + d.menustrip.menu[6].menu[12]["@href"] + '">' + d.menustrip.menu[6].menu[12]["@text"] + '</li>' +
        '</ol>' +
        '<li>' + d.menustrip.menu[7]["@text"] + '</li>' +
        '<ol>' +
          '<li><a href="' + d.menustrip.menu[7].menu[0]["@href"] + '">' + d.menustrip.menu[7].menu[0]["@text"] + '</li>' +
          '<li><a href="' + d.menustrip.menu[7].menu[1]["@href"] + '">' + d.menustrip.menu[7].menu[1]["@text"] + '</li>' +
          '<li><a href="' + d.menustrip.menu[7].menu[2]["@href"] + '">' + d.menustrip.menu[7].menu[2]["@text"] + '</li>' +
          '<li><a href="' + d.menustrip.menu[7].menu[3]["@href"] + '">' + d.menustrip.menu[7].menu[3]["@text"] + '</li>' +
        '</ol>'
      );
    },
    error: function(error, error1, error2) {
      console.log('error 1: ', error, '\nerror 2: ', error1, '\nerror 3: ', error2);
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
