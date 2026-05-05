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
    }
   
    update(time, delta){
    if(time > 50000){
        this.scene.switch('titre_scene');
    }
    }
}
export default Apropos
