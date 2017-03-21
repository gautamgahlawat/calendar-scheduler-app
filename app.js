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
      { title: 'All Day Event', start: new Date(y, m, 1)},
      { title: 'Long Event', start: new Date(y, m, d - 5),end: new Date(y, m, d - 2)},
      { title: 'Repeating Event', start: new Date(y, m, d - 3, 16, 0),allDay: false},
      { title: 'Repeating Event', start: new Date(y, m, d + 4, 16, 0),allDay: false},
      { title: 'Birthday Party', start: new Date(y, m, d + 1, 19, 0),end: new Date(y, m, d + 1, 22, 30),allDay: true},
      { title: 'Click for Google', start: new Date(y, m, 28),end: new Date(y, m, 29),url: 'http://google.com/'}
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


    $scope.newEvent = function(event) {
        //alert("Add new called!");
        //var test = $scope.input;
        //$scope.events.push({"title": "testEvent", "start": new Date(), "end": new Date(), "allDay":false});
        //event.start = moment(event.start).format("MM/DD/YYYY HH:mm a");
        //event.start = moment(event.end).format("MM/DD/YYYY HH:mm a");

        $scope.curent = {};
    };
    $scope.curent = {};

    $scope.removeEvent = function(event) {
        var index = $scope.events.indexOf(event);
        if(confirm("Remove this Event ?") === true) {
            $scope.events.splice(index, 1);
        }

    };

    $scope.editEvent = function(event) {
        $scope.current = event;
    };

    $scope.saveEvent = function(event) {
        $scope.events.push(event);
        $scope.current = {};
    };

    $scope.curent = {};

    }]);




