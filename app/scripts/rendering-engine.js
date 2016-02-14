/**
 * Created by Jamie Wohletz on 2/13/2016.
 */
const renderTree =
  (function() {
    const canvas = document.getElementById('tree-canvas');
    const context = canvas.getContext('2d');
    const winW = $(window).width();
    const winH = $(window).height();

    canvas.width = winW;
    canvas.height = winH;
    context.translate(canvas.width/2,canvas.height);
    context.lineCap = 'round';
    context.lineJoin = 'round';

    function scaleScalars(node) {
      node.length = Math.floor(node.length * canvas.height/RENDER.Y_SCALE);
      node.thickness = Math.ceil(node.thickness * canvas.width/RENDER.X_SCALE);
    }

    function drawTree(node) {
      scaleScalars(node);
      context.lineWidth = node.thickness;
      context.beginPath();
      context.moveTo(0,0);
      context.lineTo(-node.thickness/2, 0);
      context.quadraticCurveTo(-node.thickness/4, -node.length/2, -node.thickness/4, -node.length);
      context.lineTo(node.thickness/4, -node.length);
      context.quadraticCurveTo(node.thickness/4, -node.length/2, node.thickness/2, 0);
      context.fill();
      context.translate(0,-node.length);

      _.each(node.children, function(child, index) {
        context.save();
        context.rotate(index % 2 === 0 ? -child.angle : child.angle);
        drawTree(child);
        context.restore();
      });
    }

    return drawTree;
  }());