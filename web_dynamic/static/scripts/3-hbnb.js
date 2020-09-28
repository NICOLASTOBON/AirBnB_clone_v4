$(document).ready(() => {
  const amenities = {};
  const URL = 'http://0.0.0.0:5001/api/v1/status/';

  $('li input[type="checkbox"]').change(function () {
    /* add elements to amenities dictionary */
    if ($(this).prop('checked')) {
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

  $.get(URL, data => {
    if (data.status === 'OK') {
      $('DIV#api_status').addClass('available');
      $('DIV.available').css('background-color', '#ff545f');
    } else {
      $('DIV#api_status').removeClass('available');
    }
  });

  $.ajax(
    {
      url: 'http://0.0.0.0:5001/api/v1/places_search/',
      type: 'POST',
      data: JSON.stringify({}),
      contentType: 'application/json; charset=utf-8',
      dataType: 'json',
      success: function (data) {
        data.forEach(place => {
          $('.places').append(
            `<article>
              <div class="title_box">
                <h2>${place.name}</h2>
                <div class="price_by_night">${place.price_by_night}</div>
              </div>
              <div class="information">
                <div class="max_guest">${place.max_guest}</div>
                <div class="number_rooms">${place.number_rooms}</div>
                <div class="number_bathrooms">${place.number_bathrooms}</div>
              </div>
              <div>${place.description}</div>
            </article>`
          );
        });
      }
    }
  );
});
