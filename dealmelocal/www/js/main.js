 function getList(venueAPI) {
     $.getJSON(venueAPI, function (data) {
         console.log(data);
         var arr = [];
         var venue_list = [];
         arr = data.response.list.listItems.items;
         for (var x = 0; x < arr.length; x++) {
             if (arr[x].venue.specials.count > 0) {
                 var venue_deal = arr[x].venue.specials.items[0].message;
             }
             venue_list.push({
                 "venue": arr[x].venue.name,
                 "phone": arr[x].venue.contact.formattedPhone,
                 "color": '#dddddd',
                 "deal": venue_deal
             });
             document.querySelector('venue-grid').items = venue_list;
         }
     });


 }
