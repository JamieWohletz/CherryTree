var root = {
  length:0.3,
  angle: Math.PI / 2,
  thickness:0.5,
  coordinates: {
    x: Math.floor($(window).width() / 2),
    y: Math.ceil($(window).height())
  },
  children: [
    generateTree(8)
  ]
};
renderTree(root);