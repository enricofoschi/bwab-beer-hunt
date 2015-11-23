Template.addBeer.events({
    'keypress .txt-beer': function(event) {

        if (event.keyCode === 13) {

            beers.insert({
                name: event.target.value
            });

            event.target.value = '';
        }
    },

    'change .dropdown-beer': function(event) {

        if(!event.target.value) return;

        beers.update(event.target.value, {
            $set: {
                vote: (this.vote || 0) + 1
            }
        });

        event.target.value = '';
    }
});

Template.addBeer.helpers({
    beersList: function() {
        return beers.find({}, {
            sort: {
                name: 1
            }
        }).fetch();
    }
});
