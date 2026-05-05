

var bg;
var keySpace;

class Titre extends Phaser.Scene {
    constructor(){
        super({key : 'titre_scene'})
    }

    init(data){
    }
   
    preload(){
    this.load.image('title', 'assets/Titre.jpg');
    }
   
    create(data){
    bg = this.add.image(0, 0, 'title');
    bg.setOrigin(0,0);

    // Ajout de la barre d'espacement
    keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }
   
    update(time, delta){
        if(keySpace.isDown){
        this.scene.switch('game_scene');
        }if(time> 10000){this.scene.switch('apropos_scene');}
    }
   
}export default Titre
