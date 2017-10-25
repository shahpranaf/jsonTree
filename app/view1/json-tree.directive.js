'use strict';

angular.module('myApp.view1')

.directive('jsonTree', jsonTree);

// jsonTree.$inject['ui.tree'];

function jsonTree() {
    return {
        restrict : 'E',
        // replace: true,
        scope: {},
        templateUrl: '../view1/json-tree.tpl.html',
        controller: ['$scope', function MyTabsController($scope) {
            $scope.adddingArea = [];
            $scope.remove = function (scope) {
                scope.remove();
              };
        
              $scope.toggle = function (scope) {
                scope.toggle();
              };
        
              $scope.newSubItem = function (scope) {console.log("HJI");
                var nodeData = scope.$modelValue;
                nodeData.nodes.push({
                  id: nodeData.id * 10 + nodeData.nodes.length,
                  title: nodeData.title + '.' + (nodeData.nodes.length + 1),
                  value: nodeData.value,
                  nodes: []
                });
              };

              $scope.toggleInputBox = function(node) {
                  $scope.adddingArea[node.id] = !$scope.adddingArea[node.id];
                console.log(node.id);
              };
        
              $scope.tree2 = [
                {
                  "id": 4,
                  "title": "tree2 - item4",
                  'value' : 'PRanmav',
                  "nodes": [
                    {
                      "id": 1,
                      "title": "tree2 - item1",
                      "nodes": []
                    }
                  ]
                },
                {
                  "id": 2,
                  "title": "tree2 - item2",
                  "nodes": []
                },
                {
                    "id": 3,
                    "title": "tree2 - item3",
                    "nodes": []
                  },
                {
                  "id": 30,
                  "title": "tree2 - item5",
                  "nodes": []
                },
                {
                  "id": 302,
                  "title": "tree2 - item5.1",
                  "nodes": []
                }
              ];
            
        }]
    }
}
