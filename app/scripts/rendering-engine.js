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

    function getXOffset(node, parent, orderInSiblings) {
      if(!parent || !node || !node.thickness){
        return 0;
      }

      var leftSiblingsThicknesses = _.map(_.slice(parent.children, 0, orderInSiblings),
                                      (siblingNode) => { return siblingNode.thickness });

      //add up the thickness of all the siblings to the left of this node
      var totalLeftThickness = 0;
      if(leftSiblingsThicknesses.length > 0) {
        totalLeftThickness = _.reduce(leftSiblingsThicknesses,
          (total, thickness) => {
            return total + thickness;
          }, 0);
      }

      //add half of this node's thickness
      var xPos = (-parent.thickness / 2) + (totalLeftThickness + (node.thickness / 2));
      return xPos;
    }

    function drawTree(node, parent = null, orderInSiblings = 0) {
      scaleScalars(node);
      context.lineWidth = node.thickness;
      context.beginPath();
      var xOffset = getXOffset(node, parent, orderInSiblings);
      context.translate(xOffset, 0);
      context.moveTo(0,0);

      context.beginPath();
      context.arc(0, 0, node.thickness / 2, 0, 2 * Math.PI, false);
      context.fill();

      context.lineTo(-node.thickness/2, 0);
      context.quadraticCurveTo(-node.thickness/2 , -node.length/2, -node.thickness/2, -node.length);
      context.lineTo(node.thickness/2, -node.length);
      context.quadraticCurveTo(node.thickness/2, -node.length/2, node.thickness/2, 0);
      context.fill();
      context.translate(0,-node.length);

      _.each(node.children, function(child, index) {
        context.save();
        context.rotate(index % 2 === 0 ? -child.angle : child.angle);
        drawTree(child, node, index);
        context.restore();
      });
    }

    return drawTree;
  }());
