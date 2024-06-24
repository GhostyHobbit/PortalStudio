import { Actor, Engine, Vector, Input, Keys, Camera, ScreenElement, BoundingBox } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Alchemist } from "./alchemist.js"
import { Dialogue } from "./dialogue.js"

export class TriggerBox extends Actor {

    existingDialogue = false
    dialogueCount = 0
    dialogue = new Dialogue()
    levelEnded = false

    constructor() {
        super({width: 700, height: 50})
        this.graphics.use(Resources.SceneTransition.toSprite())
        //this.pos = new Vector(3740, 450)
    }
    onInitialize() {
        this.on('precollision', (event) => this.triggerCinema(event))
    }

    triggerCinema(event) {
        if (event.other instanceof Alchemist) {
            let keyCommand
            if (this.scene.engine.mygamepad) {
                keyCommand = this.scene.engine.mygamepad.wasButtonReleased(Buttons.Face1)
            } else if (!this.scene.engine.mygamepad) {
                keyCommand = this.scene.engine.input.keyboard.wasPressed(Input.Keys.E)
            }
            
            if (keyCommand) {
                if (this.existingDialogue === false) {
                    this.existingDialogue = true
                    this.dialogue.pos = new Vector(this.pos.x, 200)
                    this.scene.add(this.dialogue)
                    // this.scene.actors[6].dialogueFlow(`I am your Master Alchemist. You, my apprentice, have to find your way through these tests. These are tests of faith, \ncreativity and exploration. Every choice you make will influence your future.`)
                    this.scene.sceneDialogue(0)
                } else if (this.existingDialogue === true) {
                    this.dialogueCount++
                    if (this.dialogueCount >= this.scene.dialogueText.length) {
                        this.scene.actors[this.scene.actors.length - 2].kill()
                        this.existingDialogue = false
                        this.dialogueCount = 0
                    } else {
                        //you can reuse this in every scene to run dialogue
                        //for questions --> ask Lucas
                        this.scene.sceneDialogue(this.dialogueCount)
                        //this.scene.letterGood(this.dialogueCount)
                        //this.scene.letterBad(this.dialogueCount)
                    }
                }
            }
        }
    }
}