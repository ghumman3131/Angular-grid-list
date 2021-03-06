
angular
    .module('MyApp',['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])
    .controller('gridListDemoCtrl', function($scope) {

        this.tiles = buildGridModel({
            icon : "avatar:svg-",
            title: "Svg-",
            background: ""
        });

        function buildGridModel(tileTmpl){
            var it, results = [ ];

            for (var j=0; j<11; j++) {

                it = angular.extend({},tileTmpl);
                it.icon  = it.icon + (j+1);
                it.title = it.title + (j+1);
                it.span  = { row : 1, col : 1 };

                switch(j+1) {
                    case 1:
                        it.background = "red";
                       
                        break;

                    case 2: it.background = "green";
                        it.span.row = it.span.col = 1;break;
                    case 3: it.background = "darkBlue";      break;
                    case 4:
                        it.background = "blue";
                      
                        break;

                    case 5:
                        it.background = "yellow";
                      
                        break;

                    case 6: it.background = "pink";          break;
                    case 7: it.background = "darkBlue";      break;
                    case 8: it.background = "purple";        break;
                    case 9: it.background = "deepBlue";      break;
                    case 10: it.background = "lightPurple";  break;
                    case 11: it.background = "yellow";       break;
                }

                results.push(it);
            }
            return results;
        }
    })
    .config( function( $mdIconProvider ){
        $mdIconProvider.iconSet("avatar", 'icons/avatar-icons.svg', 128);
    });


/**
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that can be in foundin the LICENSE file at http://material.angularjs.org/license.
 **/