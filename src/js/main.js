// this sets up phonegap //
function onDeviceReady() {
    var parentElement = document.getElementById('ready');
    var listeningElement = parentElement.querySelector('.listening');
    var receivedElement = parentElement.querySelector('.received');
    listeningElement.setAttribute('style', 'display:none;');
    receivedElement.setAttribute('style', 'display:block;');
}
document.addEventListener('deviceready', onDeviceReady, false);


// this gets information about a venue //
function app(info) {
    $('#content').append(info);
}

function getinfo(venueAPI) {
    $.getJSON(venueAPI, function(data) {
        var arr = [];
        var photoarr = [];
        arr = data.response.venue;
        $('#content').empty();
        console.log(data);
        b = '<br/>';
        app('<h1>' + arr.name + '</h1><p>');
        var catArr = arr.categories;
        for(var y = 0; y < catArr.length; y++) {
            app(catArr[y].shortName + ' ');
        }
        app(b);
        app('<a href="tel:' + arr.contact.formattedPhone + '">' + arr.contact.formattedPhone + '</a>' + b);
        app(arr.location.formattedAddress + b);
        app('<a href="www.twitter.com/' + arr.contact.twitter + '">Twitter</a>' + b);
        if(arr.hasMenu === true) {
            app('<a href="' + arr.menu.mobileUrl + '">View Menu Online</a></p>' + b);
        } else {
            app('No menu available online' + b);
        }
        photoarr = arr.photos.groups[0].items;

        for(var c = 0; c < photoarr.length; c++) {
            $('#content').append('<div class="img-container"><a href="#" class="thumbnail"><img src="' + photoarr[c].prefix + photoarr[c].width + 'x' + photoarr[c].height + photoarr[c].suffix + '"></a></div>');
        }
    });
}


// this gets the complete list of venues //
function appS(infoS) {
    $('#specials').append(infoS);
}

function appV(infoV) {
    $('#venueList').append(infoV);
}

function getList(venueAPIl) {
    $.getJSON(venueAPIl, function(datal) {
        var venueINFO = 'https:\/\/api.foursquare.com\/v2\/venues\/VENUE_ID?oauth_token=YCCKUVRO4J4MZQ121E4VTNHBRM4YH0FAVROW0KQ2OSJ32GRV&amp;v=20141012';
        var arrl = [];
        var venuearrl = [];
        $('#specials').empty();
        $('#venueList').empty();
        b = '<br/>';
        arrl = datal.response.list.listItems;
        venuearrl = arrl.items;

        for(var x = 0; x < venuearrl.length; x++) {
            if(venuearrl[x].venue.specials.count > 0) {
                appS('<div id="specialCard" class="card"><p>' + venuearrl[x].venue.name + b + venuearrl[x].venue.specials.items[0].message + '</p><paper-shadow z="1"></paper-shadow></div>');
            }
        }
        for(var z = 0; z < venuearrl.length; z++) {
            appV(' <div layout horizontal center center-justified cross-fade class="button-list">');
            var venueINF = venueINFO.replace('VENUE_ID', venuearrl[z].venue.id)
            var venueDecoded = venueINF.replace(/&amp;/g, '&');
            appV('<paper-button raised class=\"btn btn-success btn-block btn-lg\" data-toggle=\"modal\" data-target=\"#myModal\" onclick=\"getinfo(\'' + venueDecoded + ');\">' + venuearrl[z].venue.name + '</paper-button>');
            appV('</div>' + b);
        }
    });
}
