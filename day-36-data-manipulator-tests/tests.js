
//Create a function that will sum any array of integers
QUnit.test('Sum function can sum array of integers.', function(assert) {

  var ints = [1, 2, 6, 7, 42];
  var result = DataManipulator.sum(ints);
  assert.equal(result, 58, 'The sum was incorrect.');
});

QUnit.test('Sum function can sum array of integers. Test #2.', function(assert) {

  var ints = [8, 5, 12];
  var result = DataManipulator.sum(ints);
  assert.equal(result, 25, 'The sum was incorrect.');
});

QUnit.test('sumOfNumbersOver10 can sum array of integers, ignoring small numbers.', function(assert) {
  var ints = [8, 50, 12, 1, 4, 110];
  var result = DataManipulator.sumOfNumbersOver10(ints);
  assert.equal(result, 172, 'Sum of large numbers incorrect');
});

QUnit.test('sumOfNumbersOverN can sum an array of integers, ignoring numbers smaller than N.', function(assert) {
  var ints = [17, 2, 9, 100, 56, 15];
  var result = DataManipulator.sumOfNumbersOverN(ints, 16);
  assert.equal(result, 173, 'Sum of numbers over N incorrect.');
});
