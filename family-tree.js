class FamilyTree {
  constructor (name) {
    if (name === undefined || typeof name !== 'string') throw 'need to give a name'
    this.value = name
    this.children = []
  }

// `familySize`: Returns this size of **this parent and their children.**
familySize () {
  return 1 + this.children.length;
}

// `findMember`: Given a `name`, it will return the `node` where that member exists. Otherwise, returns undefined.

findMember(name) {
  if(this.value === name) return this;
  return this.children.filter(c => c.value === name)[0]
}
// `log`: Logs out a specific structure (exampled below) of the family from this point down.

log(level=1) {
  let str = '--'.repeat(level)
  str = `${str} ${this.value}`;
  return this.children.reduce((acc, c) => {
    return acc + '\n' + c.log(level+1);
  }, str)
}
// `insert`: Inserts a child at this node.
insert(name) {
  this.children.push(new FamilyTree(name))
}


}

module.exports = FamilyTree;
