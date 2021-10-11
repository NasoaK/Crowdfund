(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/mikaelkombia/Documents/GitHub/Crowdfund/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "0ONx":
    /*!**********************************************************!*\
      !*** ./src/app/projects-list/projects-list.component.ts ***!
      \**********************************************************/

    /*! exports provided: ProjectsListComponent */

    /***/
    function ONx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProjectsListComponent", function () {
        return ProjectsListComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_project_list_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../services/project-list.service */
      "g0hd");
      /* harmony import */


      var _services_all_projects_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/all-projects.service */
      "pB8d");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      function ProjectsListComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var project_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", project_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r1.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", project_r1.rewards, " ");
        }
      }

      var ProjectsListComponent = /*#__PURE__*/function () {
        function ProjectsListComponent(projectlistservice, projectService) {
          _classCallCheck(this, ProjectsListComponent);

          this.projectlistservice = projectlistservice;
          this.projectService = projectService;
          this.title = " liste Projects";
          this.projectos = [{
            id: 1,
            name: "Mastercraft Bamboo Monitor Riser",
            introduction: "A beautiful & handcrafted monitor stand to reduce neck and eye strain ",
            total_earned: 80000,
            logo: "./assets/images/logo-mastercraft.svg",
            image: "./assets/images/image-hero-desktop.jpg",
            goal: 100000,
            total_backer: 5700,
            project_debut: "2021-03-05",
            project_end: "2021-05-05",
            thanks: "Your pledge bring us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide . You will get an email once our campaign is completed",
            about: "The Mastercraft Bamboo Monitor Riser is a sturdy and stylish\nplatform that elevates your screen to a more comfortable viewing\nheight. Placing your monitor at eye level has the potential to\nimprove your posture and make you more comfortable while at work,\nhelping you stay focused on the task at hand . \n\n Featuring artisan craftmanship, the simplicity of design creates extra desk space below your computer to allows notepads, pens, and USB sticks to be stored under the stand.",
            rewards: [{
              name: "Bamboo",
              pledge: 25,
              quantity: 101,
              description: " You get an ergonomic stand made of natural bamboo. You've helped us\nlaunch our promotional campaign, and you’ll be added to a special\nBacker member list.",
              hide: false
            }, {
              name: "Black Edition Stand",
              pledge: 75,
              quantity: 64,
              description: "You get a Black Special Edition computer stand and a personal thank",
              hide: false
            }, {
              name: "Mahogany Special Edition ",
              pledge: 200,
              quantity: 100,
              description: "   You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
              hide: false
            }]
          }];
          this.filteredProjects = [];
          this._projectFilter = "";
          this.projects = this.projectos;
          this.rating = 2;
        }

        _createClass(ProjectsListComponent, [{
          key: "projectFilter",
          get: function get() {
            return this._projectFilter;
          },
          set: function set(filter) {
            this._projectFilter = filter;
            this.filteredProjects = this.projectFilter ? this.filterProjects(this.projectFilter) : this.projects;
          }
        }, {
          key: "filterProjects",
          value: function filterProjects(criteria) {
            criteria = criteria.toLocaleLowerCase();
            var res = this.projects.filter(function (project) {
              return project.name.toLocaleLowerCase().indexOf(criteria) > -1;
            });
            return res;
          }
        }, {
          key: "toggleIsNewBadge",
          value: function toggleIsNewBadge() {
            this.showBadge = !this.showBadge;
          }
        }, {
          key: "receiveRatingClicked",
          value: function receiveRatingClicked(message) {
            this.receivedRating = message;
          }
        }, {
          key: "toggleSelected",
          value: function toggleSelected() {
            this.rewardSelected = !this.rewardSelected;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.filteredProjects = this.projects;
            /*  this.projectlistservice.getProjects().subscribe({
               next: (projects) => {
                 this.projects = projects;
                 this.filteredProjects = this.projects;
               },
               error: (err) => (this.errMsg = err),
             });
             this.projectFilter = ""; */
          }
        }]);

        return ProjectsListComponent;
      }();

      ProjectsListComponent.ɵfac = function ProjectsListComponent_Factory(t) {
        return new (t || ProjectsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_project_list_service__WEBPACK_IMPORTED_MODULE_1__["ProjectListService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_all_projects_service__WEBPACK_IMPORTED_MODULE_2__["AllProjectsService"]));
      };

      ProjectsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProjectsListComponent,
        selectors: [["app-projects-list"]],
        inputs: {
          ngOnInit: "ngOnInit"
        },
        outputs: {
          rating: "rating"
        },
        decls: 6,
        vars: 3,
        consts: [["type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], ["class", "container", 4, "ngFor", "ngForOf"], [1, "container"], [1, "card"], ["alt", "", 1, "img-card", 3, "src"], [1, "card-title"], ["routerLink", "/project/1", 1, "card-intro"]],
        template: function ProjectsListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "project works");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProjectsListComponent_Template_input_ngModelChange_3_listener($event) {
              return ctx.projectFilter = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProjectsListComponent_div_4_Template, 7, 3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n]\n");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.title, "\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.projectFilter);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filteredProjects);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"]],
        styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.card[_ngcontent-%COMP%] {\n  width: 400px;\n  height: 400px;\n}\n\n.img-card[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 50%;\n  background-color: red;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  background-color: blue;\n  height: 25%;\n}\n\n.card-intro[_ngcontent-%COMP%] {\n  height: 25%;\n  background-color: green;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb2plY3RzLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQkFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSx1QkFBQTtBQUNGIiwiZmlsZSI6InByb2plY3RzLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uY2FyZCB7XG4gIHdpZHRoOiA0MDBweDtcbiAgaGVpZ2h0OiA0MDBweDtcbn1cblxuLmltZy1jYXJkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbi5jYXJkLXRpdGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbiAgaGVpZ2h0OiAyNSU7XG59XG5cbi5jYXJkLWludHJvIHtcbiAgaGVpZ2h0OiAyNSU7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xufVxuXG4iXX0= */"]
      });
      /***/
    },

    /***/
    "9vUh":
    /*!****************************************!*\
      !*** ./src/app/home/home.component.ts ***!
      \****************************************/

    /*! exports provided: HomeComponent */

    /***/
    function vUh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var HomeComponent = /*#__PURE__*/function () {
        function HomeComponent() {
          _classCallCheck(this, HomeComponent);
        }

        _createClass(HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HomeComponent;
      }();

      HomeComponent.ɵfac = function HomeComponent_Factory(t) {
        return new (t || HomeComponent)();
      };

      HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HomeComponent,
        selectors: [["app-home"]],
        decls: 1,
        vars: 0,
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "header");
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "B/V3":
    /*!************************************************************************!*\
      !*** ./src/app/project-details/reward-modal/reward-modal.component.ts ***!
      \************************************************************************/

    /*! exports provided: RewardModalComponent */

    /***/
    function BV3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RewardModalComponent", function () {
        return RewardModalComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_project_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/project-list.service */
      "g0hd");

      var RewardModalComponent = /*#__PURE__*/function () {
        function RewardModalComponent(route, proLiService) {
          _classCallCheck(this, RewardModalComponent);

          this.route = route;
          this.proLiService = proLiService;
          this.project = {};
          this.reward = {};
        }

        _createClass(RewardModalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var name = this.route.snapshot.paramMap.get('nameR');
            console.log('name: ' + name);
            /*   this.proLiService.getProjects().subscribe((projects :IProject[]) => {
                  this.reward = projects.rewards.find((reward) => reward.name === name);
                });
                */
          }
        }]);

        return RewardModalComponent;
      }();

      RewardModalComponent.ɵfac = function RewardModalComponent_Factory(t) {
        return new (t || RewardModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_project_list_service__WEBPACK_IMPORTED_MODULE_2__["ProjectListService"]));
      };

      RewardModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: RewardModalComponent,
        selectors: [["app-reward-modal"]],
        decls: 39,
        vars: 3,
        consts: [[1, "modal"], [1, "modal-box"], ["width", "15", "height", "15", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M11.314 0l2.828 2.828L9.9 7.071l4.243 4.243-2.828 2.828L7.07 9.9l-4.243 4.243L0 11.314 4.242 7.07 0 2.828 2.828 0l4.243 4.242L11.314 0z", "fill", "#000", "fill-rule", "evenodd", "opacity", ".4"], ["id", "modal-text"], [1, "modal-rewards"], ["type", "radio", "name", "", "id", "", 1, "modal-rewards-checkbox"], [1, "modal-rewards-box"], [1, "modal-pledge-box"], [2, "margin-right", "20px"], [1, "pledge"], [1, "box-btn"], [1, "modal-rewards-left"], [2, "font-size", "larger", "margin-right", "5px"], [1, "modal-rewards-bottom"], [1, "input-btn"], ["type", "text"], [1, "btn-global"]],
        template: function RewardModalComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Back this project");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Pledge with no rewards");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h3", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Pledge $");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "or more");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "strong", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " left ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Enter your pledge");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "$");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Continue");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.reward.description, " Choose to support us without a rewards if you simply believe in our project . As a backer, you will be signed up to receive product updates via email ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.reward.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.reward.description);
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXdhcmQtbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    "OVWj":
    /*!**************************************************************!*\
      !*** ./src/app/project-details/project-details.component.ts ***!
      \**************************************************************/

    /*! exports provided: ProjectDetailsComponent */

    /***/
    function OVWj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProjectDetailsComponent", function () {
        return ProjectDetailsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_project_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/project-list.service */
      "g0hd");
      /* harmony import */


      var _services_all_projects_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/all-projects.service */
      "pB8d");
      /* harmony import */


      var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/cdk/layout */
      "0MNC");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var _c0 = function _c0(a0) {
        return {
          "bookmarked-text": a0
        };
      };

      var _c1 = function _c1(a0) {
        return {
          "margin-left": a0
        };
      };

      function ProjectDetailsComponent_p_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx_r0.bookmarked))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, ctx_r0.bookmarked ? "34px" : "84px"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.bookmarkText());
        }
      }

      function ProjectDetailsComponent_div_49_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " left ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectDetailsComponent_div_49_Template_button_click_14_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var reward_r3 = ctx.$implicit;

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.onSelect(reward_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Select Reward");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var reward_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](reward_r3.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Pledge $", reward_r3.pledge, " or more");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](reward_r3.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", reward_r3.quantity, "");
        }
      }

      function ProjectDetailsComponent_div_50_div_2_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 45);
        }
      }

      function ProjectDetailsComponent_div_50_div_2_div_16_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "em");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Enter your pledge");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 48, 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ProjectDetailsComponent_div_50_div_2_div_16_Template_form_ngSubmit_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

            var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r13.submit(_r12);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Continue");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r10.defaultPledge);
        }
      }

      function ProjectDetailsComponent_div_50_div_2_div_18_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 45);
        }
      }

      function ProjectDetailsComponent_div_50_div_2_div_18_div_16_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "em");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Enter your pledge");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 48, 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ProjectDetailsComponent_div_50_div_2_div_18_div_16_Template_form_ngSubmit_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

            var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

            var reward_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r19.onSubmit(_r18, reward_r15);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "$");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Continue");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

          var reward_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("min", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 3, reward_r15.pledge));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", reward_r15.pledge);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r18.invalid);
        }
      }

      var _c2 = function _c2(a0, a1) {
        return {
          "opened-reward": a0,
          "closed-reward": a1
        };
      };

      function ProjectDetailsComponent_div_50_div_2_div_18_Template(rf, ctx) {
        if (rf & 1) {
          var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectDetailsComponent_div_50_div_2_div_18_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

            var reward_r15 = ctx.$implicit;

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r23.hideShowEffect(reward_r15);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProjectDetailsComponent_div_50_div_2_div_18_div_3_Template, 1, 0, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "strong", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "left");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ProjectDetailsComponent_div_50_div_2_div_18_div_16_Template, 14, 5, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var reward_r15 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](7, _c2, reward_r15.hide, !reward_r15.hide));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", reward_r15.hide);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](reward_r15.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Pledge $", reward_r15.pledge, " or more");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](reward_r15.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](reward_r15.quantity);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", reward_r15.hide);
        }
      }

      function ProjectDetailsComponent_div_50_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectDetailsComponent_div_50_div_2_Template__svg_svg_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r25.toggleAllPledge();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Back this project");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectDetailsComponent_div_50_div_2_Template_div_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r27.selectDefault();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ProjectDetailsComponent_div_50_div_2_div_10_Template, 1, 0, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Pledge with no rewards");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Choose to support us without a rewards if you simply believe in our project . As a backer, you will be signed up to receive product updates via email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ProjectDetailsComponent_div_50_div_2_div_16_Template, 13, 1, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ProjectDetailsComponent_div_50_div_2_div_18_Template, 17, 10, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c2, ctx_r6.defaultPledge, !ctx_r6.defaultPledge));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.defaultSelected);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.defaultSelected);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.project.rewards);
        }
      }

      var _c3 = function _c3(a0) {
        return {
          "opened-reward": a0
        };
      };

      function ProjectDetailsComponent_div_50_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectDetailsComponent_div_50_div_3_Template__svg_svg_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

            var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r29.toggleModal();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Back this project");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectDetailsComponent_div_50_div_3_Template_div_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

            var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r31.togglePledge();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "strong", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "left");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "em");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Enter your pledge");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "form", 48, 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ProjectDetailsComponent_div_50_div_3_Template_form_ngSubmit_26_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

            var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27);

            var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r32.onSubmit(_r28, ctx_r32.selectedReward);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "$");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Continue");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c3, !ctx_r7.reward.hide));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.selectedReward.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Pledge $", ctx_r7.selectedReward.pledge, " or more");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.selectedReward.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r7.selectedReward.quantity, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("min", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](32, 8, ctx_r7.selectedReward.pledge));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r7.selectedReward.pledge);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r28.invalid);
        }
      }

      function ProjectDetailsComponent_div_50_div_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "g", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "circle", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Thanks you for suppport !");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectDetailsComponent_div_50_div_4_Template_button_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34);

            var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r33.toggleModal();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Get it !");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.project.thanks);
        }
      }

      function ProjectDetailsComponent_div_50_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProjectDetailsComponent_div_50_div_2_Template, 19, 7, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProjectDetailsComponent_div_50_div_3_Template, 35, 12, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProjectDetailsComponent_div_50_div_4_Template, 11, 1, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.confirmPay && ctx_r2.allPledges);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.confirmPay && !ctx_r2.allPledges);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.confirmPay);
        }
      }

      var _c4 = function _c4(a0, a1) {
        return {
          "rotate-bkm": a0,
          "translate-bkm": a1
        };
      };

      var _c5 = function _c5(a0) {
        return {
          "fill": a0
        };
      };

      var _c6 = function _c6(a0) {
        return {
          "width": a0
        };
      };

      var ProjectDetailsComponent = /*#__PURE__*/function () {
        function ProjectDetailsComponent(route, projectlistservice, projectService, layout) {
          _classCallCheck(this, ProjectDetailsComponent);

          this.route = route;
          this.projectlistservice = projectlistservice;
          this.projectService = projectService;
          this.layout = layout;
          this.project = {};
          this.selectPledge = false;
          this.reward = {};
          this.confirmPay = false;
          this.defaultPledge = 0;
          this.totalPayment = 0;
        }

        _createClass(ProjectDetailsComponent, [{
          key: "togglePledge",
          value: function togglePledge() {
            this.selectPledge = !this.selectPledge;
          }
          /*   public selectRewards():void{
              this.selectReward= !this.selectReward
            } */

        }, {
          key: "toggleBookmark",
          value: function toggleBookmark() {
            this.bookmarked = !this.bookmarked;
          }
        }, {
          key: "getPerct",
          value: function getPerct(a, b) {
            return a / b;
          }
        }, {
          key: "bookmarkText",
          value: function bookmarkText() {
            if (this.bookmarked) {
              return 'bookmarked';
            } else {
              return 'bookmark';
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var id = +this.route.snapshot.paramMap.get("id");
            this.project = this.projectService.projects.find(function (project) {
              return project.id === id;
            });
            console.log('id :' + id);
            console.log('project :' + this.project);
            /* this.projectlistservice.getProjects().subscribe((projects: IProject[]) => {
               this.project = projects.find((project) => project.id === id);
             });
             this.project.rewards;
             const name:string = this.route.snapshot.paramMap.get("nameR"); */
          }
        }, {
          key: "resetHide",
          value: function resetHide() {
            this.project.rewards.forEach(function (reward) {
              reward.hide = false;
            });
            this.defaultSelected = false;
          }
        }, {
          key: "toggleModal",
          value: function toggleModal() {
            this.showModal = !this.showModal;
          }
        }, {
          key: "toggleAllPledge",
          value: function toggleAllPledge() {
            this.allPledges = !this.allPledges;
            this.toggleModal();
            this.confirmPay = false;
          }
        }, {
          key: "succesPay",
          value: function succesPay() {
            this.confirmPay = !this.confirmPay;
          }
        }, {
          key: "onSelect",
          value: function onSelect(reward) {
            console.log(reward);
            this.selectedReward = reward;
            this.confirmPay = false;
            this.toggleModal();
          }
        }, {
          key: "hideShowEffect",
          value: function hideShowEffect(reward) {
            this.resetHide();
            reward.hide = !reward.hide;
            this.confirmPay = false;
            reward = this.selectedReward;
          }
        }, {
          key: "selectDefault",
          value: function selectDefault() {
            this.resetHide();
            this.defaultSelected = true;
          }
        }, {
          key: "onSubmit",
          value: function onSubmit(form, reward) {
            var pay = form.value['payment'];

            if (pay >= reward.pledge) {
              this.totalPayment = this.totalPayment + pay;
              this.project.total_earned = this.project.total_earned + this.totalPayment;
              this.succesPay();
              reward.quantity--;
              this.allPledges = false;
              this.project.total_backer++;
            }
          }
        }, {
          key: "submit",
          value: function submit(form) {
            var pay = form.value['payment'];

            if (pay >= this.defaultPledge) {
              this.totalPayment = this.totalPayment + pay;
              this.project.total_earned = this.project.total_earned + this.totalPayment;
              this.succesPay();
              this.allPledges = false;
              this.project.total_backer++;
            }
          }
        }]);

        return ProjectDetailsComponent;
      }();

      ProjectDetailsComponent.ɵfac = function ProjectDetailsComponent_Factory(t) {
        return new (t || ProjectDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_project_list_service__WEBPACK_IMPORTED_MODULE_2__["ProjectListService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_all_projects_service__WEBPACK_IMPORTED_MODULE_3__["AllProjectsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["LayoutModule"]));
      };

      ProjectDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProjectDetailsComponent,
        selectors: [["app-project-details"]],
        inputs: {
          achat: "achat"
        },
        decls: 51,
        vars: 28,
        consts: [["alt", "", 1, "project-header", 3, "src"], [1, "card"], ["id", "project-logo", "alt", "", 3, "src"], [1, "project-intro"], [1, "box-btn", 2, "display", "flex"], [1, "btn-global", 3, "click"], ["id", "bookmark", 3, "click"], ["width", "56", "height", "56", "xmlns", "http://www.w3.org/2000/svg", "id", "bookmark-icon", 3, "ngClass"], ["fill", "none", "fill-rule", "evenodd"], ["fill", "#2F2F2F", "cx", "28", "cy", "28", "r", "28", 3, "ngStyle"], ["fill", "#B1B1B1", "d", "M23 19v18l5-5.058L33 37V19z", 3, "ngStyle"], ["id", "bookmark-text", 3, "ngClass", "ngStyle", 4, "ngIf"], [1, "project-figure"], [2, "padding-right", "5px", "padding-left", "5px"], ["id", "count-separation"], [1, "progressBar"], [1, "progress", 3, "ngStyle"], [1, "about"], ["class", "rewards-box", 4, "ngFor", "ngForOf"], ["class", "modal", 4, "ngIf"], ["id", "bookmark-text", 3, "ngClass", "ngStyle"], [1, "rewards-box"], [1, "stand"], [1, "pledge-box"], [1, "pledge"], [1, "reward-description"], [1, "box-btn"], [1, "stand-left"], [1, "left-number"], [1, "modal"], [1, "modal-box"], [4, "ngIf"], ["style", "text-align: center; width: 100%;", 4, "ngIf"], ["width", "15", "height", "15", "xmlns", "http://www.w3.org/2000/svg", "id", "closeCross", 3, "click"], ["d", "M11.314 0l2.828 2.828L9.9 7.071l4.243 4.243-2.828 2.828L7.07 9.9l-4.243 4.243L0 11.314 4.242 7.07 0 2.828 2.828 0l4.243 4.242L11.314 0z", "fill", "#000", "fill-rule", "evenodd", "opacity", ".4"], [2, "font-size", "large"], ["id", "modal-text"], ["id", "default-reward", 1, "modal-rewards", 2, "border", "1px solid lightgrey", 3, "ngClass", "click"], [1, "modal-rewards-top"], [1, "radio"], ["class", "radio-select", 4, "ngIf"], [1, "modal-pledge-box"], ["class", "modal-rewards-bottom bottomSlide", 4, "ngIf"], [1, "modal-rewards-box"], ["class", "modal-rewards", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "radio-select"], [1, "modal-rewards-bottom", "bottomSlide"], ["for", "payment"], [3, "ngSubmit"], ["df", "ngForm"], [1, "input-btn"], [1, "fas", "fa-heart"], ["type", "number", "id", "payment", "name", "payment", "placeholder", "", 3, "ngModel"], ["type", "submit", 1, "btn-global"], [1, "modal-rewards", 3, "ngClass", "click"], [2, "margin-right", "20px"], [1, "modal-rewards-left"], [2, "font-size", "larger", "margin-right", "5px"], ["f", "ngForm"], ["type", "number", "id", "payment", "name", "payment", "required", "", 3, "min", "ngModel"], ["type", "submit", 1, "btn-global", 3, "disabled"], [1, "modal-rewards-bottom"], ["type", "number", "name", "payment", "required", "", 3, "min", "ngModel"], [2, "text-align", "center", "width", "100%"], ["width", "64", "height", "64", "xmlns", "http://www.w3.org/2000/svg", 2, "transform", "scale(1.3)", "margin-bottom", "30px"], ["fill", "#3CB3AB", "cx", "32", "cy", "32", "r", "32"], ["stroke", "#FFF", "stroke-width", "5", "d", "M20 31.86L28.093 40 44 24"], [2, "margin-bottom", "20px"]],
        template: function ProjectDetailsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectDetailsComponent_Template_button_click_10_listener() {
              return ctx.toggleAllPledge();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Back this project");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectDetailsComponent_Template_button_click_12_listener() {
              return ctx.toggleBookmark();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "svg", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "g", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "circle", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "path", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ProjectDetailsComponent_p_17_Template, 2, 7, "p", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "currency");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " of ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "currency");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " backed");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "total backers");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " 56 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "days left");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "About this project");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, ProjectDetailsComponent_div_49_Template, 16, 4, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, ProjectDetailsComponent_div_50_Template, 5, 3, "div", 19);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.project.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.project.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.project.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.project.introduction);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](19, _c4, ctx.bookmarked, ctx.bookmarked));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c5, ctx.bookmarked ? "#49a8a8" : "black"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](24, _c5, ctx.bookmarked ? "white" : "grey"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isSmallScreen);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 15, ctx.project.total_earned + ctx.totalPayment), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 17, ctx.project.goal));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.project.total_backer, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](26, _c6, (ctx.project.total_earned + ctx.totalPayment) / ctx.project.goal * 100 + "%"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.project.about, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.project.rewards);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showModal);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CurrencyPipe"]],
        styles: ["input[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\ninput[type=number][_ngcontent-%COMP%] {\n  -moz-appearance: textfield;\n}\nsection[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 800px;\n  width: 80%;\n  min-width: 0px;\n  position: absolute;\n  top: 45vh;\n  left: 50%;\n  right: 50%;\n  transform: translate(-50%);\n}\n.project-header[_ngcontent-%COMP%] {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 100%;\n  height: 55vh;\n}\n#project-logo[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  top: -28px;\n  left: 50%;\n  right: 50%;\n  transform: translate(-50%);\n  position: absolute;\n}\n.project-intro[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 40px;\n}\n.project-figure[_ngcontent-%COMP%] {\n  font-size: xx-large;\n  margin-bottom: 15px;\n}\nh1[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 28px;\n  margin-bottom: 10px;\n}\n.card[_ngcontent-%COMP%] {\n  background-color: white;\n  margin-bottom: 25px;\n  border-radius: 10px;\n  padding: 50px;\n}\n.card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n  text-align: left;\n  padding: 0 0 0 0;\n  margin-bottom: 50px;\n}\n.card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 30px;\n}\np[_ngcontent-%COMP%] {\n  font-weight: normal;\n  font-size: medium;\n  color: #5f5f5f;\n}\n#count-separation[_ngcontent-%COMP%] {\n  border-left: 1px solid lightgrey;\n  border-right: 1px solid lightgrey;\n  padding: 0px 80px 0px 50px;\n  margin-left: 50px;\n  margin-right: 50px;\n}\n.progressBar[_ngcontent-%COMP%] {\n  background-color: lightgrey;\n  width: 100%;\n  height: 15px;\n  border-radius: 30px;\n}\n.progress[_ngcontent-%COMP%] {\n  height: 100%;\n  background-color: #49a8a8;\n  border-radius: 30px;\n  max-width: 100%;\n}\n.about[_ngcontent-%COMP%] {\n  text-align: left;\n  margin-bottom: 50px;\n  font-weight: 500;\n}\n.btn-global[_ngcontent-%COMP%] {\n  padding: 0 40px 0 40px;\n  height: 56px;\n  background-color: #49a8a8;\n  border: none;\n  color: white;\n  border-radius: 30px;\n  font-weight: 700;\n  cursor: pointer;\n}\n[_ngcontent-%COMP%]:hover.btn-global {\n  background-color: darkcyan;\n  box-shadow: 0px 0px 5px rgba(0, 139, 139, 0.7);\n}\n#bookmark[_ngcontent-%COMP%] {\n  position: relative;\n  height: 56px;\n  padding: 0;\n  background-color: #eeeded;\n  border-radius: 30px;\n  width: 200px;\n  border: none;\n  line-height: 20px;\n  font-weight: 700;\n  outline: none;\n}\n#bookmark-icon[_ngcontent-%COMP%] {\n  float: left;\n  height: 56px;\n  width: 56px;\n  transition: 0.7s;\n  z-index: 3;\n  fill: green;\n  align-items: center;\n}\n[_ngcontent-%COMP%]:hover#bookmark {\n  cursor: pointer;\n}\n.rotate-bkm[_ngcontent-%COMP%] {\n  transform: rotate(360deg);\n}\n.translate-bkm[_ngcontent-%COMP%] {\n  margin-left: 145px;\n}\n#bookmark-text[_ngcontent-%COMP%] {\n  margin: 12px 10px 10px 84px;\n  font-weight: bold;\n  position: absolute;\n  z-index: 1;\n  transition: 0.2s;\n}\n.bookmarked-text[_ngcontent-%COMP%] {\n  color: #49a8a8;\n  margin: 12px 10px 10px 34px;\n  font-weight: bold;\n  position: absolute;\n  z-index: 1;\n  transition: 0.2s;\n}\n.box-btn[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin: 0px 0px 0px 0px;\n}\n.stand[_ngcontent-%COMP%] {\n  border: 1px solid lightgrey;\n  border-radius: 10px;\n  margin-bottom: 30px;\n  padding: 30px;\n}\n.stand[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.pledge-box[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 40px;\n}\nh3[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.pledge[_ngcontent-%COMP%] {\n  color: #49a8a8;\n  font-weight: 500;\n}\n.left-number[_ngcontent-%COMP%] {\n  float: left;\n  font-weight: 700;\n  font-size: 30px;\n  margin-right: 5px;\n  color: black;\n}\n\n#closeCross[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 50px;\n  transition: 0.2s;\n}\n#closeCross[_ngcontent-%COMP%]:hover {\n  transform: scale(1.5) rotate(180deg);\n}\n#closeCross[_ngcontent-%COMP%]    > path[_ngcontent-%COMP%]:hover {\n  fill: darkcyan;\n  cursor: pointer;\n}\n.modal[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  margin-left: auto;\n  margin-right: auto;\n  background-color: #000000a1;\n  overflow: auto;\n  position: fixed;\n  width: 100vw;\n}\n.modal-box[_ngcontent-%COMP%] {\n  z-index: 10;\n  background-color: white;\n  border-radius: 12px;\n  padding: 40px;\n  \n  margin-left: auto;\n  margin-right: auto;\n  max-width: 800px;\n  width: 80%;\n  min-width: 600px;\n  margin-top: 20vh;\n  position: relative;\n}\n.opened-reward[_ngcontent-%COMP%] {\n  border: 2px solid #49a8a8;\n}\n.closed-reward[_ngcontent-%COMP%] {\n  border: 1px solid lightgrey;\n}\n.modal-rewards-top[_ngcontent-%COMP%] {\n  padding: 35px 40px 40px 70px;\n}\n.modal-rewards[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  margin-top: 30px;\n  padding: 0px;\n  position: relative;\n  cursor: pointer;\n}\n.radio[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 20px;\n  padding: 4px;\n  border-radius: 100%;\n  border: 1px solid lightgrey;\n  left: 25px;\n  top: 40px;\n  width: 20px;\n}\n.radio-select[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 100%;\n  background-color: #49a8a8;\n}\n.modal-rewards-left[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 25px;\n  right: 40px;\n}\n.modal-pledge-box[_ngcontent-%COMP%] {\n  display: flex;\n}\n.modal-rewards-bottom[_ngcontent-%COMP%] {\n  border-top: 1px solid lightgrey;\n  width: 100%;\n  display: flex;\n  margin-top: 20px;\n  justify-content: space-between;\n  padding: 23px;\n  align-items: center;\n}\n.bottomSlide[_ngcontent-%COMP%] {\n  -webkit-animation: slide 0.5s forwards;\n          animation: slide 0.5s forwards;\n  z-index: 1;\n}\n@-webkit-keyframes slide {\n  0% {\n    opacity: 0;\n    margin-top: -70px;\n  }\n  100% {\n    opacity: 1;\n    margin-top: 10px;\n  }\n}\n@keyframes slide {\n  0% {\n    opacity: 0;\n    margin-top: -70px;\n  }\n  100% {\n    opacity: 1;\n    margin-top: 10px;\n  }\n}\nform[_ngcontent-%COMP%] {\n  display: flex;\n}\n.input-btn[_ngcontent-%COMP%] {\n  border: 1px solid lightgrey;\n  height: 56px;\n  display: flex;\n  padding: 10px;\n  padding-left: 20px;\n  border-radius: 25px;\n  margin-right: 20px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  position: relative;\n  cursor: pointer;\n}\n.input-btn[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%] {\n  border: none;\n  width: 70px;\n  margin-left: 10px;\n  outline: none;\n}\n@media (max-width: 800px) {\n  .card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    font-weight: 700;\n    font-size: 30px;\n  }\n\n  #count-separation[_ngcontent-%COMP%] {\n    border-left: 1px solid lightgrey;\n    border-right: 1px solid lightgrey;\n    padding: 0px 80px 0px 50px;\n    margin-left: 20px;\n    margin-right: 20px;\n  }\n}\n@media (max-width: 750px) {\n  #closeCross[_ngcontent-%COMP%] {\n    right: 25px;\n  }\n\n  .project-intro[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n  }\n\n  section[_ngcontent-%COMP%] {\n    top: 33vh;\n    width: 80%;\n    min-width: 320px;\n    transform: translate(-50%);\n  }\n\n  p[_ngcontent-%COMP%] {\n    font-size: 14px;\n    color: #8a8a8a;\n    font-weight: 400;\n  }\n\n  #bookmark[_ngcontent-%COMP%] {\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n  }\n\n  #bookmark-text[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .translate-bkm[_ngcontent-%COMP%] {\n    margin-left: 0px;\n  }\n\n  .project-header[_ngcontent-%COMP%] {\n    height: 40vh;\n    background-size: cover;\n  }\n\n  h1[_ngcontent-%COMP%] {\n    font-weight: 700;\n    font-size: 22px;\n    margin-bottom: 20px;\n  }\n\n  .card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    display: block;\n    text-align: center;\n  }\n\n  #count-separation[_ngcontent-%COMP%] {\n    border-left: none;\n    border-right: none;\n    border-top: 1px solid lightgrey;\n    border-bottom: 1px solid lightgrey;\n    padding: 20px 0px 20px 0px;\n    margin-top: 20px;\n    margin-bottom: 20px;\n  }\n\n  .card[_ngcontent-%COMP%] {\n    margin-bottom: 25px;\n    padding: 50px 20px;\n  }\n\n  .pledge-box[_ngcontent-%COMP%] {\n    display: block;\n    margin-bottom: 20px;\n  }\n\n  .box-btn[_ngcontent-%COMP%] {\n    display: block;\n    margin-top: 25px;\n  }\n\n  .btn-global[_ngcontent-%COMP%] {\n    font-size: 14px;\n    font-weight: 500;\n    padding: 12px 35px;\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n  }\n\n  .stand-left[_ngcontent-%COMP%] {\n    margin-bottom: 25px;\n  }\n}\n\n@media (max-width: 750px) {\n  .modal-box[_ngcontent-%COMP%] {\n    z-index: 10;\n    background-color: white;\n    border-radius: 12px;\n    padding: 25px;\n    \n    margin-left: 5vw;\n    margin-right: 5vw;\n    width: auto;\n    min-width: 300px;\n    position: relative;\n  }\n\n  .modal-rewards[_ngcontent-%COMP%] {\n    border-radius: 10px;\n    margin-top: 30px;\n    padding: 0px;\n    position: relative;\n  }\n\n  #modal-text[_ngcontent-%COMP%] {\n    margin-top: 20px;\n  }\n\n  .modal-rewards-bottom[_ngcontent-%COMP%], .modal-rewards-top[_ngcontent-%COMP%] {\n    padding: 25px;\n    display: block;\n  }\n\n  .modal-pledge-box[_ngcontent-%COMP%] {\n    display: block;\n    margin-bottom: 25px;\n    margin-left: 45px;\n  }\n\n  .modal-rewards-left[_ngcontent-%COMP%] {\n    position: relative;\n    top: unset;\n    right: unset;\n  }\n\n  .modal-rewards-bottom[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n    padding-bottom: 10px;\n    text-align: center;\n  }\n\n  .btn-global[_ngcontent-%COMP%] {\n    font-size: 14px;\n    font-weight: 500;\n    padding: 12px 28px;\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n  }\n\n  .input-btn[_ngcontent-%COMP%] {\n    height: 50px;\n    margin-right: 10px;\n    margin-left: 0px;\n  }\n\n  .input-btn[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%] {\n    width: 50px;\n  }\n\n  form[_ngcontent-%COMP%] {\n    display: flex;\n    padding: 0px 10px;\n    justify-content: space-between;\n  }\n\n  @-webkit-keyframes slide {\n    0% {\n      opacity: 0;\n      margin-top: -150px;\n    }\n    100% {\n      opacity: 1;\n      margin-top: 0px;\n    }\n  }\n\n  @keyframes slide {\n    0% {\n      opacity: 0;\n      margin-top: -150px;\n    }\n    100% {\n      opacity: 1;\n      margin-top: 0px;\n    }\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb2plY3QtZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQ0FBQTtBQUNBOztFQUVFLHdCQUFBO0VBQ0EsU0FBQTtBQUNGO0FBRUEsWUFBQTtBQUNBO0VBQ0UsMEJBQUE7QUFDRjtBQUVBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLDBCQUFBO0FBQ0Y7QUFFQTtFQUNFLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNGO0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7QUFDRjtBQUVBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQUNGO0FBRUE7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFFQTtFQUNFLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFDRjtBQUVBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUNGO0FBRUE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUFDRjtBQUVBO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFDRjtBQUVBO0VBQ0UsZ0NBQUE7RUFDQSxpQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUNGO0FBRUE7RUFDRSwyQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUVBO0VBRUUsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBQUY7QUFHQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUFGO0FBR0E7RUFDRSxzQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFBRjtBQUVBO0VBQ0UsMEJBQUE7RUFDQSw4Q0FBQTtBQUNGO0FBRUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFDRjtBQUVBO0VBRUUsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBQUY7QUFHQTtFQUNBLGVBQUE7QUFBQTtBQUVBO0VBQ0UseUJBQUE7QUFDRjtBQUNBO0VBQ0Usa0JBQUE7QUFFRjtBQUNBO0VBQ0UsMkJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBRUY7QUFFQTtFQUNFLGNBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUFDRjtBQUVBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7QUFDRjtBQUVBO0VBQ0UsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQUNGO0FBRUE7RUFDRSxtQkFBQTtBQUNGO0FBRUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUNGO0FBRUE7RUFDRSxnQkFBQTtBQUNGO0FBRUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUFDRjtBQUVBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQUNGO0FBRUEsVUFBQTtBQUdBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFERjtBQUlBO0VBQ0Usb0NBQUE7QUFERjtBQUdDO0VBQ0MsY0FBQTtFQUNDLGVBQUE7QUFBSDtBQUlBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBREY7QUFHQTtFQUNFLFdBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQUY7QUFFQTtFQUNFLHlCQUFBO0FBQ0Y7QUFFQTtFQUNFLDJCQUFBO0FBQ0Y7QUFFQTtFQUNFLDRCQUFBO0FBQ0Y7QUFFQTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBQ0Y7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBQ0Y7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQUNGO0FBQ0E7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBRUY7QUFDQTtFQUNFLGFBQUE7QUFFRjtBQUFBO0VBQ0UsK0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFHRjtBQURBO0VBQ0Esc0NBQUE7VUFBQSw4QkFBQTtFQUNBLFVBQUE7QUFJQTtBQURBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsaUJBQUE7RUFJRjtFQUZBO0lBQ0UsVUFBQTtJQUNBLGdCQUFBO0VBSUY7QUFDRjtBQVpBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsaUJBQUE7RUFJRjtFQUZBO0lBQ0UsVUFBQTtJQUNBLGdCQUFBO0VBSUY7QUFDRjtBQURBO0VBQ0UsYUFBQTtBQUdGO0FBQUE7RUFDRSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUdGO0FBQUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNGLGlCQUFBO0VBQ0EsYUFBQTtBQUdBO0FBQUE7RUFHRTtJQUNFLGdCQUFBO0lBQ0EsZUFBQTtFQUNGOztFQUdGO0lBQ0UsZ0NBQUE7SUFDQSxpQ0FBQTtJQUNBLDBCQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtFQUFBO0FBQ0Y7QUFJQTtFQUdBO0lBQ0UsV0FBQTtFQUpBOztFQU1GO0lBQ0UsZ0JBQUE7RUFIQTs7RUFLRjtJQUNFLFNBQUE7SUFDQSxVQUFBO0lBQ0EsZ0JBQUE7SUFFQSwwQkFBQTtFQUhBOztFQUtGO0lBQ0UsZUFBQTtJQUNBLGNBQUE7SUFDQSxnQkFBQTtFQUZBOztFQUtGO0lBQ0UsMEJBQUE7SUFBQSx1QkFBQTtJQUFBLGtCQUFBO0VBRkE7O0VBSUY7SUFDRSxhQUFBO0VBREE7O0VBSUY7SUFDRSxnQkFBQTtFQURBOztFQUdGO0lBQ0UsWUFBQTtJQUNBLHNCQUFBO0VBQUE7O0VBSUY7SUFDSSxnQkFBQTtJQUNBLGVBQUE7SUFDQSxtQkFBQTtFQURGOztFQUlGO0lBQ0ksY0FBQTtJQUNBLGtCQUFBO0VBREY7O0VBS0Y7SUFDRSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0EsK0JBQUE7SUFDQSxrQ0FBQTtJQUNBLDBCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtFQUZBOztFQU1GO0lBRUUsbUJBQUE7SUFDQSxrQkFBQTtFQUpBOztFQU9GO0lBQ0UsY0FBQTtJQUNBLG1CQUFBO0VBSkE7O0VBT0Y7SUFDRSxjQUFBO0lBQ0EsZ0JBQUE7RUFKQTs7RUFPRjtJQUNFLGVBQUE7SUFDQSxnQkFBQTtJQUNBLGtCQUFBO0lBQ0EsMkJBQUE7SUFBQSx3QkFBQTtJQUFBLG1CQUFBO0VBSkE7O0VBT0Y7SUFDRSxtQkFBQTtFQUpBO0FBQ0Y7QUFPQSxxQkFBQTtBQUVBO0VBS0U7SUFDRSxXQUFBO0lBQ0EsdUJBQUE7SUFDQSxtQkFBQTtJQUNBLGFBQUE7SUFDQSxZQUFBO0lBQ0EsZ0JBQUE7SUFDQSxpQkFBQTtJQUNBLFdBQUE7SUFDQSxnQkFBQTtJQUNBLGtCQUFBO0VBVkY7O0VBYUE7SUFDRSxtQkFBQTtJQUNBLGdCQUFBO0lBQ0EsWUFBQTtJQUNBLGtCQUFBO0VBVkY7O0VBYUY7SUFDRSxnQkFBQTtFQVZBOztFQWFGO0lBQ0UsYUFBQTtJQUNBLGNBQUE7RUFWQTs7RUFlRjtJQUNFLGNBQUE7SUFDQSxtQkFBQTtJQUNBLGlCQUFBO0VBWkE7O0VBZUY7SUFDRSxrQkFBQTtJQUNBLFVBQUE7SUFDQSxZQUFBO0VBWkE7O0VBZUY7SUFDQSxvQkFBQTtJQUNBLGtCQUFBO0VBWkU7O0VBZUY7SUFDRSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxrQkFBQTtJQUNBLDJCQUFBO0lBQUEsd0JBQUE7SUFBQSxtQkFBQTtFQVpBOztFQWVGO0lBQ0UsWUFBQTtJQUNBLGtCQUFBO0lBQ0EsZ0JBQUE7RUFaQTs7RUFlRjtJQUNFLFdBQUE7RUFaQTs7RUFlRjtJQUNFLGFBQUE7SUFDQSxpQkFBQTtJQUNBLDhCQUFBO0VBWkE7O0VBZ0JGO0lBQ0U7TUFDRSxVQUFBO01BQ0Esa0JBQUE7SUFiQTtJQWVGO01BQ0UsVUFBQTtNQUNBLGVBQUE7SUFiQTtFQUNGOztFQUtGO0lBQ0U7TUFDRSxVQUFBO01BQ0Esa0JBQUE7SUFiQTtJQWVGO01BQ0UsVUFBQTtNQUNBLGVBQUE7SUFiQTtFQUNGO0FBQ0YiLCJmaWxlIjoicHJvamVjdC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ2hyb21lLCBTYWZhcmksIEVkZ2UsIE9wZXJhICovXG5pbnB1dDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcbmlucHV0Ojotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBtYXJnaW46IDA7XG59XG5cbi8qIEZpcmVmb3ggKi9cbmlucHV0W3R5cGU9bnVtYmVyXSB7XG4gIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xufVxuXG5zZWN0aW9uIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWF4LXdpZHRoOiA4MDBweDtcbiAgd2lkdGg6IDgwJTtcbiAgbWluLXdpZHRoOiAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0NXZoO1xuICBsZWZ0OiA1MCU7XG4gIHJpZ2h0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUpO1xufVxuXG4ucHJvamVjdC1oZWFkZXIge1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTV2aDtcbn1cblxuI3Byb2plY3QtbG9nbyB7XG4gIHdpZHRoOiA1NnB4O1xuICBoZWlnaHQ6IDU2cHg7XG4gIHRvcDogLTI4cHg7XG4gIGxlZnQ6IDUwJTtcbiAgcmlnaHQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLnByb2plY3QtaW50cm8ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG5cbi5wcm9qZWN0LWZpZ3VyZSB7XG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbmgxIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiA1MHB4O1xufVxuXG4uY2FyZCB1bCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDAgMCAwIDA7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG5cbi5jYXJkIHVsIGxpIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuXG5wIHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiBtZWRpdW07XG4gIGNvbG9yOiAjNWY1ZjVmO1xufVxuXG4jY291bnQtc2VwYXJhdGlvbiB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgbGlnaHRncmV5O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBsaWdodGdyZXk7XG4gIHBhZGRpbmc6IDBweCA4MHB4IDBweCA1MHB4O1xuICBtYXJnaW4tbGVmdDogNTBweDtcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xufVxuXG4ucHJvZ3Jlc3NCYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG59XG5cbi5wcm9ncmVzcyB7XG4gIFxuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0OWE4YTg7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuLmFib3V0IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmJ0bi1nbG9iYWwge1xuICBwYWRkaW5nOiAwIDQwcHggMCA0MHB4O1xuICBoZWlnaHQ6IDU2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0OWE4YTg7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG46aG92ZXIuYnRuLWdsb2JhbHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2N5YW47XG4gIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IHJnYmEoMCwgMTM5LCAxMzksIDAuNyk7XG4gICAgXG59XG4jYm9va21hcmsge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogNTZweDtcbiAgcGFkZGluZzogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzOCwgMjM3LCAyMzcpO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICB3aWR0aDogMjAwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbiNib29rbWFyay1pY29uIHtcblxuICBmbG9hdDogbGVmdDtcbiAgaGVpZ2h0OiA1NnB4O1xuICB3aWR0aDogNTZweDtcbiAgdHJhbnNpdGlvbjogMC43cztcbiAgei1pbmRleDogMztcbiAgZmlsbDogZ3JlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbjpob3ZlciNib29rbWFya3tcbmN1cnNvcjogcG9pbnRlcjtcbn1cbi5yb3RhdGUtYmtte1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xufVxuLnRyYW5zbGF0ZS1ia217XG4gIG1hcmdpbi1sZWZ0OiAxNDVweDtcbn1cblxuI2Jvb2ttYXJrLXRleHQge1xuICBtYXJnaW46IDEycHggMTBweCAxMHB4IDg0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIHRyYW5zaXRpb246IDAuMnM7XG59XG5cblxuLmJvb2ttYXJrZWQtdGV4dHtcbiAgY29sb3I6ICM0OWE4YTg7XG4gIG1hcmdpbjogMTJweCAxMHB4IDEwcHggMzRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbiAgdHJhbnNpdGlvbjogMC4ycztcbn1cblxuLmJveC1idG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbjogMHB4IDBweCAwcHggMHB4O1xufVxuXG4uc3RhbmQge1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZXk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIHBhZGRpbmc6IDMwcHg7XG59XG5cbi5zdGFuZCA+IHB7XG4gIG1hcmdpbi1ib3R0b20gOiAyMHB4XG59XG5cbi5wbGVkZ2UtYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuXG5oMyB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5wbGVkZ2Uge1xuICBjb2xvcjogIzQ5YThhODtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmxlZnQtbnVtYmVyIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLyogTW9kYWwgKi9cbi8vVE9ETyBtb2RhbCBwb3MtYWJzIDsgaW50ZWdyYXRpb25cblxuI2Nsb3NlQ3Jvc3N7XG4gIHBvc2l0aW9uOmFic29sdXRlO1xuICByaWdodDo1MHB4O1xuICB0cmFuc2l0aW9uOjAuMnNcbiBcbn1cbiNjbG9zZUNyb3NzOmhvdmVye1xuICB0cmFuc2Zvcm06c2NhbGUoMS41KSByb3RhdGUoMTgwZGVnKTtcbn1cbiAjY2xvc2VDcm9zcyA+IHBhdGg6aG92ZXJ7XG4gIGZpbGw6ZGFya2N5YW47XG4gICBjdXJzb3I6cG9pbnRlcjtcbiAgIFxuICBcbn1cbi5tb2RhbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwYTE7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDB2dztcbn1cbi5tb2RhbC1ib3gge1xuICB6LWluZGV4OiAxMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBwYWRkaW5nOiA0MHB4O1xuICAvKiAgIG1heWJlICovXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1heC13aWR0aDogODAwcHg7XG4gIHdpZHRoOiA4MCU7XG4gIG1pbi13aWR0aDogNjAwcHg7XG4gIG1hcmdpbi10b3A6IDIwdmg7XG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xufVxuLm9wZW5lZC1yZXdhcmR7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM0OWE4YTg7XG5cbn1cbi5jbG9zZWQtcmV3YXJke1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZXk7XG5cbn1cbi5tb2RhbC1yZXdhcmRzLXRvcHtcbiAgcGFkZGluZyA6MzVweCA0MHB4IDQwcHggNzBweCA7XG59XG5cbi5tb2RhbC1yZXdhcmRzIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgcGFkZGluZzogMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjpwb2ludGVyXG5cbn1cbi5yYWRpbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAyMHB4O1xuICBwYWRkaW5nOiA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcbiAgbGVmdDogMjVweDtcbiAgdG9wOiA0MHB4O1xuICB3aWR0aDogMjBweDtcbiBcbn1cbi5yYWRpby1zZWxlY3R7XG4gIHdpZHRoOjEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjojNDlhOGE4IDtcbn1cbi5tb2RhbC1yZXdhcmRzLWxlZnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjVweDtcbiAgcmlnaHQ6IDQwcHg7XG59XG5cbi5tb2RhbC1wbGVkZ2UtYm94IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5tb2RhbC1yZXdhcmRzLWJvdHRvbSB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBsaWdodGdyZXk7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDIzcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uYm90dG9tU2xpZGV7XG5hbmltYXRpb246IHNsaWRlIDAuNXMgZm9yd2FyZHM7XG56LWluZGV4OiAxO1xufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlIHtcbiAgMCV7XG4gICAgb3BhY2l0eTogMDtcbiAgICBtYXJnaW4tdG9wOiAtNzBweDtcbiAgfVxuICAxMDAle1xuICAgIG9wYWNpdHk6IDE7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxufVxuXG5mb3Jte1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uaW5wdXQtYnRuIHtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmV5O1xuICBoZWlnaHQ6IDU2cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaW5wdXQtYnRuPmlucHV0e1xuICBib3JkZXI6IG5vbmU7XG4gIHdpZHRoOiA3MHB4O1xubWFyZ2luLWxlZnQ6IDEwcHg7XG5vdXRsaW5lOiBub25lO1xufVxuXG5AbWVkaWEobWF4LXdpZHRoOjgwMHB4KXtcbiBcbiAgXG4gIC5jYXJkIHVsIGxpIHtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgfVxuXG5cbiNjb3VudC1zZXBhcmF0aW9uIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBsaWdodGdyZXk7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcbiAgcGFkZGluZzogMHB4IDgwcHggMHB4IDUwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbn1cblxuQG1lZGlhKG1heC13aWR0aDo3NTBweCl7XG5cblxuI2Nsb3NlQ3Jvc3N7XG4gIHJpZ2h0OjI1cHhcbn1cbi5wcm9qZWN0LWludHJve1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuc2VjdGlvbntcbiAgdG9wOiAzM3ZoO1xuICB3aWR0aDogODAlO1xuICBtaW4td2lkdGg6IDMyMHB4O1xuXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUpO1xufVxucHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjpyZ2IoMTM4LCAxMzgsIDEzOCk7XG4gIGZvbnQtd2VpZ2h0OjQwMFxuXG59XG4jYm9va21hcmt7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbn1cbiNib29rbWFyay10ZXh0e1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4udHJhbnNsYXRlLWJrbXtcbiAgbWFyZ2luLWxlZnQ6MHB4O1xufVxuLnByb2plY3QtaGVhZGVye1xuICBoZWlnaHQ6IDQwdmg7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cbiAgfVxuXG5oMXtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG5cbi5jYXJkIHVsIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH0gXG5cblxuI2NvdW50LXNlcGFyYXRpb24ge1xuICBib3JkZXItbGVmdDogbm9uZTtcbiAgYm9yZGVyLXJpZ2h0Om5vbmU7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBsaWdodGdyZXk7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyZXk7XG4gIHBhZGRpbmc6IDIwcHggMHB4IDIwcHggMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBcbn1cblxuLmNhcmQge1xuXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIHBhZGRpbmc6IDUwcHggMjBweCA7XG59XG5cbi5wbGVkZ2UtYm94IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5ib3gtYnRue1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMjVweDtcbn1cblxuLmJ0bi1nbG9iYWx7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZzogMTJweCAzNXB4O1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xufVxuXG4uc3RhbmQtbGVmdHtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cbn1cblxuLyogTW9kYWwgUmVzcG9uc2l2ZSAqL1xuXG5AbWVkaWEobWF4LXdpZHRoOjc1MHB4KXtcblxuICAucmFkaW97XG4gIFxuICB9XG4gIC5tb2RhbC1ib3gge1xuICAgIHotaW5kZXg6IDEwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIHBhZGRpbmc6IDI1cHg7XG4gICAgLyogICBtYXliZSAqL1xuICAgIG1hcmdpbi1sZWZ0OiA1dnc7XG4gICAgbWFyZ2luLXJpZ2h0OiA1dnc7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgbWluLXdpZHRoOiAzMDBweDtcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgfVxuXG4gIC5tb2RhbC1yZXdhcmRze1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4jbW9kYWwtdGV4dHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLm1vZGFsLXJld2FyZHMtYm90dG9tLCAubW9kYWwtcmV3YXJkcy10b3B7XG4gIHBhZGRpbmc6MjVweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIFxufVxuXG5cbi5tb2RhbC1wbGVkZ2UtYm94e1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgbWFyZ2luLWxlZnQ6IDQ1cHg7XG59XG5cbi5tb2RhbC1yZXdhcmRzLWxlZnR7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOnVuc2V0O1xuICByaWdodDogdW5zZXQ7XG59XG5cbi5tb2RhbC1yZXdhcmRzLWJvdHRvbT5we1xucGFkZGluZy1ib3R0b20gOiAxMHB4O1xudGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYnRuLWdsb2JhbHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBwYWRkaW5nOiAxMnB4IDI4cHg7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG59XG5cbi5pbnB1dC1idG4ge1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbn1cblxuLmlucHV0LWJ0bj5pbnB1dHtcbiAgd2lkdGg6IDUwcHg7XG59XG5cbmZvcm17XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDBweCAxMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cblxuQGtleWZyYW1lcyBzbGlkZSB7XG4gIDAle1xuICAgIG9wYWNpdHk6IDA7XG4gICAgbWFyZ2luLXRvcDogLTE1MHB4O1xuICB9XG4gIDEwMCV7XG4gICAgb3BhY2l0eTogMTtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gIH1cbn1cbn0iXX0= */"]
      });
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/layout */
      "0MNC");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      function AppComponent_ul_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " About");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Discover");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Get Started");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AppComponent__svg_svg_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "g", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AppComponent__svg_svg_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "toggleMenu": a0
        };
      };

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(layout) {
          _classCallCheck(this, AppComponent);

          this.layout = layout;
          this.title = 'Crowdfund';
        }

        _createClass(AppComponent, [{
          key: "toggleMenu",
          value: function toggleMenu() {
            this.menuState = !this.menuState;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.layout.isMatched('(max-width: 599px)')) {
              console.log('smallScreen');
              this.menuState = false;
              this.isSmallScreen = true;
            } else if (this.layout.isMatched('(min-width: 599px)')) {
              console.log('big screen');
              this.isSmallScreen = false;
              this.menuState = true;
            }

            console.log(this.isSmallScreen);
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 9,
        vars: 6,
        consts: [[3, "ngClass"], ["id", "logo"], [4, "ngIf"], ["id", "btn-menu", 3, "click"], ["width", "16", "height", "15", "xmlns", "http://www.w3.org/2000/svg", 4, "ngIf"], ["width", "15", "height", "15", "xmlns", "http://www.w3.org/2000/svg", "fill", "#FFF", 4, "ngIf"], [2, "border-top-left-radius", "10px", "border-top-right-radius", "10px"], ["routerLink", "/home", "routerLinkActive", "active"], ["routerLink", "/project", "routerLinkActive", "active"], [2, "border-bottom-left-radius", "10px", "border-bottom-right-radius", "10px"], ["routerLink", "#", "routerLinkActive", "active"], ["width", "16", "height", "15", "xmlns", "http://www.w3.org/2000/svg"], ["fill", "#FFF", "fill-rule", "evenodd"], ["d", "M0 0h16v3H0zM0 6h16v3H0zM0 12h16v3H0z"], ["width", "15", "height", "15", "xmlns", "http://www.w3.org/2000/svg", "fill", "#FFF"], ["d", "M11.314 0l2.828 2.828L9.9 7.071l4.243 4.243-2.828 2.828L7.07 9.9l-4.243 4.243L0 11.314 4.242 7.07 0 2.828 2.828 0l4.243 4.242L11.314 0z", "fill", "#FFF", "fill-rule", "evenodd"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " crowdfund");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_ul_4_Template, 10, 0, "ul", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_span_click_5_listener() {
              return ctx.toggleMenu();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppComponent__svg_svg_6_Template, 3, 0, "svg", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppComponent__svg_svg_7_Template, 2, 0, "svg", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "router-outlet");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx.menuState));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.menuState);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.menuState);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.menuState);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"]],
        styles: ["nav[_ngcontent-%COMP%] {\n  color: white;\n  display: flex;\n  justify-content: space-between;\n  padding: 50px 160px 20px 160px;\n  width: 100%;\n  top: 0;\n  position: fixed;\n  \n  z-index: 5;\n}\n\nnav[_ngcontent-%COMP%]   #logo[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: x-large;\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 0px 0px 0px 20px;\n}\n\na[_ngcontent-%COMP%] {\n  color: white;\n  text-decoration: none;\n}\n\n#btn-menu[_ngcontent-%COMP%] {\n  display: none;\n}\n\n@media (max-width: 1050px) {\n  .toggleMenu[_ngcontent-%COMP%] {\n    background-color: rgba(12, 12, 12, 0.521);\n    height: 100vh;\n    transition: 0.5s;\n  }\n\n  nav[_ngcontent-%COMP%] {\n    padding: 30px 7vw 20px 7vw;\n    display: block;\n    justify-content: none;\n    box-shadow: inset 0px 80px 50px -45px #000000a3;\n  }\n\n  nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    display: block;\n    margin-top: 30px;\n    background-color: white;\n    color: black;\n    padding: 0px;\n    border-radius: 10px;\n  }\n\n  nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    padding: 21px;\n    border-bottom: 1px solid #ebebeb;\n  }\n\n  li[_ngcontent-%COMP%]:hover {\n    box-shadow: inset -1px -1px 3px rgba(94, 94, 94, 0.439);\n  }\n\n  #btn-menu[_ngcontent-%COMP%] {\n    display: block;\n    position: absolute;\n    right: 7vw;\n    top: 30px;\n  }\n\n  a[_ngcontent-%COMP%] {\n    color: black;\n    font-weight: 500;\n    font-size: large;\n  }\n\n  li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\n    font-size: x-large;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxNQUFBO0VBQ0EsZUFBQTtFQUNEOzs7S0FBQTtFQUdJLFVBQUE7QUFFTDs7QUFFQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxxQkFBQTtBQUNGOztBQUVBO0VBQ0ksYUFBQTtBQUNKOztBQUVBO0VBR0U7SUFDRSx5Q0FBQTtJQUNBLGFBQUE7SUFDQSxnQkFBQTtFQURGOztFQUlBO0lBQ0UsMEJBQUE7SUFDQSxjQUFBO0lBQ0EscUJBQUE7SUFFQSwrQ0FBQTtFQURGOztFQUtBO0lBQ0UsY0FBQTtJQUNBLGdCQUFBO0lBQ0EsdUJBQUE7SUFDQSxZQUFBO0lBQ0EsWUFBQTtJQUNBLG1CQUFBO0VBRkY7O0VBTUE7SUFDRSxhQUFBO0lBQ0EsZ0NBQUE7RUFIRjs7RUFNQTtJQUNFLHVEQUFBO0VBSEY7O0VBS0E7SUFDRSxjQUFBO0lBQ0Esa0JBQUE7SUFDQSxVQUFBO0lBQ0EsU0FBQTtFQUZGOztFQUtBO0lBQ0UsWUFBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7RUFGRjs7RUFJQTtJQUNFLGtCQUFBO0VBREY7QUFDRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuYXYge1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogNTBweCAxNjBweCAyMHB4IDE2MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgdG9wOiAwO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gLyogIGJveC1zaGFkb3c6IDBweCAxMDdweCA3NXB4IC0yN3B4IHJnYmEoMCwgMCwgMCwgMC43NSkgaW5zZXQ7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDEwN3B4IDc1cHggLTI3cHggcmdiYSgwLCAwLCAwLCAwLjc1KSBpbnNldDtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMTA3cHggNzVweCAtMjdweCByZ2JhKDAsIDAsIDAsIDAuNzUpIGluc2V0O1xuICAgKi96LWluZGV4OiA1O1xufVxuXG5cbm5hdiAjbG9nbyB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcbn1cblxubmF2IHVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG5uYXYgdWwgbGkge1xuICBwYWRkaW5nOiAwcHggMHB4IDBweCAyMHB4O1xufVxuXG5hIHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbiNidG4tbWVudXtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG5AbWVkaWEobWF4LXdpZHRoOiAxMDUwcHgpe1xuXG5cbiAgLnRvZ2dsZU1lbnV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMiwgMTIsIDEyLCAwLjUyMSk7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICB9XG5cbiAgbmF2e1xuICAgIHBhZGRpbmc6IDMwcHggN3Z3IDIwcHggN3Z3O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGp1c3RpZnktY29udGVudDogbm9uZTtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDBweCAxMDlweCAzOXB4IC02M3B4ICMwMDAwMDBhMzsgXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDgwcHggNTBweCAtNDVweCAjMDAwMDAwYTM7XG4gXG4gIH1cblxuICBuYXYgdWx7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgXG4gICAgXG4gIH1cbiAgbmF2IHVsIGxpIHtcbiAgICBwYWRkaW5nOiAyMXB4IDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDIzNSwgMjM1LCAyMzUpO1xuICB9XG5cbiAgbGk6aG92ZXIge1xuICAgIGJveC1zaGFkb3c6IGluc2V0IC0xcHggLTFweCAzcHggcmdiYSg5NCwgOTQsIDk0LCAwLjQzOSk7XG4gIH1cbiAgI2J0bi1tZW51e1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogN3Z3O1xuICAgIHRvcDogMzBweDtcbiAgfVxuXG4gIGF7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiBsYXJnZTtcbiAgfVxuICBsaTpob3ZlciBhe1xuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcbiAgfVxuICBcbn0iXX0= */"]
      });
      ;
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/layout */
      "0MNC");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./home/home.component */
      "9vUh");
      /* harmony import */


      var _projects_list_projects_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./projects-list/projects-list.component */
      "0ONx");
      /* harmony import */


      var _project_details_project_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./project-details/project-details.component */
      "OVWj");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _project_details_reward_modal_reward_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./project-details/reward-modal/reward-modal.component */
      "B/V3");
      /* harmony import */


      var _services_all_projects_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./services/all-projects.service */
      "pB8d");
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/radio */
      "QibW");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || AppModule)();
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({
        providers: [_services_all_projects_service__WEBPACK_IMPORTED_MODULE_10__["AllProjectsService"]],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["LayoutModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _projects_list_projects_list_component__WEBPACK_IMPORTED_MODULE_5__["ProjectsListComponent"], _project_details_project_details_component__WEBPACK_IMPORTED_MODULE_6__["ProjectDetailsComponent"], _project_details_reward_modal_reward_modal_component__WEBPACK_IMPORTED_MODULE_9__["RewardModalComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["LayoutModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioModule"]]
        });
      })();
      /***/

    },

    /***/
    "g0hd":
    /*!**************************************************!*\
      !*** ./src/app/services/project-list.service.ts ***!
      \**************************************************/

    /*! exports provided: ProjectListService */

    /***/
    function g0hd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProjectListService", function () {
        return ProjectListService;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var ProjectListService = /*#__PURE__*/function () {
        function ProjectListService(http) {
          _classCallCheck(this, ProjectListService);

          this.http = http;
          this.PROJECT_API_URL = "api/projects.json";
        }

        _createClass(ProjectListService, [{
          key: "getProjects",
          value: function getProjects() {
            return this.http.get(this.PROJECT_API_URL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (projects) {
              return console.log("projects: ", projects);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
          }
        }, {
          key: "handleError",
          value: function handleError(error) {
            if (error.error instanceof ErrorEvent) {
              // A client-side or network error occurred. Handle it accordingly.
              console.error("An error occurred:", error.error.message);
            } else {
              // The backend returned an unsuccessful response code.
              // The response body may contain clues as to what went wrong.
              console.error("Backend returned code ".concat(error.status, ", ") + "body was: ".concat(error.error));
            } // Return an observable with a user-facing error message.


            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])("Something bad happened; please try again later.");
          }
        }]);

        return ProjectListService;
      }();

      ProjectListService.ɵfac = function ProjectListService_Factory(t) {
        return new (t || ProjectListService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
      };

      ProjectListService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: ProjectListService,
        factory: ProjectListService.ɵfac,
        providedIn: "root"
      });
      /***/
    },

    /***/
    "pB8d":
    /*!**************************************************!*\
      !*** ./src/app/services/all-projects.service.ts ***!
      \**************************************************/

    /*! exports provided: AllProjectsService */

    /***/
    function pB8d(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AllProjectsService", function () {
        return AllProjectsService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AllProjectsService = function AllProjectsService() {
        _classCallCheck(this, AllProjectsService);

        this.projects = [{
          id: 1,
          name: "Mastercraft Bamboo Monitor Riser",
          introduction: "A beautiful & handcrafted monitor stand to reduce neck and eye strain ",
          total_earned: 80000,
          logo: "./assets/images/logo-mastercraft.svg",
          image: "./assets/images/image-hero-desktop.jpg",
          goal: 100000,
          total_backer: 5700,
          project_debut: "2021-03-05",
          project_end: "2021-05-05",
          thanks: "Your pledge bring us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide . You will get an email once our campaign is completed",
          about: "The Mastercraft Bamboo Monitor Riser is a sturdy and stylish\nplatform that elevates your screen to a more comfortable viewing\nheight. Placing your monitor at eye level has the potential to\nimprove your posture and make you more comfortable while at work,\nhelping you stay focused on the task at hand . \n\n Featuring artisan craftmanship, the simplicity of design creates extra desk space below your computer to allows notepads, pens, and USB sticks to be stored under the stand.",
          rewards: [{
            name: "Bamboo",
            pledge: 25,
            quantity: 101,
            description: " You get an ergonomic stand made of natural bamboo. You've helped us\nlaunch our promotional campaign, and you’ll be added to a special\nBacker member list.",
            hide: false
          }, {
            name: "Black Edition Stand",
            pledge: 75,
            quantity: 64,
            description: "You get a Black Special Edition computer stand and a personal thank",
            hide: false
          }, {
            name: "Mahogany Special Edition ",
            pledge: 200,
            quantity: 100,
            description: "   You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
            hide: false
          }]
        }];
      };

      AllProjectsService.ɵfac = function AllProjectsService_Factory(t) {
        return new (t || AllProjectsService)();
      };

      AllProjectsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AllProjectsService,
        factory: AllProjectsService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./home/home.component */
      "9vUh");
      /* harmony import */


      var _project_details_project_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./project-details/project-details.component */
      "OVWj");
      /* harmony import */


      var _projects_list_projects_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./projects-list/projects-list.component */
      "0ONx");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: "home",
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]
      }, {
        path: "project",
        component: _projects_list_projects_list_component__WEBPACK_IMPORTED_MODULE_3__["ProjectsListComponent"]
      }, {
        path: "project/:id",
        component: _project_details_project_details_component__WEBPACK_IMPORTED_MODULE_2__["ProjectDetailsComponent"]
      }, {
        path: "about",
        component: _projects_list_projects_list_component__WEBPACK_IMPORTED_MODULE_3__["ProjectsListComponent"]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map