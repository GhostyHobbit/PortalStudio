import { Actor, Scene, Vector } from "excalibur"
import { Resources } from './resources.js'
import { Alchemist } from './alchemist.js'
import { Letter } from './letter.js'
import { InvisibleFloor } from './invisiblefloor.js'
import { InvisibleWall } from "./invisiblewall.js"
import { InvisWallAdder } from "./inviswalladder.js"
import { SceneTransition } from "./sceneTransition.js"

export class LevelTwo extends Scene {

    dialogueText = [
        'Humans have existed for millenia, this time has made them \nbecome ambitious. However, they use it in an inefficient way. They \nwant to see the future, and be able to control it.', 
        'The only way they know how is by creating worlds of fiction \nand dreams. We alchemists don’t have that limitation. We don’t have \nto limit our ambitions with futile fantasies. We can create any world \nwe desire.', 
    ]
    otherDialogue = [
        'Humans have existed for millenia. All this time has made them \nbecome ambitious. They want to see the future, they want to \ncontrol it. But the only way they can is by creating fictional worlds.', 
        'We alchemists don’t have that privilege. We have the power to \ncreate what we want, but this also means we have to take the \nresponsibility that comes with it. Selflessness is the key in the \nwork that we do.', 
    ]

    onInitialize(engine) {

    }

    onActivate(ctx) {
        console.log(this.engine)
        const leveltwoscreen = new Actor()
        leveltwoscreen.pos = new Vector(1890, 360)
        leveltwoscreen.graphics.use(Resources.levelTwo.toSprite())
        this.add(leveltwoscreen)

        const scene = new SceneTransition()
        scene.pos = new Vector(3840, 400)
        this.add(scene)

        const scene2 = new SceneTransition()
        scene2.pos = new Vector(-80, 400)
        this.add(scene2)

        const invisfloor = new InvisibleFloor()
        invisfloor.pos = new Vector(1820, 640)
        this.add(invisfloor)

        // const inviswall = new InvisibleWall()
        // inviswall.pos = new Vector(1860, 440)
        // if (this.engine.wallSpawned == true) {
        //     this.addInvisWall()
        // }

        const inviswalladder = new InvisWallAdder()
        inviswalladder.pos = new Vector(1200, 440)
        this.add(inviswalladder)

        const inviswalladder2 = new InvisWallAdder()
        inviswalladder2.pos = new Vector(2560,440)
        this.add(inviswalladder2)

        const letter = new Letter()
        letter.pos = new Vector(580, 460)
        this.add(letter)

        const letter2 = new Letter()
        letter2.pos = new Vector(3160, 460)
        this.add(letter2)

        const alchemist = new Alchemist()
        alchemist.pos = new Vector(1880, 440)
        alchemist.graphics.use(Resources.Alchemist.toSprite())
        this.add(alchemist)

        Resources.LevelOneMusic.stop();
        Resources.LevelTwoMusic.play(1);
    }
    onDeactivate() {
        this.clear()
    }
    changeScene() {
        this.engine.goToScene('levelthree')
    }
    sceneDialogue(number) {
        if (this.actors[8].pos.x > 1890) {
            this.actors[10].dialogueFlow(this.dialogueText[number])
        } else {
            this.actors[10].dialogueFlow(this.otherDialogue[number])
        }
        
    }
    addInvisWall() {
        if (this.engine.wallSpawned == true) {
            const inviswall = new InvisibleWall()
            inviswall.pos = new Vector(1860, 440)
            this.add(inviswall)
            this.engine.wallSpawned == false
        }
    }
}