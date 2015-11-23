Template.beers.helpers({
    beersList: function() {
        return beers.find().fetch();
    }
});

Template.beers.events({
    'click .action-vote': function() {
        beers.update(this._id, {
            $set: {
                vote: (this.vote || 0) + 1
            }
        });
    }
});