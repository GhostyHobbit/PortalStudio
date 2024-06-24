import { Actor, Scene, Vector, Input, Keys, Camera, BoundingBox } from "excalibur"
import { Resources } from '../resources.js'
import { Alchemist } from '../alchemist.js'
import { Letter } from '../letter.js'
import { InvisibleFloor } from '../invisiblefloor.js'
import { SceneTransition } from "../sceneTransition.js"
import { Dialogue } from '../dialogue.js'
import { Door } from "./door.js"

export class LOneExtraScene extends Scene {

    dialogueText = [
        'Look around you. Being an alchemist is all about creation, this \nplace is a good way to show you that. We use nature’s resources \nto help, to heal, to create. As long as we respect it and only use \nits gifts sparingly we can call ourselves alchemists.',
        'Take this place as an example, Little Alchemist, humans used it \nbare. Now they aren’t inflicting pain onto nature anymore and \nthis place can be reclaimed.' 
    ]
    
    constructor() {
        super()
    }

    onInitialize(engine) {

    }
    onActivate(ctx) {
        console.log(this.engine)
        const levelonescreenone = new Actor()
        levelonescreenone.pos = new Vector(640, 360)
        levelonescreenone.graphics.use(Resources.L1Extra.toSprite())
        this.add(levelonescreenone)

        const invisfloor = new InvisibleFloor()
        invisfloor.pos = new Vector(640, 700)
        this.add(invisfloor)

        const doortwo = new Door()
        doortwo.graphics.use(Resources.L1Door.toSprite())
        doortwo.pos = new Vector(457,440)
        this.add(doortwo)

        const letter = new Letter()
        letter.pos = new Vector(790 ,530)
        letter.SpriteActive = false
        this.add(letter)

        const alchemist = new Alchemist()
        alchemist.pos = new Vector(530, 600)
        alchemist.x = 1280
        alchemist.graphics.use(Resources.Alchemist.toSprite())
        this.add(alchemist)
        // Resources.LevelOneMusic.play(0.8);
    }
    onDeactivate() {
        this.clear()
    }

    changeRoom() {
        this.engine.goToScene('l1scenetwo')
    }
    // good letter dialogue
    sceneDialogue(number) {

        this.actors[5].dialogueFlow(this.dialogueText[number])
    }

}