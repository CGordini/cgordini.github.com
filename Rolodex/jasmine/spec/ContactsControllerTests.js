describe("Contacts Controller", function () {
    beforeEach(module("contactsApp"));

    describe("sort order", function () {
        var scope, controller;

        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            controller = $controller;
        }));

        it("default should be last name", function () {
            controller("contactsController", { $scope: scope });
            expect(scope.sortOrder).toBe("last");

        });
    });

    describe("add Button", function () {
        var scope, controller;

        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            controller = $controller;
        }));

        it("default add text should be Add", function () {
            controller("contactsController", { $scope: scope });
            expect(scope.addText()).toBe("Add");
        });

        it("toggle Add once changes text to Save", function () {
            controller("contactsController", { $scope: scope });
            scope.toggleAddMode();
            expect(scope.addText()).toBe("Save");
        });

        it("toggle Add twice returns text to Add", function () {
            controller("contactsController", { $scope: scope });
            scope.toggleAddMode();
            scope.toggleAddMode();
            expect(scope.addText()).toBe("Add");
        });

        it("toggle Add twice saves new contact", function () {
            controller("contactsController", { $scope: scope });
            var size = scope.contacts.length;
            scope.toggleAddMode();
            scope.toggleAddMode();
            expect(scope.contacts.length).toBe(size + 1);
        });

        it("add new contact clears the temporary object", function () {
            controller("contactsController", { $scope: scope });
            var tmpContact = scope.newContact;
            tmpContact.first = "New";
            tmpContact.last = "Guy";
            scope.toggleAddMode();
            scope.toggleAddMode();
            expect(scope.newContact).not.toBe(tmpContact);
            expect(scope.newContact.first).toBe("");
            expect(scope.newContact.last).toBe("");
        });
    });

    describe("delete Button", function () {
        var scope, controller, window;

        beforeEach(inject(function ($rootScope, $controller, $window) {
            scope = $rootScope.$new();
            controller = $controller;
            window = $window;
        }));

        it("delete removes a contact", function () {
            controller("contactsController", { $scope: scope, $window: window });
            window.confirm = function () {
                return true;
            };
            var length = scope.contacts.length;
            var contactToDelete = scope.contacts[length - 2];
            scope.deleteContact(contactToDelete);
            expect(scope.contacts.length).toBe(length - 1);
            expect(scope.contacts.indexOf(contactToDelete)).toBe(-1);
        });

        it("delete and cancel does nothing contact", function () {
            controller("contactsController", { $scope: scope, $window: window });
            window.confirm = function () {
                return false;
            };
            var length = scope.contacts.length;
            var contactToDelete = scope.contacts[length - 2];
            scope.deleteContact(contactToDelete);
            expect(scope.contacts.length).toBe(length);
            expect(scope.contacts.indexOf(contactToDelete)).toBe(length - 2);
        });

    });

});
