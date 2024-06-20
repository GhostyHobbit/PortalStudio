import { Actor, Scene, Vector, Sound } from "excalibur"
import { Resources } from './resources'
import { Alchemist } from './alchemist.js'
import { Letter } from './letter.js'
import { Dialogue } from './dialogue.js'
import { Floor } from './floors.js'
import { SceneTransition } from "./sceneTransition.js"

export class Intro extends Scene {

    dialogueText = ['cracked', 'chickens', 'definitely', 'say', 'wac']

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
        alchemist.pos = new Vector(1000, 530)
        this.add(alchemist)

        const scene = new SceneTransition()
        this.add(scene)

        const floor = new Floor()
        floor.pos = new Vector(2000, 890)
        this.add(floor)
        
        const scenetrans = new SceneTransition()
        this.add(scenetrans)

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