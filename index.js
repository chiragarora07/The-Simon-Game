
function buttonPress(button) {
    if (button == 0){
        var audio = new Audio("./sounds/green.mp3");
        audio.play();
    }
    if (button == 1){
        var audio = new Audio("./sounds/red.mp3");
        audio.play();
    }
    if (button == 2){
        var audio = new Audio("./sounds/yellow.mp3");
        audio.play();
    }
    if (button == 3){
        var audio = new Audio("./sounds/blue.mp3");
        audio.play();
    }
    
    document.querySelectorAll(".btn")[button].classList.add("pressed");
    
    setTimeout( function() {

        document.querySelectorAll(".btn")[button].classList.remove("pressed");

    } , 200);

}
function check(inputByUser, patternMemory) {
    if (inputByUser === patternMemory) {
        $("h2").text("Pass");
        setTimeout(gameLogic, 500);
    } 
    else if (patternMemory.startsWith(inputByUser)) {
        return; // still correct so far
    } 
    else {
        var audio = new Audio("./sounds/wrong.mp3");
        audio.play();
        $("h2").text("Failed! Touch Anywhere to Restart");
        $("body").css("background-color", "#FF8F8F");
        $(".title").css("background-color", "red");
        $("h2").css("color", "black");
        $("footer").css("background-color", "red");
        $("footer").css("color", "black");
        $(".title").css("color", "black");

        patternMemory = "0";
        level = 0;
        startGame();
    }
}



function userInput(inputByUser, patternMemory) {

    $(".btn").off("click"); // ⭐ MOST IMPORTANT FIX

    $("#green").click(function () {
        buttonPress(0);
        inputByUser += "0";
        check(inputByUser, patternMemory);
    });

    $("#red").click(function () {
        buttonPress(1);
        inputByUser += "1";
        check(inputByUser, patternMemory);
    });

    $("#yellow").click(function () {
        buttonPress(2);
        inputByUser += "2";
        check(inputByUser, patternMemory);
    });

    $("#blue").click(function () {
        buttonPress(3);
        inputByUser += "3";
        check(inputByUser, patternMemory);
    });
}


function gameLogic() {
    $("body").css("background-color", "#BDE8F5");
    $(".title").css("background-color", "#0F2854");
    $("h2").css("color", "#0F2854");
    $("footer").css("background-color", "#0F2854");
    $("footer").css("color", "#FEF2BF");
    $(".title").css("color", "#FEF2BF");

    level+=1;
    $("h2").text("Level " + level);
    var inputByUser = "0";
    var randomButton = Math.random();
    randomButton = randomButton*4;
    randomButton = Math.floor(randomButton);

    if (randomButton == 0) {
        buttonPress(0);
        patternMemory = patternMemory + "0";
    }
    else if ( randomButton == 1) {
        buttonPress(1);
        patternMemory = patternMemory + "1";
    }
    else if ( randomButton == 2) {
        buttonPress(2);
        patternMemory = patternMemory + "2";
    }
    else if ( randomButton == 3) {
    buttonPress(3);
        patternMemory = patternMemory + "3";
    }
    userInput(inputByUser, patternMemory);

}
var patternMemory = "0";
var level = 0;
function startGame() {
    setTimeout( function() {
        $(document).click(function (event) {
        $(document).off("click")
        gameLogic();
        });
    }, 1000)
    
}

startGame();




