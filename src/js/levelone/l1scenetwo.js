import { Actor, Scene, Vector, Input, Keys, Camera, BoundingBox } from "excalibur"
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

        const doortwo = new Door()
        doortwo.graphics.use(Resources.L1Door.toSprite())
        doortwo.pos = new Vector(2050,445)
        this.add(doortwo)

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
}