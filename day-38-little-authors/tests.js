QUnit.test( 'count of authors who wrote in Arabic', function( assert ) {
  var filtered = QUnitPractice.arabicAuthorsCount();
  assert.deepEqual(filtered, 3, 'Should have returned three results.' );
});

QUnit.test('count the number of English writers', function(assert) {
  var count = QUnitPractice.englishAuthorsCount();
  assert.equal(count, 8, 'Wrong English count bro.');
})

QUnit.test('Compute the average number of published works by English authors', function(assert) {

  var avg = QUnitPractice.averageOfEnglishAuthors();
  assert.equal(avg, 502.25, 'Wrong average bro');
});

QUnit.test('Compute the average number of published works by Japanese authors', function(assert) {
  var avg = QUnitPractice.averageOfJapaneseAuthors();
  assert.equal(avg, 470, 'Yo, count Japanese better');
});

QUnit.test('Compute the average number of published works', function(assert) {
  var avg = QUnitPractice.averageOfAllAuthors();
  assert.equal(avg, 436.3333333333333, 'You are unable to average all of them.');
});

//Write tests to get these bits of data, and then write the functions to return that data to pass the tests
/*

* Count the number of English writers
* Count the number of Russian writers
* Count the number of authors who wrote over 500 books
* The author with the most published works
* Count of the authors whose name begins with the letter 'A'
* Count of the authors whose name begins with the letter 'K'
* Compute the average number of published works
* Compute the average number of published works by English authors
* Compute the average number of published works by Japanese authors

*/
