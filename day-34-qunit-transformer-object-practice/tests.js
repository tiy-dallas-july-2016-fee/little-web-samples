
QUnit.test('When you create a transformer with a name, it has a name property', function( assert ) {
  var trans = new Autobot('Optimus Prime');
  assert.equal(trans.name, 'Optimus Prime');
});

QUnit.test('When an autobot yells his battlecry, it is "autobots, roll out"', function(assert) {
  var trans = new Autobot('Optimus Prime');
  var battleCry = trans.yellBattleCry();
  assert.equal(battleCry, 'autobots, roll out!');
});

QUnit.test('When a decepticon yells his battlecry, it is "decepticons, transform!"', function(assert) {
  var trans = new Decepticon('Starscream');
  var battleCry = trans.yellBattleCry();
  assert.equal(battleCry, 'decepticons, transform!');
});

QUnit.test('Autobots need a property so we can know if they are transformed', function(assert) {
  var autobot = new Autobot('Optimus Prime');
  assert.equal(autobot.isTransformed, false, '"isTransformed" should be false before transform');
  autobot.transform();
  console.log('optimus', autobot);
  assert.equal(autobot.isTransformed, true);
});

QUnit.test('Decepticons need a property so we can know if they are transformed', function(assert) {
  var decepticon = new Decepticon('Starscream');
  assert.equal(decepticon.isTransformed, false, '"isTransformed" should be false before transform');
  decepticon.transform();
  assert.equal(decepticon.isTransformed, true);
});

QUnit.test('Transformers need a subtransformers property just in case they have them.', function(assert) {
  var trans = new Decepticon('Soundwave');
  assert.notEqual(trans.subtransformers, undefined, 'Does not have array.');
});

QUnit.test('Transformers can add subtransforms with a function called "addTransformer".', function(assert) {
  var soundwave = new Decepticon('Soundwave');
  console.log('soundwave', soundwave);
  //var ravage = new Decepticon('Ravage');
  var ravage = 'ravage';
  console.log('ravage', ravage);
  soundwave.addTransformer(ravage);
  assert.equal(soundwave.subtransformers.length, 1);
});
