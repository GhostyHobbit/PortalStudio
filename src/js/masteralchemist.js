import { Actor, Engine, Vector, Input, Keys, Camera, ScreenElement, BoundingBox, CollisionType, Label } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { SceneTransition } from "./sceneTransition.js"
import { Dialogue } from "./dialogue.js"
import { Letter } from "./letter.js"
import { Alchemist } from './alchemist.js'

export class masterAlchemist extends Actor {

    constructor() {
        super({width: Resources.MasterBack.width, height: Resources.MasterBack.height})
        this.body.collisionType = CollisionType.Passive
    }
    
    onInitialize() {
        this.on('collisionstart', (event) => this.masterTurn(event))
        this.on('collisionend', (event) => this.masterTurnBack(event))
    }
    masterTurn(event) {
        if (event.other instanceof Alchemist) {
            this.graphics.use(Resources.MasterTurned.toSprite())
            // this.graphics.flipHorizontal = true
        }
    }
    masterTurnBack(event) {
        if (event.other instanceof Alchemist) {
            this.graphics.use(Resources.MasterBack.toSprite())
        }
    }

}