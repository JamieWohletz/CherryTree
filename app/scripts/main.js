var root = {
  angle: Math.PI / 2,
  coordinates: {
    x: RENDER.VIEWBOX_WIDTH/2,
    y: RENDER.VIEWBOX_HEIGHT
  },
  children: [
    treegen.core.generate_tree(8)
  ]
};
renderTree(root);
