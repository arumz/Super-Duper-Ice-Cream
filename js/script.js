$.getJSON('./json/data.json', function(data){
    console.log(data.header);
    $('.title').html(data.header);
    $('#tagline').html(data.tagline);

});