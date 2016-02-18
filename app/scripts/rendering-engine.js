/**
 * Created by Jamie Wohletz on 2/13/2016.
 */
const renderTree =
  (function() {
    const canvas = document.getElementById('tree-canvas');
    const context = canvas.getContext('2d');
    const winW = $(window).width();
    const winH = $(window).height();
    let cherryBlossomImage;

    canvas.width = winW;
    canvas.height = winH;
    context.translate(canvas.width / 2, canvas.height);
    context.lineCap = 'round';
    context.lineJoin = 'round';

    function scaleScalars(node) {
      node.length = Math.floor(node.length * canvas.height / RENDER.Y_SCALE);
      node.thickness = Math.ceil(node.thickness * canvas.width / RENDER.X_SCALE);
    }

    function getXOffset(node, parent, orderInSiblings) {
      let totalLeftThickness;

      if (!parent || !node || !node.thickness) {
        return 0;
      }

      totalLeftThickness = _.chain(parent.children)
                            .slice(0, orderInSiblings)
                            .map((o)=>{return o.thickness})
                            .reduce(_.add)
                            .value() || 0;

      //the x offset is the thickness of all the preceeding nodes plus half this node's
      //thickness so that we can start drawing from the centerpoint
      return (-parent.thickness / 2) + (totalLeftThickness + (node.thickness / 2));
    }

    function drawTree(node, parent = null, orderInSiblings = 0) {
      let xOffset, halfThickness;

      scaleScalars(node);

      context.lineWidth = node.thickness;
      context.beginPath();
      xOffset = getXOffset(node, parent, orderInSiblings);
      context.translate(xOffset, 0);
      context.moveTo(0, 0);

      //draw a circle between branch joints to fill them in
      halfThickness = (node.thickness / 2);
      context.beginPath();
      context.arc(0, 0, halfThickness + 0.2, 0, 2 * Math.PI, false);
      context.fill();
      context.closePath();

      context.beginPath();
      context.moveTo(0, 0);
      context.lineTo(-halfThickness, 0);
      context.quadraticCurveTo(-halfThickness / 2, -node.length / 2, -halfThickness, -node.length);
      context.lineTo(halfThickness, -node.length);
      context.quadraticCurveTo(halfThickness / 2, -node.length / 2, halfThickness, 0);
      context.fill();

      context.translate(0, -node.length);
      if(!node.children) {
        context.drawImage(
          cherryBlossomImage,
          -RENDER.BLOSSOM_SIZE/2,
          -RENDER.BLOSSOM_SIZE/2,
          RENDER.BLOSSOM_SIZE,
          RENDER.BLOSSOM_SIZE
        );
        return;
      }
      _.each(node.children, function(child, index) {
        context.save();
        context.rotate(child.angle);
        drawTree(child, node, index);
        context.restore();
      });
    }

    return function(node){
      cherryBlossomImage = new Image();
      cherryBlossomImage.src = './images/cherryblossom.png';
      cherryBlossomImage.onload = drawTree.bind(this, node);
    };
  }());
