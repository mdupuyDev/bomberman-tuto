import { CollisionTile } from "game/constants/LevelData.js";
import { Bomb } from "game/entities/Bomb.js";

export class BombSystem {
  bombs = [];

  constructor(stageCollisionMap) {
    this.collisionMap = stageCollisionMap;
  }

  remove = (bomb) => {
    const index = this.bombs.indexOf(bomb);
    if (index < 0) return;

    this.collisionMap[bomb.cell.row][bomb.cell.column] = CollisionTile.EMPTY;
    this.bombs.splice(index, 1);
  }

  add = (cell, time, onBombExploded) => {
    this.bombs.push(new Bomb(
      cell, time, (bomb) => {
        this.remove(bomb);
        onBombExploded(bomb);
      },
    ));

    this.collisionMap[cell.row][cell.column] = CollisionTile.BOMB;
  };

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
