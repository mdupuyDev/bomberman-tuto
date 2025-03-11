export const CollisionTile = {
  EMPTY: 0,
  WALL: 20,
  BLOCK: 30,
};

export const tileMap = [
  [29, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 29],
  [29, 30, 59, 59, 59, 59, 59, 59, 59, 59, 59, 59, 59, 59, 59, 30, 29],
  [29, 30, 59, 30, 59, 30, 59, 30, 59, 30, 59, 30, 59, 30, 59, 30, 29],
  [29, 30, 59, 59, 59, 59, 59, 59, 59, 59, 59, 59, 59, 59, 59, 30, 29],
  [29, 30, 59, 30, 59, 30, 59, 30, 59, 30, 59, 30, 59, 30, 59, 30, 29],
  [29, 30, 59, 59, 59, 59, 59, 59, 59, 59, 59, 59, 59, 59, 59, 30, 29],
  [29, 30, 59, 30, 59, 30, 59, 30, 59, 30, 59, 30, 59, 30, 59, 30, 29],
  [29, 30, 59, 59, 59, 59, 59, 59, 59, 59, 59, 59, 59, 59, 59, 30, 29],
  [29, 30, 59, 30, 59, 30, 59, 30, 59, 30, 59, 30, 59, 30, 59, 30, 29],
  [29, 30, 59, 59, 59, 59, 59, 59, 59, 59, 59, 59, 59, 59, 59, 30, 29],
  [29, 30, 59, 30, 59, 30, 59, 30, 59, 30, 59, 30, 59, 30, 59, 30, 29],
  [29, 30, 59, 59, 59, 59, 59, 59, 59, 59, 59, 59, 59, 59, 59, 30, 29],
  [29, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 29],
  [29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29],
];

