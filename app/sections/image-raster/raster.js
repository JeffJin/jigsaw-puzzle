'use strict';

/**
 * @ngdoc function
 * @name jigsawPuzzleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jigsawPuzzleApp
 */
angular.module('jigsawPuzzleApp')
  .controller('RasterCtrl', function ($scope) {

    function getTileRaster(sourceRaster, x, y, width, height) {
      var targetRaster = new paper.Raster('empty-image');
      var data = sourceRaster.getData(new paper.Rectangle(x, y, width, height));
      targetRaster.setData(data, new paper.Point(10, 25))
      targetRaster.position = new paper.Point(150, 125);
      return targetRaster;
    }

    var setupPaper = function() {
      console.log('setting up raster');
      // Get a reference to the canvas object
      var canvas = document.getElementById('rasterPanel');
      // Create an empty project and a view for the canvas:
      paper.setup(canvas);

      var puzzleImage = new paper.Raster('raster-image');
      puzzleImage.position = new paper.Point(400, 300);
      //var image = getTileRaster(puzzleImage, 150, 125, 395, 285);
      //
      //var border = boxPath.clone();
      //border.strokeColor = '#000';
      //border.strokeWidth = 1;
      //
      //var tile = new paper.Group(curve, border, image, border);
      //tile.clipped = true;
      //tile.opacity = 1;

      // Draw the view now:
      //paper.view.draw();
    };

    setupPaper();
  });
