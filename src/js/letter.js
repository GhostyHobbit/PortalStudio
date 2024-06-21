import { Actor, Engine, Vector, Input } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class Letter extends Actor {
    SpriteActive = true
    letterText

    constructor() {
        super({width: Resources.Letter.width, height: Resources.Letter.height})
    }

    onInitialize() {
        if (this.SpriteActive === true) {
            this.graphics.use(Resources.Letter.toSprite())
        }
    }
}