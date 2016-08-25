'use strict';

function Transformer(name) {
}

Transformer.prototype.transform = function() {
  this.isTransformed = true;
}

Transformer.prototype.addTransformer = function(trans) {
  this.subtransformers.push(trans);
}


function Autobot(name) {
  this.name = name;
  this.isTransformed = false;
  this.subtransformers = [];
}

Autobot.prototype = new Transformer();

Autobot.prototype.yellBattleCry = function() {
  return 'autobots, roll out!';
}




function Decepticon(name) {
  this.name = name;
  this.isTransformed = false;
  this.subtransformers = [];
}

Decepticon.prototype = new Transformer();

Decepticon.prototype.yellBattleCry = function() {
  return 'decepticons, transform!';
}
