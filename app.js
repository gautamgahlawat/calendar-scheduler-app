var app = angular.module('Myapp', ['ui.calendar', 'ui.bootstrap']);

app.controller('MainController',['$scope', '$compile', 'uiCalendarConfig', function($scope, $compile, uiCalendarConfig) {

    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();
    var currentView = "month";

    //event source that pulls from google.com
    $scope.eventSource = {
        url: "http://www.google.com/calendar/feeds/usa__en%40holiday.calendar.google.com/public/basic",
        className: 'gcal-event',           // an option!
        currentTimezone: 'America/Chicago' // an option!
    };

    $scope.events = [
      { title: "All Day Event test", start: "03/08/2017 12:00 am",end:"03/08/2017 05:30 pm"},
      { title: 'Long Event test', start: "03/16/2017 12:30 am",end: "03/18/2017 06:00 pm"},
    ];

    //$scope.events.start=moment(start).format('MM/DD/YYYY hh:mm a');
    //$scope.events.end=moment(end).format('MM/DD/YYYY hh:mm a');

    $scope.eventSources = [$scope.events];


        /* config object */
    $scope.uiConfig = {
      calendar:{
        height: 450,
        editable: true,
        selectable: true,
        selectHelper: true,
        eventLimit: true,
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


    $scope.curent = {};

// For removing the current event
    $scope.removeEvent = function(event) {
        var index = $scope.events.indexOf(event);
        if(confirm("Remove this Event ?") === true) {
            $scope.events.splice(index, 1);
        }
    };

    $scope.editPencil   = true;

//set the the selected event to current editable
    $scope.editEvent = function(event) {
        $scope.current = event;
    };

// Save the current event to the calendar and clear the form
    $scope.saveEvent = function(event) {
        $scope.events.push(event);
        $scope.current = {};
    };

    $scope.curent = {};

    }]);




