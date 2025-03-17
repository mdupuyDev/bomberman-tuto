import { MapTile } from "game/constants/LevelData.js";
import { Block } from "game/entities/Block.js";

export class BlockSystem {
  blocks = [];

  constructor(stage) {
    this.stage = stage;
  }

  remove = (block) => {
    const index = this.blocks.indexOf(block);
    if (index < 0) return;

    this.stage.updateMapAt(block.cell, MapTile.FLOOR);
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
