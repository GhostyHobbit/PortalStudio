import { Actor, Engine, Vector, Input, Keys, Camera, ScreenElement, BoundingBox, CollisionType } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class Floor extends Actor {

    constructor() {
        super({width: Resources.Floor.width, height: Resources.Floor.height})
        this.body.collisionType = CollisionType.Fixed
        this.graphics.use(Resources.Floor.toSprite())
    }
}