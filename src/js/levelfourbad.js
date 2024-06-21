import { Actor, Scene, Vector } from "excalibur"
import { Resources } from './resources.js'
import { Alchemist } from './alchemist.js'
import { Letter } from './letter.js'
import { Floor } from './floors.js'
import { InvisibleFloor } from './invisiblefloor.js'
import { masterAlchemist } from "./masteralchemist.js"

export class LevelFourBad extends Scene {

    dialogueText = [
        'I see you’ve made it home. It’s good to see you, Little Alchemist. \nDid you look out into the world? Isn’t it beautiful?', 
        'You made this happen and now we can build the world anew. \nOur world. You finished your tests splendidly. The world is ours. \nWe will conquer it again if we need to. \n\nLet us rule.', 
    ]
    
    onInitialize(engine) {

    }
    onActivate(ctx) {
        const levelfour = new Actor()
        levelfour.pos = new Vector(2600, 360)
        levelfour.graphics.use(Resources.LevelFourBad.toSprite())
        this.add(levelfour)

        const invisfloor = new InvisibleFloor()
        invisfloor.pos = new Vector(2600, 750)
        this.add(invisfloor)

        const master = new masterAlchemist()
        master.pos = new Vector(1900, 550)
        master.graphics.use(Resources.MasterBack.toSprite())
        master.graphics.flipHorizontal = false
        this.add(master)

        const alchemist = new Alchemist()
        alchemist.pos = new Vector(5000, 600)
        alchemist.x = 5200
        alchemist.graphics.use(Resources.Alchemist.toSprite())
        alchemist.graphics.flipHorizontal = true 
        this.add(alchemist)

        const ronk = new Actor()
        ronk.graphics.use(Resources.Ronk.toSprite())
        ronk.pos = new Vector(2350, 360)
        this.add(ronk)
    }
    onDeactivate() {
        this.clear()
    }
    sceneDialogue(number) {
        // console.log(this.actors)
        this.actors[5].dialogueFlow(this.dialogueText[number])
    }
}