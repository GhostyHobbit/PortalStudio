import { Actor, Scene, Vector, Input, Keys, Sound } from "excalibur"
import { Resources } from '../resources.js'
import { Alchemist } from '../alchemist.js'
import { Letter } from '../letter.js'
import { InvisibleFloor } from '../invisiblefloor.js'
import { SceneTransition } from "../sceneTransition.js"
import { Door } from "./door.js"

export class LevelOne extends Scene {

    constructor() {
        super()
    }

    onInitialize(engine) {

    }
    onActivate(ctx) {
        console.log(this.engine)
        const levelonescreenone = new Actor()
        levelonescreenone.pos = new Vector(1900, 360)
        levelonescreenone.graphics.use(Resources.LevelOneScreenOne.toSprite())
        this.add(levelonescreenone)

        const invisfloor = new InvisibleFloor()
        invisfloor.pos = new Vector(1900, 700)
        this.add(invisfloor)

        const door = new Door()
        door.graphics.use(Resources.L1Door.toSprite())
        door.pos = new Vector(2720,437)
        this.add(door)

        const alchemist = new Alchemist()
        alchemist.pos = new Vector(0, 600)
        alchemist.graphics.use(Resources.Alchemist.toSprite())
        this.add(alchemist)
        Resources.MainThemeMusic.stop();
        Resources.LevelOneMusic.play(1);

        const scenetrans = new SceneTransition()
        scenetrans.pos = new Vector(3840, 450)
        this.add(scenetrans)
    }
    onDeactivate() {
        this.clear()
    }

    changeRoom() {
        this.engine.goToScene('l1scenetwo')
    }

    changeScene() {
        this.engine.goToScene('l1extrabad')
    }
}