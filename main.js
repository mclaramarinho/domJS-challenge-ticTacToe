// player 1 = X
// player 2 = O

var victory = false; //true if there's a winner

var chosen = []; //in use
var player = 1; //in use
var xo; //in use

//DO NOT CHANGE THE CODE BELOW

(document.querySelectorAll(".box")).forEach(item => {

    item.addEventListener("click", function(){ //adds an event listener to each grid box


        var resetButton = document.querySelector(".btn-danger");
        resetButton.addEventListener("click", function(){
            window.location.reload();
        });

        var choice = this.id; //gets the id of the box clicked

        var count;

        switch(choice){
            case "box-1":
                count=1;
            break;
            case "box-2":
                count=2;
            break;
            case "box-3":
                count=3;
            break;
            case "box-4":
                count=4;
            break;
            case "box-5":
                count=5;
            break;
            case "box-6":
                count=6;
            break;
            case "box-7":
                count=7;
            break;
            case "box-8":
                count=8;
            break;
            case "box-9":
                count=9;
            break;
        }

        //SETTING THE IMAGE ON THE BOX CHOSEN
        if(chosen.includes(choice)){ //checks if the selected box already contains an image
            alert("choose another box")
        }else{ //if it does not contain an image, do the following:

            if(player==1){
                xo = "x";
                var ox = "o";
            }else{
                xo = "o";
                var ox = "x";
            }
            
            document.getElementById("play-img"+count).setAttribute('src', 'images/'+xo+'.png'); //sets the image on the box clicked
            chosen.push(choice); //adds the position to the chosen array

            //Switches the turn to the next player
            if(player==1){
                player="2";
            }else{
                player="1";
            }
            
            //Gets the source of each image placed on the boxes
            var box1 = document.getElementById("play-img1").getAttribute('src');
            var box2 = document.getElementById("play-img2").getAttribute('src');
            var box3 = document.getElementById("play-img3").getAttribute('src');
            var box4 = document.getElementById("play-img4").getAttribute('src');
            var box5 = document.getElementById("play-img5").getAttribute('src');
            var box6 = document.getElementById("play-img6").getAttribute('src');
            var box7 = document.getElementById("play-img7").getAttribute('src');
            var box8 = document.getElementById("play-img8").getAttribute('src');
            var box9 = document.getElementById("play-img9").getAttribute('src');

            var boxToCheck;
            
            //CHECKING FOR VICTORY
            if(chosen.includes("box-1")&&chosen.includes("box-4")&&chosen.includes("box-7")){ //if these places have been picked up already
                if(box1==box4 && box4==box7){ //and if these places contain the same image source
                    victory = true;
                    boxToCheck = box1;
                }
            }if(chosen.includes("box-2")&&chosen.includes("box-5")&&chosen.includes("box-8")){
                if(box2==box5 && box5==box8){
                    victory = true;
                    boxToCheck = box2;
                }
            }if(chosen.includes("box-3")&&chosen.includes("box-6")&&chosen.includes("box-9")){
                if(box3==box6 && box6==box9){
                    victory = true;
                    boxToCheck = box3;
                }
            }if(chosen.includes("box-1")&&chosen.includes("box-2")&&chosen.includes("box-3")){
                if(box1==box2 && box2==box3){
                    victory = true;
                    boxToCheck = box1;
                }
            }if(chosen.includes("box-4")&&chosen.includes("box-5")&&chosen.includes("box-6")){
                if(box4==box5 && box5==box6){
                    victory = true;
                    boxToCheck = box4;
                }
            }if(chosen.includes("box-7")&&chosen.includes("box-8")&&chosen.includes("box-9")){
                if(box7==box8 && box8==box9){
                    victory = true;
                    boxToCheck = box7;
                }
            }if(chosen.includes("box-1")&&chosen.includes("box-5")&&chosen.includes("box-9")){
                if(box1==box5 && box5==box9){
                    victory = true;
                    boxToCheck = box1;
                }
            }if(chosen.includes("box-3")&&chosen.includes("box-5")&&chosen.includes("box-7")){
                if(box3==box5 && box5==box7){
                    victory = true;
                    boxToCheck = box3;
                }
            }            

            if (victory===true){ 
                if(boxToCheck == "images/x.png"){ //checks the source of the image to know who won
                    alert("Player 1 is the winner!");
                }else{
                    alert("Player 2 is the winner!");
                }
            }else if (victory===false && chosen.length==9){ //if there's no victory and all the boxes are already filled, it's a tie
                alert("It's a tie");
            }
            
            //CHANGING THE TURNS DISPLAY
            document.getElementById("img-"+xo).style.opacity='0.5'; //turns down the opacity of the current player
            document.getElementById("img-"+ox).style.opacity='1'; //turns up the opacity of the next player

            document.getElementById("current-turn").innerText = "Current turn: Player " + player + "!"; //tells the player who's playing next
        }       
    });
});

