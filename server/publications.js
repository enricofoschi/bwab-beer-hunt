Meteor.publish('beers', function() {
    return beers.find();
});
