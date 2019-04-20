$.getJSON('./json/data.json', function(data){
    //home
    $('.title').html(data.header);
    $('#tagline').html(data.tagline);

    //flavors
    $('.price').each(function(idx){
        $(this).html("Price: $ " + data.flavors[idx].cost);
    });

    $('.ice-cream-title').each(function(idx){
        $(this).html(data.flavors[idx].flavor)
    })

    //contact
    $(".form").on("submit",function(e) {
        e.preventDefault(); // cancel submission
        window.location.replace("/");
    });



});
