$(function(){
    let timer;
    const colors=["red","blue","pink","teal","magenta","gold","green","skyblue","purple","yellow"];

    //add container class to container
    $('#container').addClass('container');

    //start button
    $('#start').on('click', start);
    
    function drawCircle(index){
        //get length
        const size = $('#width').val();

        //get random color
        const color = colors[Math.round(Math.random(0,1) * 10)]; //colors[index % 10];

        let mtop = 'auto';
        let left = 'auto';

        if(index % 4 === 0){
            left = 600 - (6 * index) + 30 + 'px';
        }
        else if (index % 4 === 1){
            left = 600 + (6 * index) - 30 + 'px';
        }
        else if (index % 4 === 2){
            mtop = 300 - (6 * index) + 20 + 'px';
        }
        else{
            mtop = 300 + (6 * index) - 20 + 'px';
        }

        //create new circle
        const newElement = $('<div>')
                                .addClass('circle')
                                .css({
                                    'min-height': size + 'px',
                                    'min-width': size + 'px',
                                    'background-color' : color,
                                    'top': mtop,
                                    'left': left,
                                })
                                .on("click", clickHandler)
                                .on('mouseover', mouseoverHandler)
                                .on('mouseout', mouseoutHandler);

        //add circle to container
        $('#container').append(newElement);

    }

    function start(){

        //get total number of circles to draw
        const total = parseInt($('#total').val());
        for(let i = 0; i<total; i++){
            drawCircle(i);
        }

        //get interval to grow
        const rate = $('#rate').val();

        //make circle grow
        timer = setInterval(() => {
            //get growth size by
            const growth = parseInt($('#amount').val());
            const size = parseInt($('div').find('.circle').css('height'));

            $('div').find('.circle')
                    .css({
                        'min-height': size + growth + 'px',
                        'min-width': size + growth + 'px',
                    });
        }, rate);
    }


    //event handler for circle click
    function clickHandler(){
        $(this).hide();
    }

    //mouseover event handler
    function mouseoverHandler(){
       timer = setInterval(() => {
        console.log('timer');
        let opac = parseInt($(this).css('opacity'));
        opac = opac < 0.2 ? opac : opac - 0.1;
        $(this).css('opacity', opac);
       }, 250)
    }

    //mouseout event habdler
    function mouseoutHandler(){
        clearInterval(timer);
        $(this).css('opacity',1);
     }

})
