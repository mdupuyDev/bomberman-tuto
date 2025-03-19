import { MapTile } from "game/constants/LevelData.js";
import { Block } from "game/entities/Block.js";

export class BlockSystem {
  blocks = [];

  constructor(updateStageMapAt) {
    this.updateStageMapAt = updateStageMapAt;
  }

  remove = (block) => {
    const index = this.blocks.indexOf(block);
    if (index < 0) return;

    this.updateStageMapAt(block.cell, MapTile.FLOOR);
    this.blocks.splice(index, 1);
  };

  add = (cell, time) => {
    this.blocks.push(new Block(cell, time, this.remove));
  };

  update(time) {
    for (const block of this.blocks) {
      block.update(time);
    }
  }

  draw(context, camera) {
    for (const block of this.blocks) {
      block.draw(context, camera);
    }
  }
}
