import { Actor, Scene, Vector } from "excalibur"
import { Resources } from './resources.js'
import { Alchemist } from './alchemist.js'
import { Letter } from './letter.js'
import { Floor } from './floors.js'

export class LevelThree extends Scene {
    onActivate(ctx) {
        const levelthree = new Actor()
        levelthree.pos = new Vector(1280, 360)
        levelthree.graphics.use(Resources.LevelThree.toSprite())
        this.add(levelthree)

        const floor = new Floor()
        floor.pos = new Vector(2000, 900)
        this.add(floor)

        const alchemist = new Alchemist()
        alchemist.pos = new Vector(200, 600)
        alchemist.graphics.use(Resources.Alchemist.toSprite())
        this.add(alchemist)
    }
    onDeactivate() {
        this.clear()
    }
    sceneDialogue(number) {
        this.actors[4].dialogueFlow(this.dialogueText[number])
    }
}