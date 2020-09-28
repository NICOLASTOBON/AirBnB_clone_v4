$(document).ready(() => {
  const amenities = {};
  $('li input[type="checkbox"]').change(function () {
    /* add elements to amenities dictionary */
    if ($(this).prop('checked')){
      amenities[$(this).data('id')] = $(this).data('name');
    } else {
      delete amenities[$(this).data('id')];
    }
    /* get elements from amenities dictionary */
    if (Object.keys(amenities).length === 0) {
      $('.amenities h4').html('&nbsp;');
    } else {
      $('.amenities h4').text(Object.values(amenities).join(', '));
    }
  });
  $('li input[type="checkbox"]').css('margin-right', '10px');
});

$(document).ready(() => {
  const URL = 'http://0.0.0.0:5001/api/v1/status/';
  $.get(URL, data => {
    if (data.status === 'OK') {
      $('DIV#api_status').addClass('available');
      $('DIV.available').css('background-color', '#ff545f');
    } else {
      $('DIV#api_status').removeClass('available');
    }
  });
});