export const collisionMap = [
  [CollisionTile.WALL, CollisionTile.WALL, CollisionTile.WALL, CollisionTile.WALL, CollisionTile.WALL, CollisionTile.WALL, CollisionTile.WALL, CollisionTile.WALL, CollisionTile.WALL, CollisionTile.WALL, CollisionTile.WALL, CollisionTile.WALL, CollisionTile.WALL, CollisionTile.WALL, CollisionTile.WALL, CollisionTile.WALL, CollisionTile.WALL],
  [CollisionTile.WALL, CollisionTile.WALL, CollisionTile.EMPTY, CollisionTile.EMPTY, CollisionTile.EMPTY, CollisionTile.EMPTY, CollisionTile.EMPTY, CollisionTile.EMPTY, CollisionTile.EMPTY, CollisionTile.EMPTY, CollisionTile.EMPTY, CollisionTile.EMPTY, CollisionTile.EMPTY, CollisionTile.EMPTY, CollisionTile.EMPTY, CollisionTile.WALL, CollisionTile.WALL],
  [CollisionTile.WALL, CollisionTile.WALL, CollisionTile.EMPTY, CollisionTile.WALL, CollisionTile.EMPTY, CollisionTile.WALL, CollisionTile.EMPTY, CollisionTile.WALL, CollisionTile.EMPTY, CollisionTile.WALL, CollisionTile.EMPTY, CollisionTile.WALL, CollisionTile.EMPTY, CollisionTile.WALL, CollisionTile.EMPTY, CollisionTile.WALL, CollisionTile.WALL],
  [CollisionTile.WALL, CollisionTile.WALL, CollisionTile.EMPTY, CollisionTile.EMPTY, CollisionTile.EMPTY, CollisionTile.EMPTY, CollisionTile.EMPTY, CollisionTile.EMPTY, CollisionTile.EMPTY, CollisionTile.EMPTY, CollisionTile.EMPTY, CollisionTile.EMPTY, CollisionTile.EMPTY, CollisionTile.EMPTY, CollisionTile.EMPTY, CollisionTile.WALL, CollisionTile.WALL],
  [CollisionTile.WALL, CollisionTile.WALL, CollisionTile.EMPTY, CollisionTile.WALL, CollisionTile.EMPTY, CollisionTile.WALL, CollisionTile.EMPTY, CollisionTile.WALL, CollisionTile.EMPTY, CollisionTile.WALL, CollisionTile.EMPTY, CollisionTile.WALL, CollisionTile.EMPTY, CollisionTile.WALL, CollisionTile.EMPTY, CollisionTile.WALL, CollisionTile.WALL],
  [CollisionTile.WALL, CollisionTile.WALL, CollisionTile.EMPTY, CollisionTile.EMPTY, CollisionTile.EMPTY, CollisionTile.EMPTY, CollisionTile.EMPTY, CollisionTile.EMPTY, CollisionTile.EMPTY, CollisionTile.EMPTY, CollisionTile.EMPTY, CollisionTile.EMPTY, CollisionTile.EMPTY, CollisionTile.EMPTY, CollisionTile.EMPTY, CollisionTile.WALL, CollisionTile.WALL],
  [CollisionTile.WALL, CollisionTile.WALL, CollisionTile.EMPTY, CollisionTile.WALL, CollisionTile.EMPTY, CollisionTile.WALL, CollisionTile.EMPTY, CollisionTile.WALL, CollisionTile.EMPTY, CollisionTile.WALL, CollisionTile.EMPTY, CollisionTile.WALL, CollisionTile.EMPTY, CollisionTile.WALL, CollisionTile.EMPTY, CollisionTile.WALL, CollisionTile.WALL],
  [CollisionTile.WALL, CollisionTile.WALL, CollisionTile.EMPTY, CollisionTile.EMPTY, CollisionTile.EMPTY, CollisionTile.EMPTY, CollisionTile.EMPTY, CollisionTile.EMPTY, CollisionTile.EMPTY, CollisionTile.EMPTY, CollisionTile.EMPTY, CollisionTile.EMPTY, CollisionTile.EMPTY, CollisionTile.EMPTY, CollisionTile.EMPTY, CollisionTile.WALL, CollisionTile.WALL],
  [CollisionTile.WALL, CollisionTile.WALL, CollisionTile.EMPTY, CollisionTile.WALL, CollisionTile.EMPTY, CollisionTile.WALL, CollisionTile.EMPTY, CollisionTile.WALL, CollisionTile.EMPTY, CollisionTile.WALL, CollisionTile.EMPTY, CollisionTile.WALL, CollisionTile.EMPTY, CollisionTile.WALL, CollisionTile.EMPTY, CollisionTile.WALL, CollisionTile.WALL],
  [CollisionTile.WALL, CollisionTile.WALL, CollisionTile.EMPTY, CollisionTile.EMPTY, CollisionTile.EMPTY, CollisionTile.EMPTY, CollisionTile.EMPTY, CollisionTile.EMPTY, CollisionTile.EMPTY, CollisionTile.EMPTY, CollisionTile.EMPTY, CollisionTile.EMPTY, CollisionTile.EMPTY, CollisionTile.EMPTY, CollisionTile.EMPTY, CollisionTile.WALL, CollisionTile.WALL],
  [CollisionTile.WALL, CollisionTile.WALL, CollisionTile.EMPTY, CollisionTile.WALL, CollisionTile.EMPTY, CollisionTile.WALL, CollisionTile.EMPTY, CollisionTile.WALL, CollisionTile.EMPTY, CollisionTile.WALL, CollisionTile.EMPTY, CollisionTile.WALL, CollisionTile.EMPTY, CollisionTile.WALL, CollisionTile.EMPTY, CollisionTile.WALL, CollisionTile.WALL],
  [CollisionTile.WALL, CollisionTile.WALL, CollisionTile.EMPTY, CollisionTile.EMPTY, CollisionTile.EMPTY, CollisionTile.EMPTY, CollisionTile.EMPTY, CollisionTile.EMPTY, CollisionTile.EMPTY, CollisionTile.EMPTY, CollisionTile.EMPTY, CollisionTile.EMPTY, CollisionTile.EMPTY, CollisionTile.EMPTY, CollisionTile.EMPTY, CollisionTile.WALL, CollisionTile.WALL],
  [CollisionTile.WALL, CollisionTile.WALL, CollisionTile.WALL, CollisionTile.WALL, CollisionTile.WALL, CollisionTile.WALL, CollisionTile.WALL, CollisionTile.WALL, CollisionTile.WALL, CollisionTile.WALL, CollisionTile.WALL, CollisionTile.WALL, CollisionTile.WALL, CollisionTile.WALL, CollisionTile.WALL, CollisionTile.WALL, CollisionTile.WALL],
  [CollisionTile.WALL, CollisionTile.WALL, CollisionTile.WALL, CollisionTile.WALL, CollisionTile.WALL, CollisionTile.WALL, CollisionTile.WALL, CollisionTile.WALL, CollisionTile.WALL, CollisionTile.WALL, CollisionTile.WALL, CollisionTile.WALL, CollisionTile.WALL, CollisionTile.WALL, CollisionTile.WALL, CollisionTile.WALL, CollisionTile.WALL],
];
