import { Actor, Scene, Vector, Input, Keys, Camera, BoundingBox } from "excalibur"
import { Resources } from '../resources.js'
import { Alchemist } from '../alchemist.js'
import { Letter } from '../letter.js'
import { InvisibleFloor } from '../invisiblefloor.js'
import { SceneTransition } from "../sceneTransition.js"
import { Dialogue } from '../dialogue.js'
import { Door } from "./door.js"

export class LOneExtraSceneBad extends Scene {

    dialogueText = [
        'Look around you. Being an alchemist is all \nabout learning, exploring and creation. This \nplace is a good way to show you that. We \nuse everything that is available for us to \ncreate.',
        'This place was built by humans for a better, \neasier life. It was built to perform and \nassist the miracle of creation. What a shame \nto see it go to waste.' 
    ]
    
    constructor() {
        super()
    }

    onInitialize(engine) {
    }
    onActivate(ctx) {
        this.engine.levelOneLetterFound = true
        console.log(this.engine.levelOneLetterFound)

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
        // Resources.LevelOneMusic.play(0.8);

        const letter = new Letter()
        letter.pos = new Vector(1100 ,600)
        this.add(letter)

        const alchemist = new Alchemist()
        alchemist.pos = new Vector(530, 600)
        alchemist.x = 1280
        alchemist.graphics.use(Resources.Alchemist.toSprite())
        this.add(alchemist)
    }
    onDeactivate() {
        this.clear()
    }

    changeRoom() {
        this.engine.goToScene('l1scenetwo')
    }
    // bad letter dialogue
    sceneDialogue(number) {
        this.actors[5].dialogueFlow(this.dialogueText[number])
    }

}