(document.querySelectorAll(".box")).forEach(item => {

    item.addEventListener("touchstart", function(){ //adds an event listener to each grid box


        var resetButton = document.querySelector(".btn-danger");
        resetButton.addEventListener("touchstart", function(){
            window.location.reload();
        });
        
        var choice = this.id; //gets the id of the box clicked

        var count;

        switch(choice){
            case "box-1":
                count=1;
            break;
            case "box-2":
                count=2;
            break;
            case "box-3":
                count=3;
            break;
            case "box-4":
                count=4;
            break;
            case "box-5":
                count=5;
            break;
            case "box-6":
                count=6;
            break;
            case "box-7":
                count=7;
            break;
            case "box-8":
                count=8;
            break;
            case "box-9":
                count=9;
            break;
        }

        //SETTING THE IMAGE ON THE BOX CHOSEN
        if(chosen.includes(choice)){ //checks if the selected box already contains an image
            alert("choose another box")
        }else{ //if it does not contain an image, do the following:

            if(player==1){
                xo = "x";
                var ox = "o";
            }else{
                xo = "o";
                var ox = "x";
            }
            
            document.getElementById("play-img"+count).setAttribute('src', 'images/'+xo+'.png'); //sets the image on the box clicked
            chosen.push(choice); //adds the position to the chosen array

            //Switches the turn to the next player
            if(player==1){
                player="2";
            }else{
                player="1";
            }
            
            //Gets the source of each image placed on the boxes
            var box1 = document.getElementById("play-img1").getAttribute('src');
            var box2 = document.getElementById("play-img2").getAttribute('src');
            var box3 = document.getElementById("play-img3").getAttribute('src');
            var box4 = document.getElementById("play-img4").getAttribute('src');
            var box5 = document.getElementById("play-img5").getAttribute('src');
            var box6 = document.getElementById("play-img6").getAttribute('src');
            var box7 = document.getElementById("play-img7").getAttribute('src');
            var box8 = document.getElementById("play-img8").getAttribute('src');
            var box9 = document.getElementById("play-img9").getAttribute('src');

            var boxToCheck;
            
            //CHECKING FOR VICTORY
            if(chosen.includes("box-1")&&chosen.includes("box-4")&&chosen.includes("box-7")){ //if these places have been picked up already
                if(box1==box4 && box4==box7){ //and if these places contain the same image source
                    victory = true;
                    boxToCheck = box1;
                }
            }if(chosen.includes("box-2")&&chosen.includes("box-5")&&chosen.includes("box-8")){
                if(box2==box5 && box5==box8){
                    victory = true;
                    boxToCheck = box2;
                }
            }if(chosen.includes("box-3")&&chosen.includes("box-6")&&chosen.includes("box-9")){
                if(box3==box6 && box6==box9){
                    victory = true;
                    boxToCheck = box3;
                }
            }if(chosen.includes("box-1")&&chosen.includes("box-2")&&chosen.includes("box-3")){
                if(box1==box2 && box2==box3){
                    victory = true;
                    boxToCheck = box1;
                }
            }if(chosen.includes("box-4")&&chosen.includes("box-5")&&chosen.includes("box-6")){
                if(box4==box5 && box5==box6){
                    victory = true;
                    boxToCheck = box4;
                }
            }if(chosen.includes("box-7")&&chosen.includes("box-8")&&chosen.includes("box-9")){
                if(box7==box8 && box8==box9){
                    victory = true;
                    boxToCheck = box7;
                }
            }if(chosen.includes("box-1")&&chosen.includes("box-5")&&chosen.includes("box-9")){
                if(box1==box5 && box5==box9){
                    victory = true;
                    boxToCheck = box1;
                }
            }if(chosen.includes("box-3")&&chosen.includes("box-5")&&chosen.includes("box-7")){
                if(box3==box5 && box5==box7){
                    victory = true;
                    boxToCheck = box3;
                }
            }            

            if (victory===true){ 
                if(boxToCheck == "images/x.png"){ //checks the source of the image to know who won
                    alert("Player 1 is the winner!");
                }else{
                    alert("Player 2 is the winner!");
                }
            }else if (victory===false && chosen.length==9){ //if there's no victory and all the boxes are already filled, it's a tie
                alert("It's a tie");
            }
            
            //CHANGING THE TURNS DISPLAY
            document.getElementById("img-"+xo).style.opacity='0.5'; //turns down the opacity of the current player
            document.getElementById("img-"+ox).style.opacity='1'; //turns up the opacity of the next player

            document.getElementById("current-turn").innerText = "Current turn: Player " + player + "!"; //tells the player who's playing next
        }       
    });
});