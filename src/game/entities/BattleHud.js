import { Entity } from 'engine/Entity.js';
import { SCREEN_WIDTH, STAGE_OFFSET_Y } from 'game/constants/game.js';

export class BattleHud extends Entity {
  constructor(position) {
    super(position);

    this.image = document.querySelector('img#hud');
  }

  update(time, context, camera) {
    // Add your main update calls here
  }

  draw(context, camera) {
    context.drawImage(
      this.image,
      8, 40, SCREEN_WIDTH, STAGE_OFFSET_Y,
      0, 0, SCREEN_WIDTH, STAGE_OFFSET_Y
    );
  }
}
