import { Actor, Scene, Vector } from "excalibur"
import { Resources } from './resources.js'
import { Alchemist } from './alchemist.js'
import { Letter } from './letter.js'
import { Floor } from './floors.js'
import { SceneTransition } from "./sceneTransition.js"
import { TriggerBox } from "./triggerbox.js"

export class LevelThree extends Scene {

    dialogueText = [
        'Dear Little Alchemist, I am the Master Alchemist. You may not \nremember me, but I sent you on this mission. You will have to go \nthrough various tests. These will test your faith, creativity and \nexploration.', 
        'Every choice you make will influence your future. Learn, \nLittle Alchemist, learn and the world will be at your feet. This is a \none way ticket, choose wisely. \n\n-The Master Alchemist', 
    ]

    onActivate(ctx) {
        const levelthree = new Actor()
        levelthree.pos = new Vector(1280, 360)
        levelthree.graphics.use(Resources.LevelThree.toSprite())
        this.add(levelthree)

        const floor = new Floor()
        floor.pos = new Vector(2000, 850)
        this.add(floor)

        const invisTrigger = new TriggerBox()
        invisTrigger.pos = new Vector(2100, 700)
        this.add(invisTrigger)

        const badScene = new TriggerBox()
        badScene.pos = new Vector(1280, 360)
        badScene.graphics.use(Resources.LevelThreeEvil.toSprite())
        this.add(badScene)

        const goodScene = new TriggerBox()
        goodScene.pos = new Vector(1280, 360)
        goodScene.graphics.use(Resources.LevelThreeGood.toSprite())
        this.add(goodScene)

        const alchemist = new Alchemist()
        alchemist.pos = new Vector(200, 550)
        alchemist.graphics.use(Resources.Alchemist.toSprite())
        alchemist.x = 2560
        this.add(alchemist)

        Resources.LevelTwoMusic.stop();
    }
    onDeactivate() {
        this.clear()
    }
    sceneDialogue(number) {
        this.actors[4].dialogueFlow(this.dialogueText[number])
    }
}