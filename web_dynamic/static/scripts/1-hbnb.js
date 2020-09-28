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
