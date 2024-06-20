import '../css/style.css'
import { Actor, Engine, Vector, Camera, ScreenElement, DisplayMode, Sound, SolverStrategy } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Label, FontUnit, Font} from "excalibur";
import { Alchemist } from './alchemist.js'  
import { Letter } from './letter.js'
import { Dialogue } from './dialogue.js'
import { LevelOne } from './levelone/levelone.js'
import { LevelTwo } from './leveltwo.js';
import { Intro } from './intro.js'
import { LevelFour } from './levelfour.js';
import { LOneSceneTwo } from './levelone/l1scenetwo.js';
import { LOneExtraScene } from './levelone/extrascene.js';

export class Game extends Engine {

    constructor() {
        super({
            width: 1280,
            height: 720,
            displayMode: DisplayMode.FitScreen,
            physics: {
            solver: SolverStrategy.Realistic,
            displayMode: DisplayMode.FitScreen,
            gravity: new Vector(0, 1280),
    } })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        this.add('intro', new Intro())
        this.add('levelone', new LevelOne())
        this.add('leveltwo', new LevelTwo())
        this.add('levelfour', new LevelFour())
        this.add('l1scenetwo', new LOneSceneTwo())
        this.add('l1extra', new LOneExtraScene())
        this.goToScene('intro')
    }
}

new Game() 



