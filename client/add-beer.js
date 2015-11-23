Template.addBeer.events({
    'keypress .txt-beer': function(event) {

        if (event.keyCode === 13) {
            beers.insert({
                name: event.target.value
            });

            event.target.value = '';
        }
    }
});
