function search() {
    var type = $('#searchType').val();
    var word = $('#searchWord').val();
    if (!word) {
        alert("검색어를 입력하세요.");
        return;
    }
    // var url = "{% url 'search issue' search_range='search_range' search_type='type' search_word='word' nolook='nolook' %}".replace(/search_range/, search_range).replace(/type/, type).replace(/word/, word).replace(/nolook/, nolook).replace(/http:\/\//, '').replace(/https:\/\//, '').replace(/twitter.com\//, '').replace(/facebook.com\//, '');
    // if (url.substr(-1) == '/') {
    //     url = url.slice(0, -1);
    // }
    // location.href = url;
}

function onKeyPress(e) {
    if (e.keyCode == 13) {
        e.preventDefault();
        search();
    }
}