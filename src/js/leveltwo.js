import { Actor, Scene, Vector } from "excalibur"
import { Resources } from './resources.js'
import { Alchemist } from './alchemist.js'
import { Letter } from './letter.js'
import { InvisibleFloor } from './invisiblefloor.js'
import { Door } from './door.js'

export class LevelTwo extends Scene {
    onInitialize(engine) {

    }
    onActivate(ctx) {
        console.log(this.engine)
        const leveltwoscreen = new Actor()
        leveltwoscreen.pos = new Vector(1280, 360)
        leveltwoscreen.graphics.use(Resources.levelTwoPlaceholder.toSprite())
        this.add(leveltwoscreen)

        const invisfloor = new InvisibleFloor()
        invisfloor.pos = new Vector(1900, 580)
        this.add(invisfloor)

        const letter = new Letter()
        letter.pos = new Vector(2060, 260)
        this.add(letter)

        const alchemist = new Alchemist()
        alchemist.pos = new Vector(800, 400)
        alchemist.graphics.use(Resources.Alchemist.toSprite())
        this.add(alchemist)
    }
    onDeactivate() {
        this.clear()
    }
}