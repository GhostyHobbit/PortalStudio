import { Actor, Scene, Vector, Sound } from "excalibur"
import { Resources } from './resources'
import { Alchemist } from './alchemist.js'
import { Letter } from './letter.js'
import { Dialogue } from './dialogue.js'
import { Floor } from './floors.js'
import { SceneTransition } from "./sceneTransition.js"

export class Intro extends Scene {

    dialogueText = [
        'Dear Little Alchemist, I am the Master Alchemist. You may not \nremember me, but I sent you on this mission. You will have to go \nthrough various tests. These will test your faith, creativity and \nexploration.', 
        'Every choice you make will influence your future. Learn, \nLittle Alchemist, learn and the world will be at your feet. This is a \none way ticket, choose wisely. \n\n-The Master Alchemist', 
    ]

    constructor() {
        super()
    }

    onInitialize(engine) {
       
    }
    onActivate(ctx) {
        const intro = new Actor()
        intro.pos = new Vector(1890, 360)
        this.add(intro)
        intro.graphics.use(Resources.Intro.toSprite())

        const letter = new Letter()
        letter.pos = new Vector(2450, 550)
        this.add(letter)

        const alchemist = new Alchemist()
        alchemist.graphics.use(Resources.AlchemistLamp.toSprite())
        alchemist.pos = new Vector(1000, 500)
        this.add(alchemist)

        const scene = new SceneTransition()
        scene.pos = new Vector(3740, 400)
        this.add(scene)

        const floor = new Floor()
        floor.pos = new Vector(2000, 890)
        this.add(floor)

        // Resources.MainThemeMusic.play(0.8);
    }
    onDeactivate() {
        this.clear()
    }
    changeScene() {
        this.engine.goToScene('levelone')
    }
    sceneDialogue(number) {
        this.actors[6].dialogueFlow(this.dialogueText[number])
    }
    LetterGood(number) {
        this.actors[6].dialogueFlow(this.dialogueText[number])
    }
}