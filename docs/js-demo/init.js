function contentFromResponse(gist) {
    $
        .ajax({ url: 'https://api.github.com/gists/' + gist })
        .done(function (resp) {
            var files = resp.files;
            var content = [];
            for (var file in files) {
                content.push(files[file].content)
            }
            if (content.length > 0) {
                myCode1Mirror.setValue(content[0]);
                return;
            } else {
                return;
            }
        });
    return;
};

function queryGist() {
    var qd = {};
    location.search.substr(1).split("&").forEach(
        function (item) {
            var s = item.split("="), k = s[0], v = s[1] && decodeURIComponent(s[1]); (k in qd) ? qd[k].push(v) : qd[k] = [v]
        }
    );
    return qd['gist'];
};

function loadSession () {
    var clientHash = location.hash.split('#')[1];
    if (clientHash) {
      myCode1Mirror.setValue(atob(clientHash));
    }else{
        var clientGist = queryGist();
        if(clientGist){
            contentFromResponse(gist);
        }
    };

    $.
    ajax(
    {url : "examples/examples.json",
        dataType : "json",
        cache: true})
    .done(function (response){
        examplesDataSet = response;
        for(var k in examplesDataSet){
            examplesDropdown.appendChild(createExample(k))
        }
        if(location && location.hash ){
            var id =  location.hash.substr(1)
            switchExample(id)
        }
    })
    .fail(function(xhr, textStatus, thrown){
        console.log(arguments)
    })

};

start()
