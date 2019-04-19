$.getJSON('./json/data.json', function(data){
    $('title').innerHTML = data.header;
});