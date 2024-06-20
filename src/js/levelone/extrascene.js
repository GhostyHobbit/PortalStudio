import { Actor, Scene, Vector, Input, Keys, Camera, BoundingBox } from "excalibur"
import { Resources } from '../resources.js'
import { Alchemist } from '../alchemist.js'
import { Letter } from '../letter.js'
import { InvisibleFloor } from '../invisiblefloor.js'
import { SceneTransition } from "../sceneTransition.js"
import { Door } from "./door.js"

export class LOneExtraScene extends Scene {

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

}