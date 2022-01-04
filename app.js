// 'use esversion:6'
var url = 'https://raw.githubusercontent.com/stefanbinder/countries-states/master/countries.json';

$.getJSON(url, function(data) {
  for (i = 0; i < 251; i++) {
    var chooseCountry = document.createElement("option");
    chooseCountry.innerHTML = data[i].name;
    document.getElementById('country').appendChild(chooseCountry);
  }
});
var CountSelect = $('#country');
CountSelect.on('change', function() {
  var myId = $(this).find(':selected').attr('id');
  var selectedCountryName = $(this).val();

  $.getJSON(url, function(data) {
    for (i = 0; i < 251; i++) {
      for (k = 0; k < 100; k++) {
        if (data[i].name === selectedCountryName) {
          var chooseState = document.createElement("option");
          chooseState.innerHTML = data[i].states[k].name;
          document.getElementById('state').appendChild(chooseState);
        }
      }
    }
  });
});
