'use strict';

console.log('herro');

var $people = $('#people');
$(function () {
  var $name = $('#name');
  var $age = $('#age');
  var $gender = $('#gender');
  $.ajax({
    type: 'GET',
    url: 'http://famapi.herokuapp.com/api/people',
    success: function(data) {
      $.each(data, function(i, person) {
        $people.append(
        '<tr>' +
          '<td>' + person.name + '</td>' +
          '<td>' + person.age + '</td>' +
          '<td>' + person.gender + '</td>' +
        '</tr>'
        );
      });
    },
    error: function() {
      alert('Error loading people');
    }
  });

  $('#add-person').on('click', function() {
    var order = {
      name: $name.val(),
      age: $age.val(),
      gender: $gender.val()
    };

    $.ajax({
      type: 'POST',
      url: 'http://famapi.herokuapp.com/api/people',
      data: order,
      success: function(person) {
        $people.append(
            '<tr>' +
            '<td>' + person.name + '</td>' +
            '<td>' + person.age + '</td>' +
            '<td>' + person.gender + '</td>' +
            '</tr>'
        );
      },
      error: function() {
        alert('Error adding new person');
      }
    });
  });
});