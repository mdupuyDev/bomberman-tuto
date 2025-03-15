import { FlameDirectionLookup } from "game/constants/bomb.js";
import { CollisionTile } from "game/constants/LevelData.js";
import { Bomb } from "game/entities/Bomb.js";
import { BombExplosion } from "game/entities/BombExplosion.js";

export class BombSystem {
  bombs = [];

  constructor(stageCollisionMap) {
    this.collisionMap = stageCollisionMap;
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
    return flameCells;
  }

  getFlameCells(startCell, length, time) {
    const flameCells = [];

    for (const [rowOffset, columnOffset] of FlameDirectionLookup) {
      const cells = this.getFlameCellsFor(rowOffset, columnOffset, startCell, length);
      //console.log("cells =", JSON.stringify(cells, null, 2));
      //console.log("cell length=", cells.length);
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
