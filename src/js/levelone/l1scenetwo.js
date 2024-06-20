import { Actor, Scene, Vector, Input, Keys } from "excalibur"
import { Resources } from '../resources.js'
import { Alchemist } from '../alchemist.js'
import { Letter } from '../letter.js'
import { InvisibleFloor } from '../invisiblefloor.js'
import { SceneTransition } from "../sceneTransition.js"
import { Door } from "./door.js"

export class LOneSceneTwo extends Scene {

    constructor() {
        super()
    }

    onInitialize(engine) {

    }
    onActivate(ctx) {
        console.log(this.engine)
        const levelonescreenone = new Actor()
        levelonescreenone.pos = new Vector(1900, 360)
        levelonescreenone.graphics.use(Resources.LevelOneSceneTwo.toSprite())
        this.add(levelonescreenone)

        const invisfloor = new InvisibleFloor()
        invisfloor.pos = new Vector(1900, 700)
        this.add(invisfloor)

        const doorone = new Door()
        doorone.graphics.use(Resources.L1Door.toSprite())
        doorone.pos = new Vector(1717,437)
        this.add(doorone)

        const doortwo = new Door()
        doortwo.graphics.use(Resources.L1Door.toSprite())
        doortwo.pos = new Vector(3017,437)
        this.add(doortwo)

        const alchemist = new Alchemist()
        alchemist.pos = new Vector(1790, 600)
        alchemist.graphics.use(Resources.Alchemist.toSprite())
        this.add(alchemist)
        // Resources.LevelOneMusic.play(0.8);
    }
    onDeactivate() {
        this.clear()
    }

    changeScene() {
        this.engine.goToScene('levelone')
    }
}