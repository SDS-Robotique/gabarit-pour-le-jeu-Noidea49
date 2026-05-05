

class Intro extends Phaser.Scene {
    constructor(){
        super({key : 'intro_scene'})
    }

    init(data){
    }
    
    preload(){
   this.load.image('Studio','assets/Sans titre.jpg');
    }
    
    create(data){
 let bg = this.add.image(40,0,'Studio');
     bg.setOrigin(0,0);
 
    }
    
    update(time, delta){
    if(time > 6000){
        this.scene.switch('titre_scene');
    }
    }
}
export default Intro
