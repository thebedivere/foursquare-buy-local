var color_Pub = 'brown';
var venueAPI = 'https://api.foursquare.com/v2/lists/54472e14498e9fd02cf2ed7e?oauth_token=NJZESUCEVA5ZWYFK5ZJEMINIRK2XWTF34DTS2J2TY2GU44TE&v=20141022';


function getList(venueAPI) {
    $.getJSON(venueAPI, function (data) {
        console.log(data);
        var arr = [];
        var venue_list = [];


        arr = data.response.list.listItems.items;
        for (var x = 0; x < arr.length; x++) {
            //    if (arr[x].venue.specials.count > 0) {
            //     var venue_deal = //arr[x].venue.specials.items[0].message;
            //         }
            //      photoarr = arr[x].photos.groups[0].items;
            //   for (var i = 0; i < photoarr.length; i++) {
            //    var photos = ('<img src="' + //photoarr[i].prefix + photoarr[i].width + 'x' + //photoarr[i].height + photoarr[i].suffix + '">');
            //    }
            var venue_category = arr[x].categories;
            var color_venue = ('color_').concat(venue_category);
            venue_list.push({
                "venue": arr[x].venue.name,
                // "phone": arr[x].venue.contact.formattedPhone,
                //  "twitter": arr[x].contact.twitter,
                "color": color_venue
            });
            document.querySelector('venue-grid').items = venue_list;
        }
    });
}