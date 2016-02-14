var root = {
  angle: Math.PI / 2,
  coordinates: {
    x: RENDER.VIEWBOX_WIDTH/2,
    y: RENDER.VIEWBOX_HEIGHT
  },
  children: [
    generateTree(10)
  ]
};
renderTree(root);