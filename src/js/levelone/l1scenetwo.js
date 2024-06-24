import { Actor, Scene, Vector, Input, Keys, Camera, BoundingBox } from "excalibur"
import { Resources } from '../resources.js'
import { Alchemist } from '../alchemist.js'
import { Letter } from '../letter.js'
import { InvisibleFloor } from '../invisiblefloor.js'
import { SceneTransition } from "../sceneTransition.js"
import { Door } from "./door.js"
import { Dialogue } from "../dialogue.js"

export class LOneSceneTwo extends Scene {

    dialogueText = [
        'Hello there, mysterious traveler! What brings you to the \nSchiecentrale? Oh? You’re trying to find your way home, I see. I wish \nyou luck on your journey, however it may go.',
        'Beware that any innocent looking step could change your path. \nThis world is full of mystery that I don’t have the answers to either, \nbut I hope we will both find the right path.' 
    ]

    constructor() {
        super()
    }

    onInitialize(engine) {

    }
    onActivate(ctx) {
        console.log(this.engine.levelOneLetterFound)
        const levelonescreenone = new Actor()
        levelonescreenone.pos = new Vector(1280, 360) // -220
        levelonescreenone.graphics.use(Resources.LevelOneSceneTwo.toSprite())
        this.add(levelonescreenone)

        const invisfloor = new InvisibleFloor()
        invisfloor.pos = new Vector(1280, 700)
        this.add(invisfloor)

        const doorone = new Actor()
        doorone.graphics.use(Resources.L1Door.toSprite())
        doorone.pos = new Vector(1097,442)
        this.add(doorone)

        if (this.engine.levelOneLetterFound == false) {
            const doortwo = new Door()
            doortwo.graphics.use(Resources.L1Door.toSprite())
            doortwo.pos = new Vector(2050,445)
            this.add(doortwo)
        }

        const npc = new Letter()
        npc.pos = new Vector(1380, 487)
        npc.SpriteActive = false
        npc.graphics.use(Resources.LittleGuy.toSprite())
        this.add(npc)

        const alchemist = new Alchemist()
        alchemist.pos = new Vector(1170, 600)
        alchemist.x = 2560
        alchemist.graphics.use(Resources.Alchemist.toSprite())
        this.add(alchemist)
        // Resources.LevelOneMusic.play(0.8);

        const scenetrans = new SceneTransition()
        scenetrans.pos = new Vector(2560, 450)
        this.add(scenetrans)
    }
    onDeactivate() {
        this.clear()
    }

    changeRoom() {
        this.engine.goToScene('l1extra')
    }

    changeScene() {
        this.engine.goToScene('leveltwo')
    }
    // npc dialogue
    sceneDialogue(number) {
        if (this.engine.levelOneLetterFound == false) { 
            this.actors[7].dialogueFlow(this.dialogueText[number])
        } else {
            console.log(this.actors)
            this.actors[6].dialogueFlow(this.dialogueText[number])
        }
        
    }
}