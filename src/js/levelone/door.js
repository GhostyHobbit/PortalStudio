import { Engine, Actor, Vector, CollisionType, Keys, Buttons, Input } from "excalibur";
import { Resources } from '../resources';
import { Alchemist } from "../alchemist";

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
    this.on('precollision', (event) => this.opendoor(event))
  }

  opendoor(event){
    if (event.other instanceof Alchemist) {
      let keyCommand
      if (this.scene.engine.mygamepad) {
          keyCommand = this.scene.engine.mygamepad.wasButtonReleased(Buttons.Face1)
      } else if (!this.scene.engine.mygamepad) {
          keyCommand = this.game.input.keyboard.wasPressed(Input.Keys.E)
      }
        if (keyCommand) {
            this.scene.changeRoom()
            }
        }
    }
}