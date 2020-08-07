

$(document).ready(function (){
    $('.submit').click(function (event){
        
        console.log('clicked button')


        var name = $('.name').val()
        var email = $('.email').val()
        var subject = $('.subject').val()
        var message = $('.message').val()
        var statusElm = $('.status')
        statusElm.empty()


        if(name.length >= 5){
            statusElm.append('<div>Name is valid</div>')
        } else{
            event.preventDefault()
            statusElm.append('<div>Name is not valid</div>')
        }

        if(email.length > 5 && email.includes('@') && email.includes('.')){
            statusElm.append('<div>Email is valid</div>')
        } else{
            event.preventDefault()
            statusElm.append('<div>Email is not valid</div>')
        }

        if(subject.length >= 2) {
            statusElm.append('<div>Subject is valid</div>')
        } else{
            event.preventDefault()
            statusElm.append('<div>Subject is not valid</div>')
        }
        if(message.length >= 10){
            statusElm.append('<div>Message is valid</div>')
        } else{
            event.preventDefault()
            statusElm.append('<div>Message is not valid</div>')
        }
    })
    const scroll = new SmoothScroll('a[href*="#"]', {
        speed: 800
    });

    

})
$(function() {
    var selectedClass = "";
    $(".filter").click(function(){
    selectedClass = $(this).attr("data-rel");
    $("#gallery").fadeTo(100, 0.1);
    $("#gallery div").not("."+selectedClass).fadeOut().removeClass('animation');
    setTimeout(function() {
    $("."+selectedClass).fadeIn().addClass('animation');
    $("#gallery").fadeTo(300, 1);
    }, 300);
    });
    });

