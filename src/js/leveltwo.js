import { Actor, Scene, Vector } from "excalibur"
import { Resources } from './resources.js'
import { Alchemist } from './alchemist.js'
import { Letter } from './letter.js'
import { InvisibleFloor } from './invisiblefloor.js'
import { Door } from './levelone/door.js'

export class LevelTwo extends Scene {
    onInitialize(engine) {

    }
    onActivate(ctx) {
        console.log(this.engine)
        const leveltwoscreen = new Actor()
        leveltwoscreen.pos = new Vector(1890, 360)
        leveltwoscreen.graphics.use(Resources.levelTwo.toSprite())
        this.add(leveltwoscreen)

        const invisfloor = new InvisibleFloor()
        invisfloor.pos = new Vector(1800, 640)
        this.add(invisfloor)

        const letter = new Letter()
        letter.pos = new Vector(580, 460)
        this.add(letter)

        const letter2 = new Letter()
        letter2.pos = new Vector(3160, 460)
        this.add(letter2)

        const alchemist = new Alchemist()
        alchemist.pos = new Vector(1900, 440)
        alchemist.graphics.use(Resources.Alchemist.toSprite())
        this.add(alchemist)
    }
    onDeactivate() {
        this.clear()
    }
}