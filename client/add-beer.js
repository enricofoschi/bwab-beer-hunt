Meteor.subscribe('beers');

Template.addBeer.events({
    'keypress .txt-beer': function(event) {

        if (event.keyCode === 13) {

            beers.insert({
                name: event.target.value,
                vote: 1
            });

            event.target.value = '';
        }
    },

    'click .btn-add-beer': function(event, instance) {

        var txtInput = instance.find('.txt-beer');

        beers.insert({
            name: txtInput.value,
            vote: 1
        });

        txtInput.value = '';
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
