Template.beers.helpers({
    beersList: function() {
        return beers.find({
            vote: {
                $gte: 0
            }
        }, {
            sort: {
                vote: -1
            }
        }).fetch();
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