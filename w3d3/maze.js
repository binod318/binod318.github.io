// $(document).ready('on', function(){
// deprecated
// });

$(function(){

    //mouse hover on top left wall
    $('.boundary')
        .on('mouseover', lose);

    $('#start').on('mouseover', function(){
        $('.boundary').removeClass('youlose');
        $('#status').text('Game started...');
    });

    $('#end').on('mouseover', function(){
        if($('#status').text() === 'Game started'){
            $('#status').text('You win! :) Click the "S" to begin again.');
            alert('You win! :)');
        }
    })

    $('#maze').on('mouseleave', lose);

    function lose(){

        //avoid multiple popups and avoid popup after win when closing popup
        if(!$('.boundary').hasClass('youlose') && $('#status').text().indexOf('win') < 0){
            $('.boundary').addClass('youlose');
            $('#status').text('You failed :( .\nClick the "S" to begin again.');
            alert('Sorry, you lost :(');
        }
    }
});
