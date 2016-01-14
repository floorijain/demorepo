promoApp.directive('myModal', function () {
        return {
        	 template: '<div class="modal fade">' + 
          '<div class="myModal-dialog">' + 
            '<div class="myModal-content">' + 
              '<div class="myModal-header">' + 
                '<button type="button" class="close" data-dismiss="myModal" aria-hidden="true">&times;</button>' + 
                '<h4 class="myModal-title">{{ title }}</h4>' + 
              '</div>' + 
              '<div class="myModal-body" ng-transclude></div>' + 
            '</div>' + 
          '</div>' + 
        '</div>',
            restrict: 'E',
            transclude: true,
      replace:true,
      scope:true,
            link: function postLink(scope, element, attrs) {
       /* scope.title = attrs.title;*/

        scope.$watch(attrs.visible, function(value){
          if(value == true)
            $(element).modal('show');
          else
            $(element).modal('hide');
        });
      }
    };
                 
    });
