
function app(info) {
    $('#content').append(info);
}

function getinfo(venueAPI) {
    $.getJSON(venueAPI, function(data) {
        $(function() {
            var arr = [];
            var photoarr = [];

            function getinfo() {
                $('#content').empty()
                console.log(data);
                b = '<br/>'
                arr = data.response.venue;
                app('<h1>' + arr.name + '</h1>');
                app('<a href="tel:' + arr.contact.formattedPhone + '">' + arr.contact.formattedPhone + '</a>' + b);
                app('<a href="www.twitter.com/' + arr.contact.twitter + '">Twitter</a>' + b)
                photoarr = arr.photos.groups[0].items;
                photoarrlength = arr.photos.groups[0].items.length;
                console.log(photoarr);
                console.log(photoarrlength);
                for(var i = 0; i < photoarrlength; i++) {
                    app('<img src="' + photoarr[i].prefix + photoarr[i].width + 'x' + photoarr[i].height + photoarr[i].suffix + '">');
                }
            }
            getinfo();
        });
    });
}
});

