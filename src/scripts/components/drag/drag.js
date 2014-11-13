'use strict';


angular.module('churchMouseApp')
    .controller('DragController', function() {
    })
    .directive('myDraggable', ['$document', function($document) {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                var startX = 0,
                    startY = 0,
                    x = 0,
                    y = 0;

                element.css({
                    position: 'relative',
                    border: '0.1rem solid #F00',
                    backgroundColor: '#B0B0B0',
                    padding: '0.2rem',
                    cursor: 'pointer'
                });

                element.on('mousedown', function(event) {
                    // Prevent default dragging of selected content
                    event.preventDefault();
                    startX = event.pageX - x;
                    startY - event.pageY - y;
                    $document.on('mousemove', mousemove);
                    $document.on('mouseup', mouseup);
                });

                function mousemove(event) {
                    x = event.pageX - startX;
                    y = event.pageY - startY;
                    element.css({
                        top: y + 'px',
                        left: x + 'px'
                    });
                }

                function mouseup() {
                    $document.off('mousemove', mousemove);
                    $document.off('mouseup', mouseup);
                }
            }
        };
    }]);


