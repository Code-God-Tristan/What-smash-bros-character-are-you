let counter = 0;
$(".find-out").click(function() {
    let question = $(".speech").val();
    let answer = $(".age").val();
    counter = counter + 1;
    $(".ct").text(counter);
    if (answer < 18 && question === "blue") {
        $(".bubble").append("<p> You prefer " + question + " and you are " + answer + "." + " You are sonic. " + '<img src="https://static.wikia.nocookie.net/ssb/images/e/eb/Sonic_-_Super_Smash_Bros._Ultimate.png/revision/latest?cb=20180612205336">' + "</p>");
    } else if (answer >= 18 && question === "blue") {
        $(".bubble").append("<p> You prefer " + question + " and you are " + answer + "." + " You are mario. " + '<img src="https://www.smashbros.com/assets_v2/img/fighter/mario/main.png">' + "</p>");
    } else if (answer < 18 && question === "red") {
        $(".bubble").append("<p> You prefer " + question + " and you are " + answer + "." + " You are charizard. " + ' <img src="https://static.wikia.nocookie.net/ssb/images/4/47/Charizard_-_Super_Smash_Bros._Ultimate.png/revision/latest?cb=20180615152220">' + "</p>");
    } else if (answer >= 18 && question === "red") {
        $(".bubble").append("<p> You prefer " + question + " and you are " + answer + "." + " You are Banjo and kazooie. " + ' <img src="https://ssb.wiki.gallery/images/thumb/9/97/Banjo_%26_Kazooie_SSBU.png/1200px-Banjo_%26_Kazooie_SSBU.png">' + "</p>");
    } else {
        $(".bubble").append("<p> Remember to type red or blue and your age! " + "</p>");
    }
});