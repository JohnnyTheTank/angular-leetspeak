# angular-leetspeak
leetspeak filter for AngularJS

[![npm version](https://badge.fury.io/js/angular-leetspeak.svg)](https://badge.fury.io/js/angular-leetspeak)
[![Bower version](https://badge.fury.io/bo/angular-leetspeak.svg)](https://badge.fury.io/bo/angular-leetspeak)


## Demo
[demo on plnkr](http://plnkr.co/edit/eomjSW?p=preview)

## Usage

1. Install via either [bower](http://bower.io/), [npm](https://www.npmjs.com/) or downloaded files:
    1. via bower: `bower install --save angular-leetspeak`
    2. via npm: `npm install --save angular-leetspeak`
    3. via [downloaded files](https://github.com/JohnnyTheTank/angular-leetspeak/zipball/master)
2. Add `jtt_leetspeak` to your application's module dependencies.
3. Include dependencies and angular-leetspeak in your HTML.
    1. When using bower
    ```html
    <script src="node_modules/angular-leetspeak/dist/angular-leetspeak.min.js"></script>
    ```

    2. When using npm
    ```html
    <script src="node_modules/angular-leetspeak/dist/angular-leetspeak.min.js"></script>
    ```

    3. When using downloaded files
    ```html
    <script src="YOUR_PATH/angular-leetspeak.min.js"></script>
    ```
4. Use the angular filter `leetspeak` like this: `{{ name | leetspeak }}`

## Sample

HTML
```html
<p>
    Author: {{ 'JohnnyTheTank' | leetspeak }}
</p>
```

Result:
```html
<p>
    Author: j0hnny7h374nk
</p>
```

# LICENSE
MIT