
$(document).ready(function(){
    
    //variables
    $surface = $('.surface');
    $car = $('.car');
    $img = $('.car img');
    let flag = true;
    const cars = ['./assets/Img_06.png', './assets/Img_05.png'];

    //keypress event
    $(document).on('keypress',function(e){
        if(e.which== 13) {
            $($surface).toggleClass('moveRight');
            $($car).toggleClass('suspension')
            
        }
    })



    $(document).on('keypress',function(e){
        if(e.which== 13 ) {
            if(flag) {
                flag = false;
                $img.attr('src', cars[0]);
            } else {
                flag = true; 
                $img.attr('src', cars[1]);
            }
            
        }
    })

});

