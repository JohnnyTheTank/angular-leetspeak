angular.module('jtt_leetspeak', []);

angular.module('jtt_leetspeak')
    .service('leetspeakService', function () {
        this.alphabets = {
            a: "4",
            b: "8",
            e: "3",
            g: "6",
            i: "1",
            o: "0",
            p: "9",
            s: "5",
            t: "7",
            z: "2"
        };

        this.convertToLeetspeak = function(text) {
            text = text.toLowerCase();
            for (var i = 0; i < text.length; i++) {
                if (this.alphabets[text[i]]) {
                    text = text.replace(text[i], this.alphabets[text[i]]);
                }
            }
            return text;
        }
    });

angular.module('jtt_leetspeak')
    .filter('leetspeak', ['leetspeakService', function (leetspeakService) {
        return function (input, all) {
            return leetspeakService.convertToLeetspeak(input);
        }
    }]);