angular
    .module("appleCalculator", [])
    .controller("Calculator", ["$scope", Calculator]);

function Calculator($scope) {
    $scope.console = 0;

    var _total = 0;
    var _state = null;

    function _resolveState() {
        switch (_state) {
            case "ADD":
                _total += parseFloat($scope.console);
                $scope.console = 0;
                break;
            case "SUB":
                _total -= parseFloat($scope.console);
                $scope.console = 0;
                break;
            case "MULT":
                _total *= parseFloat($scope.console);
                $scope.console = 0;
                break;
            case "DIV":
                _total /= parseFloat($scope.console);
                $scope.console = 0;
                break;

            default:
                _total = parseFloat($scope.console);
                $scope.console = 0;
                break;
        }
    }
    $scope.add = function () {
        _resolveState();
        _state = "ADD";
    };

    $scope.subtract = function () {
        _resolveState();
        _state = "SUB";
    };

    $scope.multiply = function () {
        _resolveState();
        _state = "MULT";
    };

    $scope.divide = function () {
        _resolveState();
        _state = "DIV";
    };

    $scope.equal = function () {
        _resolveState();
        $scope.console = _total;
        _state = "EQ";
    };

    $scope.print = function (n) {
        if ($scope.console.toString() == "0" || _state == "EQ") {
            $scope.console = "";
        }
        if (_state == "EQ") {
            _state = null;
        }
        $scope.console = $scope.console + n;
    };

    $scope.changePositivity = function () {
        $scope.console = (parseFloat($scope.console) * -1).toString();
    };

    $scope.getPercentage = function () {
        $scope.console = (parseFloat($scope.console) * 0.01).toString();
    };

    $scope.clearTotal = function () {
        $scope.console = 0;
        _total = 0;
        _state = null;
    };
}