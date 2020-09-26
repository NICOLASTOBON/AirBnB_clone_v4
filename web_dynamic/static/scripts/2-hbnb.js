$(document).ready(() => {
  const URL = 'http://0.0.0.0:5001/api/v1/status/';
  const data = $.ajax(URL);
  if (data.statusText.includes('OK')) {
    $('DIV#api_status').addClass('available');
  } else {
    $('DIV#api_status').removeClass('available');
  }
});
