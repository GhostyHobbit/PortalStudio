import { Actor, Scene, Vector } from "excalibur"
import { Resources } from './resources.js'
import { Alchemist } from './alchemist.js'
import { Letter } from './letter.js'
import { Floor } from './floors.js'
import { InvisibleFloor } from './invisiblefloor.js'
import { Door } from './door.js'

export class LevelFour extends Scene {

    dialogueText = ['cracked', 'chickens', 'definitely', 'say', 'wac']
    
    onInitialize(engine) {

    }
    onActivate(ctx) {
        const levelfour = new Actor()
        levelfour.pos = new Vector(1890, 360)
        levelfour.graphics.use(Resources.LevelFour.toSprite())
        this.add(levelfour)

        const floor = new Floor()
        floor.pos = new Vector(2000, 850)
        this.add(floor)

        const alchemist = new Alchemist()
        alchemist.pos = new Vector(3600, 500)
        alchemist.graphics.use(Resources.Alchemist.toSprite())
        this.add(alchemist)
    }
    onDeactivate() {
        this.clear()
    }
    sceneDialogue(number) {
        this.actors[6].dialogueFlow(this.dialogueText[number])
    }
}