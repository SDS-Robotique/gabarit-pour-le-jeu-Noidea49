var keySpace;

class Apropos extends Phaser.Scene {
    constructor(){
        super({key : 'apropos_scene'})
    }

    init(data){
    }
   
    preload(){
  this.load.image('Propos','assets/A propos.png');
    }
   
    create(data){
    let bg = this.add.image(0,0,'Propos');
     bg.setOrigin(0,0);
     keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }
    
 
    
    
   
    update(time, delta){
    if(keySpace.isDown){
        this.scene.switch('game_scene');
    }
    }
}
export default Apropos
