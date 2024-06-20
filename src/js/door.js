import { Engine, Actor, Vector, CollisionType } from "excalibur";
import { Resources } from './resources';
import { Alchemist } from "./alchemist";

export class Door extends Actor {

  constructor() {
    super({
      width: Resources.L1Door.width,
      height: Resources.L1Door.height,
    });
    this.body.collisionType = CollisionType.Passive;
  }

  onInitialize(engine) {
    this.game = engine

    this.pos = new Vector(2720,437)
    this.on('collisionstart', (event) => this.opendoor(event))
  }

  opendoor(event){
    if (event.other instanceof Alchemist) {
        if (this.game.input.keyboard.isHeld(Input.Keys.E)) {
            // this.scene.intro()
            console.log('wac')
            }
        }
    }
}