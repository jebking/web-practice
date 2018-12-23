$().ready(function() {
    $.getJSON( "/web-practice/data.json", function(data) {
        console.log(data);
        $("#text").html(data["text"]);
    })
});
