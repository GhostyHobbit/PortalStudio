import { Actor, Scene, Vector, Input, Keys, Camera, BoundingBox } from "excalibur"
import { Resources } from '../resources.js'
import { Alchemist } from '../alchemist.js'
import { Letter } from '../letter.js'
import { InvisibleFloor } from '../invisiblefloor.js'
import { SceneTransition } from "../sceneTransition.js"
import { Dialogue } from '../dialogue.js'
import { Door } from "./door.js"

export class LOneExtraSceneBad extends Scene {

    dialogueText = ['cracked', 'chickens', 'definitely', 'say', 'wac']
    
    constructor() {
        super()
    }

    onInitialize(engine) {

    }
    onActivate(ctx) {
        console.log(this.engine)
        const levelonescreenone = new Actor()
        levelonescreenone.pos = new Vector(640, 360)
        levelonescreenone.graphics.use(Resources.L1ExtraBad.toSprite())
        this.add(levelonescreenone)

        const invisfloor = new InvisibleFloor()
        invisfloor.pos = new Vector(640, 700)
        this.add(invisfloor)

        const doortwo = new Door()
        doortwo.graphics.use(Resources.L1Door.toSprite())
        doortwo.pos = new Vector(140,440)
        this.add(doortwo)

        const alchemist = new Alchemist()
        alchemist.pos = new Vector(530, 600)
        alchemist.x = 1280
        alchemist.graphics.use(Resources.Alchemist.toSprite())
        this.add(alchemist)
        // Resources.LevelOneMusic.play(0.8);

        const letter = new Letter()
        letter.pos = new Vector(1100 ,600)
        this.add(letter)
    }
    onDeactivate() {
        this.clear()
    }

    changeRoom() {
        this.engine.goToScene('l1scenetwo')
    }

    sceneDialogue(number) {
        this.actors[6].dialogueFlow(this.dialogueText[number])
    }
    LetterGood(number) {
        this.actors[6].dialogueFlow(this.dialogueText[number])
    }

}