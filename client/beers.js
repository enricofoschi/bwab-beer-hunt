Template.beers.helpers({
    beersList: function() {
        return beers.find().fetch();
    }
});
