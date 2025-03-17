import { BOMB_EXPLODE_DELAY, FlameDirectionLookup } from "game/constants/bomb.js";
import { CollisionTile } from "game/constants/LevelData.js";
import { Bomb } from "game/entities/Bomb.js";
import { BombExplosion } from "game/entities/BombExplosion.js";

export class BombSystem {
  bombs = [];

  constructor(stageCollisionMap, onBlockDestroyed) {
    this.collisionMap = stageCollisionMap;
    this.onBlockDestroyed = onBlockDestroyed;
  }

  getFlameCellsFor(rowOffset, columnOffset, startCell, length) {
    const flameCells = [];
    let cell = { ...startCell };

    for (let position = 1; position <= length; position++) {
      cell.row += rowOffset;
      cell.column += columnOffset;

      if (this.collisionMap[cell.row][cell.column] !== CollisionTile.EMPTY) break;

      flameCells.push({
        cell: { ...cell },
        isVertical: rowOffset !== 0,
        isLast: position === length,
      });
    }

    //console.log("Flame cells:", flameCells);
    //console.log("Flame cells:", JSON.stringify(flameCells, null, 2));
    return { cells: flameCells, endCell: cell };
  }

  handleEndResult(endCell, time) {
    const endResult = this.collisionMap[endCell.row][endCell.column];

    switch (endResult) {
      case CollisionTile.BLOCK:
        this.onBlockDestroyed(endCell, time);
        break;

      case CollisionTile.BOMB: {
        const bombToExplode = this.bombs.find((bomb) =>
          endCell.row === bomb.cell.row && endCell.column === bomb.cell.column,
        );
        if (!bombToExplode) return;

        bombToExplode.fuseTimer = time.previous + BOMB_EXPLODE_DELAY;
        break;
      }
    }
  }

  getFlameCells(startCell, length, time) {
    const flameCells = [];

    for (const [rowOffset, columnOffset] of FlameDirectionLookup) {
      const { cells, endCell } = this.getFlameCellsFor(rowOffset, columnOffset, startCell, length);
      this.handleEndResult(endCell, time);

      if (cells.length > 0) flameCells.push(...cells);
    }
    //console.log("Flame cells: 1", flameCells);
    return flameCells;
  }

  handleBombExploded(bomb, strenght, time) {
    const index = this.bombs.indexOf(bomb);
    if (index < 0) return;

    const flameCells = this.getFlameCells(bomb.cell, strenght, time);
    console.log("Flame cells:", JSON.stringify(flameCells, null, 2));
    this.bombs[index] = new BombExplosion(bomb.cell, flameCells, time, this.remove);

    this.collisionMap[bomb.cell.row][bomb.cell.column] = CollisionTile.FLAME;
    for (const flameCell of flameCells) {
      this.collisionMap[flameCell.cell.row][flameCell.cell.column] = CollisionTile.FLAME;
    }
    //console.log("Flame cells:", flameCells);
    //console.log("Flame cells:", JSON.stringify(flameCells, null, 2));
  }

  remove = (bombExplosion) => {
    const index = this.bombs.indexOf(bombExplosion);
    if (index < 0) return;

    this.collisionMap[bombExplosion.cell.row][bombExplosion.cell.column] = CollisionTile.EMPTY;
    for (const flameCell of bombExplosion.flameCells) {
      this.collisionMap[flameCell.cell.row][flameCell.cell.column] = CollisionTile.EMPTY;
    }

    this.bombs.splice(index, 1);
  };

  add = (cell, strenght, time, onBombExploded) => {
    this.bombs.push(new Bomb(
      cell, time, (bomb) => {
        onBombExploded(bomb);
        this.handleBombExploded(bomb, strenght, time);
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
