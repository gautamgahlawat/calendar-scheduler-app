var app = angular.module('Myapp', ['ui.calendar']);
app.controller('MainController', function($scope) {
    var events = [
        {
            title: "mom's Birthday",
            start: new Date(2017, 3, 20)
        },
        {
            title: "Aniversary Conference",
            start: new Date(2017, 3, 25),
            end: new Date(2017, 3, 27),
            allDay: false // will show the time
        }
    ];

        $scope.eventSources = [events];


        /* config object */
    $scope.uiConfig = {
      calendar:{
        height: 450,
        editable: true,
        header:{
          left: 'month basicWeek basicDay agendaWeek agendaDay',
          center: 'title',
          right: 'today prev,next'
        },
        eventClick: $scope.alertEventOnClick,
        eventDrop: $scope.alertOnDrop,
        eventResize: $scope.alertOnResize
      }
    };

    });




