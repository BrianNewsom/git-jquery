function myEvent(id){

    // display a particular event of mine in #details
    // e.g., https://api.github.com/repos/doubleshow/up

    $.get("https://api.github.com/users/briannewsom/events", github, function(data) {
        var e = _.find(data, function(d){ if(id == d.id) return true;});
        $.get("/git-jquery/templates/eventView.jade", function(template) {
            var html = jade.render(template, {item: e})
            $("#details").html(html)
        })
    })
}

