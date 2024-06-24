import { Actor, Vector, CollisionType } from "excalibur";
import { Resources } from './resources';
import { Alchemist } from "./alchemist";

export class InvisWallAdder extends Actor {

  constructor() {
    super({
      width: 100,
      height: 100,
    });
    this.body.collisionType = CollisionType.Passive;
  }

  onInitialize(engine) {
    this.game = engine
    this.on('collisionstart', (event) => this.wall(event))
  }

  wall(event){
    if (event.other instanceof Alchemist) {
            this.scene.engine.wallSpawned = true
            this.scene.addInvisWall()
        }
    }
}