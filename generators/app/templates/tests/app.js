define([
  'intern!object',
  'intern/chai!assert',
  'utils',
  'cards',
  'card'
], function (registerSuite, assert, Utils, Cards, Card) {
  registerSuite({
    'name': 'App',
    'Cards': {
      'constructor': {
        name: 'constructor',
        'returns an object': function () {
          assert.typeOf(Cards, 'object');
        }
      },
      'Cards.generate()': {
        name: 'Cards.generate()',
        'is defined': function () {
          assert.isDefined(Cards.generate);
        },
        'returns a string if passed a number > 0 as argument': function () {
          assert.notEqual(Cards.generate(10), '');
        },
        'returns an empty string if another type or nothing is passed as param': function () {
          assert.equal(Cards.generate(undefined), '');
          assert.equal(Cards.generate('10'), '');
          assert.equal(Cards.generate({}), '');
          assert.equal(Cards.generate([]), '');
          assert.equal(Cards.generate(function () {}), '');
          assert.equal(Cards.generate(), '');
        }
      }
    },
    'Card': {
      'constructor': {
        name: 'constructor',
        'returns an object': function () {
          assert.typeOf(Card, 'object');
        }
      },
      'Card.generate()': {
        name: 'Card.generate()',
        'is defined': function () {
          assert.isDefined(Card.generate);
        },
        'returns an object': function () {
          assert.isObject(Card.generate());
        },
      }
    },
    'Utils': {
      'constructor': {
        name: 'constructor',
        'returns an object': function () {
          assert.typeOf(Utils, 'object');
        }
      },
      'Utils.random': {
        'Utils.random.itemFrom()': {
          name: 'Utils.random.itemFrom()',
          'is defined': function () {
            assert.isDefined(Utils.random.itemFrom);
          },
          'returns a random element of an array': function () {
            assert.isDefined(Utils.random.itemFrom([0, 1, 2, 3]));
            assert.isDefined(Utils.random.itemFrom([0]));
          },
          'returns nothing if the array is empty, if another type or nothing is passed as param': function () {
            assert.isUndefined(Utils.random.itemFrom(undefined));
            assert.isUndefined(Utils.random.itemFrom(10));
            assert.isUndefined(Utils.random.itemFrom('test'));
            assert.isUndefined(Utils.random.itemFrom({}));
            assert.isUndefined(Utils.random.itemFrom([]));
            assert.isUndefined(Utils.random.itemFrom(function () {}));
            assert.isUndefined(Utils.random.itemFrom());
          }
        },
        'Utils.random.numberBetween()': {
          name: 'Utils.random.numberBetween()',
          'is defined': function () {
            assert.isDefined(Utils.random.numberBetween);
          },
          'returns a random number of a 2-values range': function () {
            assert.isNumber(Utils.random.numberBetween(0, 10));
          },
          'returns one of the param if the other is NaN': function () {
            assert.equal(Utils.random.numberBetween(undefined, 10), 10);
            assert.equal(Utils.random.numberBetween(10, '11'), 10);
            assert.equal(Utils.random.numberBetween(10, {}), 10);
            assert.equal(Utils.random.numberBetween([], 10), 10);
            assert.equal(Utils.random.numberBetween(10, function () {}), 10);
          },
          'returns the first param if it is the only one passed': function () {
            assert.equal(Utils.random.numberBetween(10), 10);
          },
          'returns nothing if another type or nothing is passed as param': function () {
            assert.isUndefined(Utils.random.numberBetween(undefined));
            assert.isUndefined(Utils.random.numberBetween('test'));
            assert.isUndefined(Utils.random.numberBetween({}));
            assert.isUndefined(Utils.random.numberBetween([]));
            assert.isUndefined(Utils.random.numberBetween(function () {}));
            assert.isUndefined(Utils.random.numberBetween());
          }
        }
      }
    }
  });
});
