import { Scene } from 'engine/Scene.js';
import { LevelMap } from '../entities/LevelMap.js';
import { HALF_TILE_SIZE, STAGE_OFFSET_Y } from '../constants/game.js';
import { BattleHud } from '../entities/BattleHud.js';
import { Bomberman } from '../entities/Bomberman.js';

export class BattleScene extends Scene {
  constructor(time, camera) {
    super();

    this.stage = new LevelMap();
    this.hud = new BattleHud();
    this.player = new Bomberman({ x: 2, y: 1 }, time);

    camera.position = { x: HALF_TILE_SIZE, y: -STAGE_OFFSET_Y };
  }

  update(time) {
    this.player.update(time);
  }

  draw(context, camera) {
    this.stage.draw(context, camera);
    this.hud.draw(context);
    this.player.draw(context, camera);
  }
}
