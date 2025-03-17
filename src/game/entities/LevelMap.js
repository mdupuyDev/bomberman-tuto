import { Entity } from 'engine/Entity.js';
import { drawTile } from 'engine/context.js';
import { collisionMap, CollisionTile, MapTile, MapToCollisionTileLookup, MAX_BLOCKS, playerStartCoords, STAGE_MAP_MAX_SIZE, tileMap } from '../constants/LevelData.js';
import { TILE_SIZE } from '../constants/game.js';

export class LevelMap extends Entity {
  tileMap = [...tileMap];
  collisionMap = [...collisionMap];

  image = document.querySelector('img#stage');
  stageImage = new OffscreenCanvas(STAGE_MAP_MAX_SIZE, STAGE_MAP_MAX_SIZE);

  constructor() {
    super({ x: 0, y: 0 });

    this.stageImageContext = this.stageImage.getContext('2d');

    this.buildStage();
  }

  updateMapAt(cell, tile) {
    this.tileMap[cell.row][cell.column] = tile;
    this.collisionMap[cell.row][cell.column] = MapToCollisionTileLookup[tile];

    drawTile(this.stageImageContext, this.image, tile, cell.column * TILE_SIZE, cell.row * TILE_SIZE, TILE_SIZE);
  }

  buildStageMap() {
    for (let rowIndex = 0; rowIndex < this.tileMap.length; rowIndex++) {
      for (let columnIndex = 0; columnIndex < this.tileMap[rowIndex].length; columnIndex++) {
        const tile = this.tileMap[rowIndex][columnIndex];
        this.updateMapAt({ row: rowIndex, column: columnIndex }, tile);
      }
    }
  }

  addBlockTileAt(cell) {
    const isStartZone = playerStartCoords.some(([startRow, startColumn]) =>
      startRow === cell.row && startColumn === cell.column,
    )
    if (isStartZone || this.collisionMap[cell.row][cell.column] !== CollisionTile.EMPTY) return false;

    this.updateMapAt(cell, MapTile.BLOCK);
    return true;
  }

  addBlocks() {
    const blocks = [];

    while (blocks.length < MAX_BLOCKS) {
      const cell = {
        row: 1 + Math.floor(Math.random() * (this.tileMap.length - 3)),
        column: 2 + Math.floor(Math.random() * (this.tileMap[0].length - 4)),
      };

      if (this.addBlockTileAt(cell)) blocks.push(cell);
    }
  }

  buildStage() {
    this.buildStageMap();
    this.addBlocks();
  }

  update = () => undefined;

  draw(context, camera) {
    context.drawImage(this.stageImage, -camera.position.x, -camera.position.y);
  }
}
