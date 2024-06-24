import { Actor, Engine, Vector, Input } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Label, FontUnit, Font} from "excalibur";
import { Game } from "./game.js";
import { Alchemist } from "./alchemist.js";

export class Dialogue extends Actor {

    
    label = new Label({
        text: 'Score: 0',
        pos: new Vector (-550, -100),
        width: 1000,
        font: new Font({
            family: 'copperplate gothic',
            size: 30,
            unit: FontUnit.Px
        })
    })
    dialogueShowing = false

    constructor() {
        super({width: Resources.Dialogue.width, height: Resources.Dialogue.height})
    }

    onInitialize() {
        this.graphics.use(Resources.Dialogue.toSprite())
    
        this.addChild(this.label)
     }

     onPostUpdate() {
        // this.pos = new Vector (this.scene.actors[2].pos.x, 200)
     }
     dialogueFlow(text) {
        this.label.text = text
     }
    //  cinemaDialogue(text) {
    //     this.label.text = text
    //  }
}