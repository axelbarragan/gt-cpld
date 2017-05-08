$(document).ready(function(){
  $('.slider1').bxSlider({
    adaptiveHeight: true,
    mode: 'fade',
    auto: true,
  });

  $('.slider2').bxSlider({
   adaptiveHeight: true,
   mode: 'vertical',
   auto: true,
 });

  $('.slider3').bxSlider({
    adaptiveHeight: true,
    mode: 'vertical',
    auto: true,
  });

  $('.nav a').click(function(){
    $('.navbar-ex1-collapse').collapse('hide');
  });

  /*Contador  var target_date = new Date('Jun, 31, 2017').getTime();
  // variables for time units
  var days, hours, minutes, seconds;
  // get tag element
  var countdown = document.getElementById('countdown');
  // update the tag with id "countdown" every 1 second
  setInterval(function () {
    // find the amount of "seconds" between now and target
    var current_date = new Date().getTime();
    var seconds_left = (target_date - current_date) / 1000;
    // do some time calculations
    days = parseInt(seconds_left / 86400);
    seconds_left = seconds_left % 86400;
    hours = parseInt(seconds_left / 3600);
    seconds_left = seconds_left % 3600;
    minutes = parseInt(seconds_left / 60);
    seconds = parseInt(seconds_left % 60);

    // format countdown string + set tag value
    countdown.innerHTML = '<span class="days">' + days +  ' <b>dias</b></span> <span class="hours">' + hours + ' <b>horas</b></span> <span class="minutes">' + minutes + ' <b>minutos</b></span> <span class="seconds">' + seconds + ' <b>segundos</b></span>';  
  }, 1000);*/


    
      var clock;

      clock = $('#clock').FlipClock({
            clockFace: 'DailyCounter',
            language: 'spanish',
            autoStart: false,
            callbacks: {
              stop: function() {
                $('.message').html('The clock has stopped!')
              }
            }
        });
            
        clock.setTime(220880);
        clock.setCountdown(true);
        clock.start();
  

});