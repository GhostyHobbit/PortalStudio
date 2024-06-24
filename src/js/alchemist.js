
import { Actor, Engine, Vector, Input, Keys, Camera, ScreenElement, BoundingBox, CollisionType, Label, Axes, Buttons } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { SceneTransition } from "./sceneTransition.js"
import { Dialogue } from "./dialogue.js"
import { Letter } from "./letter.js"
import { masterAlchemist } from "./masteralchemist.js"

export class Alchemist extends Actor {

    speed = 0
    existingDialogue = false
    dialogueCount = 0
    dialogue = new Dialogue()
    levelEnded = false
    dialogueText = ['cracked', 'chickens', 'definitely', 'say', 'wac']
    x = 3780

    constructor() {
        super({width: Resources.Alchemist.width, height: Resources.Alchemist.height})
        this.body.collisionType = CollisionType.Active
    }

    onInitialize(engine) {
        this.game = engine

        this.on('precollision', (event) => this.interact(event))

        this.scene.camera.strategy.lockToActor(this)
        this.scene.camera.strategy.limitCameraBounds(new BoundingBox(0, 0, this.x, 720))
        this.on('collisionstart', (event) => this.sceneTransition(event))

        console.log(this.scene.engine.mygamepad)
    }

    onPreUpdate(engine) {
        if (this.existingDialogue === true){
            this.vel = new Vector(0, 0)
        } else if (engine.input.keyboard.isHeld(Input.Keys.D)) {
            this.speed = 200
            this.vel = new Vector(this.speed, 0)
            this.graphics.flipHorizontal = false
        } else if (engine.input.keyboard.isHeld(Input.Keys.A)) {
            this.speed = -200
            this.vel = new Vector(this.speed, 0)
            this.graphics.flipHorizontal = true 
        } else if(engine.mygamepad) {
            const x = engine.mygamepad.getAxes(Axes.LeftStickX)
            this.vel = new Vector(x * 200, 0)
            if (this.vel.x < 0) {
                this.graphics.flipHorizontal = true 
            } else if (this.vel.x > 0) {
                this.graphics.flipHorizontal = false
            }
        } else {
            this.vel = new Vector(0, 0) 
        }
    }

    interact(event) {
        if(event.other instanceof Letter || event.other instanceof masterAlchemist) {
            let keyCommand
            if (this.scene.engine.mygamepad) {
                keyCommand = this.scene.engine.mygamepad.wasButtonReleased(Buttons.Face1)
            } else if (!this.scene.engine.mygamepad) {
                keyCommand = this.game.input.keyboard.wasPressed(Input.Keys.E)
            }
            
            if (keyCommand) {
                if (this.existingDialogue === false) {
                    this.existingDialogue = true
                    this.dialogue.pos = new Vector(this.pos.x, 200)
                    this.scene.add(this.dialogue)
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

    controllerInteract(event) {
        if (this.existingDialogue === false) {
            this.existingDialogue = true
            this.scene.add(this.dialogue)
            this.scene.sceneDialogue(0)
        } else if (this.existingDialogue === true) {
            this.dialogueCount++
            console.log(this.dialogueCount)
            if (this.dialogueCount >= this.scene.dialogueText.length) {
                console.log(this.scene.actors)
                this.scene.actors[6].kill()
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

    sceneTransition(event) {
        console.log('collision')
        if(event.other instanceof SceneTransition && this.levelEnded === false) {
            this.levelEnded = true
            //you can reuse this function in every scene, makes for less code here
            this.scene.changeScene()
        }
    }
}