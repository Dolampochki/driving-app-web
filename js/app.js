(function(){
  'use strict';
  angular.module('studentDriverList', [])

    .directive('studentList', function(){
      return {
        restrict: 'E',
        templateUrl: 'partials/student-list.html',
        controller: function(){
          this.students = students;
          this.showForm = false;

          this.getTotal = function(student){
              var totalPaid = 0;
              var totalLessons = student.lessonsStart;
              var takenLessons = 0;
              if (student.lessons) {
                for (var i = 0; i < student.lessons.length; i++) {
                    totalPaid = totalPaid + student.lessons[i].lessonPaid;
                    takenLessons = takenLessons + student.lessons[i].lessonCount;
                }
              }
              totalLessons = takenLessons + totalLessons;
              totalPaid = student.cost * takenLessons - totalPaid;
              return {totalPaid: totalPaid, totalLessons: totalLessons};
          };
        },
        controllerAs: 'studentListCtrl'
      }
    })
    .directive('studentHeader', function(){
      return {
        restrict: 'E',
        templateUrl: 'partials/student-header.html'
      }
    })
    .directive('newStudentForm', function(){
      return {
        restrict: 'E',
        templateUrl: 'partials/new-student-form.html',
        controller: function(){
          this.addStudent = function(form){
            students.push(this.student);
            this.student = {};
            form.$setPristine();
          }
        },
        controllerAs: 'newStudentFormCtrl',
        scope: {
          students: '='
        }
      }
    })
    .directive('lessonsList', function(){
      return {
        restrict: 'E',
        templateUrl: 'partials/lessons-list.html',
        controller: function(){
          this.lessons = students.lessons;
          this.addLesson = function(student,lesson){
            student.lessons.push(this.lesson);
            this.lesson = {};
          }
        },
        controllerAs: 'lessonsListCtrl'
      }
    });


  var students = [
    {
      firstName: 'Moshe',
      lastName: 'Cohen',
      id: 3546783476,
      phone: '0545663467',
      birthDate: '1994-01-14',
      automat: true,
      theory: true,
      cost: 130,
      lessonsStart: 5,
      lessons: [{
        lessonDate: '2017-05-28',
        lessonTime: '12:30',
        lessonCount: 1,
        lessonPaid: 130
      }]
    },{
      firstName: 'Eyal',
      lastName: 'Grinberg',
      id: 5468456845,
      phone: '0545663467',
      birthDate: '2001-05-03',
      automat: false,
      theory: true,
      cost: 120,
      lessonsStart: 0,
      lessons: [{
        lessonDate: '2017-05-28',
        lessonTime: '10:00',
        lessonCount: 1,
        lessonPaid: 130
      },{
        lessonDate: '2017-05-28',
        lessonTime: '14:30',
        lessonCount: 2,
        lessonPaid: 230
      },{
        lessonDate: '2017-04-30',
        lessonTime: '11:30',
        lessonCount: 1,
        lessonPaid: 150
      },{
        lessonDate: '2017-04-23',
        lessonTime: '18:30',
        lessonCount: 1,
        lessonPaid: 130
      }]
    },{
      firstName: 'Fridrich',
      lastName: 'Kuperman',
      id: 3546783476,
      phone: '0545663467',
      birthDate: '1997-11-05',
      automat: true,
      theory: false,
      cost: 140,
      lessonsStart: 0,
      lessons: [{
        lessonDate: '2017-05-28',
        lessonTime: '15:00',
        lessonCount: 1,
        lessonPaid: 130
      },{
        lessonDate: '2017-04-13',
        lessonTime: '10:30',
        lessonCount: 2,
        lessonPaid: 260
      },{
        lessonDate: '2017-05-25',
        lessonTime: '13:30',
        lessonCount: 1,
        lessonPaid: 130
      }]
    },{
      firstName: 'Nataliya',
      lastName: 'Pudov',
      id: 3546783476,
      phone: '0545663467',
      birthDate: '2000-12-05',
      automat: false,
      theory: true,
      cost: 130,
      lessonsStart: 10,
      lessons: [{
        lessonDate: '2017-05-31',
        lessonTime: '16:30',
        lessonCount: 1,
        lessonPaid: 130
      }]
    }
  ];
})();
