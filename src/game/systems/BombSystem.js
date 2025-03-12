import { Bomb } from "game/entities/Bomb.js";

export class BombSystem {
  bombs = [];

  constructor(stageCollisionMap) {
    this.collisionMap = stageCollisionMap;
  }

  remove = (bomb) => {
    const index = this.bombs.indexOf(bomb);
    if (index < 0) return;

    this.bombs.splice(index, 1);
  }

  add = (cell, time) => {
    this.bombs.push(new Bomb(cell, time, this.remove));
  }

  update(time) {
    for (const bomb of this.bombs) {
      bomb.update(time);
    }
  }

  draw(context, camera) {
    for (const bomb of this.bombs) {
      bomb.draw(context, camera);
    }
  }
}
