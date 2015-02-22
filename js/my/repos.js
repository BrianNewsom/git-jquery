function myRepos(){
    console.log('listing repos')
    $.get("https://api.github.com/users/briannewsom/repos", github, function(data) {

        var repos = data
        $.get("/git-jquery/templates/repoList.jade", function(template) {
            var html = jade.render(template, {items: repos})
            $("#list").html(html)
            myRepo(repos[0].full_name)
        })
    })
}
