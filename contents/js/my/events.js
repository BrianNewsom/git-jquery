function myEvents(){

    // display a list of events belonging to me in #list
    // e.g., https://api.github.com/users/doubleshow/events

    console.log('listing events');

    $.get("https://api.github.com/users/briannewsom/events", github, function(events){
        $.get("/git-jquery/templates/eventList.jade", function(template){
            var html = jade.render(template, {items: events})
            $('#list').html(html)
        })
    })
}
