import { Actor, Vector, CollisionType } from "excalibur";
import { Resources } from './resources';

export class InvisWallAdder extends Actor {
  constructor() {
    super({
      width: 100,
      height: 100,
    });
    this.body.collisionType = CollisionType.Fixed;
  }
}