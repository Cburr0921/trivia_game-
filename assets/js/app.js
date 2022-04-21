var gameContainer = document.getElementById("game-container")
var game = {
    currentQuestion: 0,
    correctQuestions: 0,
    incorrectQuestions: 0,
    time: 10,
    questions:[
        {
            q:"whats your name?",
            o:["amber","david","christian"],
            a:2
        },
        {
            q:"whats your name?",
            o:["amber","david","christian"],
            a:2
        },
        {
            q:"whats your name?",
            o:["amber","david","christian"],
            a:2
        },
        {
            q:"whats your name?",
            o:["amber","david","christian"],
            a:2
        }
    ],
    mainDisplay: function(){
       /* 
       create instructions for the game 
       play game button
       */
        gameContainer.innerHTML = ""

        var h3 = document.createElement("h3")
        h3.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit pharetra eleifend. Etiam pharetra, nisi non dignissim euismod, nisi orci vestibulum tellus, sed bibendum sem nisl lacinia diam. Quisque in cursus orci. Curabitur sit amet tellus posuere quam tincidunt ultricies. Vestibulum consectetur at dui ac luctus"
        gameContainer.appendChild(h3)
        
        var btn = document.createElement("button")
        btn.textContent = "Start Game"
        btn.setAttribute("id", "start-game")
        btn.setAttribute("class", "btn btn-primary")
        btn.setAttribute("type", "button")
        gameContainer.appendChild(btn)
    }
     
}

document.addEventListener("click", function(event){
    //on click start game 
    if(event.target.id === "start-game"){
        console.log("start game")
    }
})

game.mainDisplay()