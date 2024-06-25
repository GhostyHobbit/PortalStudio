import { Actor, Scene, Vector } from "excalibur"
import { Resources } from './resources.js'
import { Alchemist } from './alchemist.js'
import { Letter } from './letter.js'
import { Floor } from './floors.js'
import { SceneTransition } from "./sceneTransition.js"
import { TriggerBox, sceneBox } from "./triggerbox.js"

export class LevelThree extends Scene {

    box
    dialogueText = [
        'After 300 years and 2 apocalyptic events humanity is returning to \nearth again. After seeing the dangerous but beautifull new \necosystems they are now standing before a choice.',
        'Go back to what they know and rebuild from the ruins of the cities \nthat were, or let nature flourish and live in harmony with \nthe world.',
        'You, viewer, have learned from your journeys. Help the humans in \nthis choice and create the future.'
    ]

    onActivate(ctx) {
        const levelthree = new Actor()
        levelthree.pos = new Vector(1280, 360)
        levelthree.graphics.use(Resources.LevelThree.toSprite())
        this.add(levelthree)

        const floor = new Floor()
        floor.pos = new Vector(2000, 850)
        this.add(floor)

        const badScene = new sceneBox()
        badScene.pos = new Vector(1758, 297)
        badScene.graphics.use(Resources.LevelThreeEvil.toSprite())
        this.add(badScene)

        const goodScene = new sceneBox()
        goodScene.pos = new Vector(2271, 298)
        goodScene.graphics.use(Resources.LevelThreeGood.toSprite())
        this.add(goodScene)

        const alchemist = new Alchemist()
        alchemist.pos = new Vector(200, 550)
        alchemist.graphics.use(Resources.Alchemist.toSprite())
        alchemist.x = 2560
        this.add(alchemist)

        const invisTrigger = new TriggerBox({width: 700, height: 50})
        invisTrigger.pos = new Vector(2100, 550)
        this.add(invisTrigger)
        Resources.LevelTwoMusic.stop()
    }
    onDeactivate() {
        this.clear()
    }
    sceneDialogue(number) {
        this.actors[6].dialogueFlow(this.dialogueText[number])
    }
    changeScene() {
        this.engine.goToScene('levelfourbad')
    }
    changeSceneGood() {
        this.engine.goToScene('levelfourgood')
    }
}