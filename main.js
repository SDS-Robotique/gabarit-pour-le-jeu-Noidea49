import Intro from './intro.js'
import Titre from './titre.js'
import Game from './game.js'
import Apropos from'./apropos.js'

const intro_scene = new Intro();
const titre_scene = new Titre();
const game_scene = new Game();
const apropos_scene = new Apropos();

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 100 },
            debug: true
        }
    },
};

var game = new Phaser.Game(config);

game.scene.add('intro_scene', intro_scene);
game.scene.add('titre_scene', titre_scene);
game.scene.add('game_scene', game_scene);
game.scene.add('apropos_scene',apropos_scene);

game.scene.start('intro_scene');

function preload ()
{ this.load.image('BG','assets/images/BG.jpeg');

}

function create ()
{ bg = this.add.image(0, 0,'BG');
    bg.setOrigin(0,0);

}

function update ()
{
}
    


