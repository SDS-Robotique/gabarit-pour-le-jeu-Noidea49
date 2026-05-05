var player
var cursors;
var keySpace;
    
    
class Game extends Phaser.Scene {    
    constructor(){
        super({key : 'game_scene'})
    }

    init(data){
    
    }
    
    preload(){
     this.load.image('Background', 'assets/Background.jpg');
     this.load.image('knight', 'assets/pixil-frame.png');
   
    }
    
    create(data){
        let bg = this.add.image(60, 0, 'Background');
    bg.setOrigin(0,0);
    player = this.physics.add.sprite(400, 300, 'knight');
    player.setScale(0.7);
    player.setBounce(0.1);

   player.setCollideWorldBounds(true);

   this.physics.add.collider(player,//platforms here);
   
    
 cursors = this.input.keyboard.createCursorKeys())
 keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
}

 update(time, delta){
      if (cursors.left.isDown)
        {
            player.setVelocityX(-160);
        }
        else if (cursors.right.isDown)
        {
            player.setVelocityX(160);
        }
        else
        {
            player.setVelocityX(0);
        }
        if (keySpace.isDown)
        {
            player.setVelocityY(-300);  
        }


        
    }
}

export default Game

