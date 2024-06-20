import { Actor, Engine, Vector, Input } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class Letter extends Actor {

    letterText

    constructor() {
        super({width: Resources.Letter.width, height: Resources.Letter.height})
    }

    onInitialize() {
        this.graphics.use(Resources.Letter.toSprite())
    }
}