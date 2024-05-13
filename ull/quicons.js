const getGameState = (gameObjectId) => {
  const gameObject = gameObjects[gameObjectId];
  if (!gameObject) return null; // or handle the absence in another way

  const { activeBoard, gameOver, moveCount } = gameObject;
  return { id: gameObjectId, activeBoard, gameOver, moveCount };
};
