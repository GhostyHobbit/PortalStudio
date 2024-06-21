import { Actor, Scene, Vector } from "excalibur"
import { Resources } from './resources.js'
import { Alchemist } from './alchemist.js'
import { Letter } from './letter.js'
import { Floor } from './floors.js'
import { masterAlchemist } from "./masteralchemist.js"

export class LevelFourGood extends Scene {

    dialogueText = ['cracked', 'chickens', 'definitely', 'say', 'wac']
    
    onInitialize(engine) {

    }
    onActivate(ctx) {
        const levelfour = new Actor()
        levelfour.pos = new Vector(1890, 360)
        levelfour.graphics.use(Resources.LevelFour.toSprite())
        this.add(levelfour)

        const floor = new Floor()
        floor.pos = new Vector(2000, 900)
        this.add(floor)

        const master = new masterAlchemist()
        master.pos = new Vector(2500, 550)
        master.graphics.use(Resources.MasterBack.toSprite())
        master.graphics.flipHorizontal = true
        this.add(master)

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