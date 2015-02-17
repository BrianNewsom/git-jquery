function myRepo(full_name){

    // display a particular repo of mine in #details
    // e.g., https://api.github.com/repos/doubleshow/up
    console.log('viewing repo')

    $.get("https://api.github.com/repos/briannewsom/" + full_name, github, function(data) {
        var repo = data
        $.get("/git-jquery/templates/repoList.jade", function(template) {
            console.log(repo);
            var html = jade.render(template, {items: repo})
            $("#detail").html('hi')
        })
    })
}

