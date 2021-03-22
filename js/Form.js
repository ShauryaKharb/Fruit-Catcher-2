class Form{
    constructor(){
       this.input = createInput("Name");
       this.button = createButton('Play');
       this.reset = createButton('RESET');
       this.greeting = createElement('h2');
       this.title = createElement('h2');
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }
    display() {
        // this.reset.hide();
        this.title.html("FRUIT CATCHER");
        this.title.position(350, 50);
        this.title.style('font-size', '70px');
        this.title.style('color', 'skyblue');
        this.input.position(550,400);
        this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.style('background', 'lavender');
        this.button.position(560,500);
        this.button.style('width', '200px');
        this.button.style('height', '40px');
        this.button.style('background', 'lightpink');
        this.reset.style('width', '70px');
        this.reset.style('height', '40px');
        this.reset.style('background', 'lightgreen');
        this.reset.position(1190,650);

        this.button.mousePressed(() => {
            // HIDE
            this.input.hide();
            this.button.hide();

            // PLAYER
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.updateInfo();
            player.updateCount(playerCount);

            // GREETING
            this.greeting.html("Hello " + player.name)
            this.greeting.position(400,250);
            this.greeting.style('color', 'white');
            this.greeting.style('font-size', '100px');

            if(playerCount===2){
                game.update(1);
            }
        });

        this.reset.mousePressed(()=>{
            game.reset();
        })

    }
}