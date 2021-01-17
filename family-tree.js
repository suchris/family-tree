class FamilyTree {
  constructor (name) {
    if (name === undefined || typeof(name) !== "string") throw 'need to give a name'
    this.value = name
    this.children = []
  }

// `familySize`: Returns this size of **this parent and their children.**
familySize () {
  return this.children.length + 1;
}

// `findMember`: Given a `name`, it will return the `node` where that member exists. Otherwise, returns undefined.

findMember(name) {
  return obj;
}
// `log`: Logs out a specific structure (exampled below) of the family from this point down.

log() {
  let str = ''
  return str
}
// `insert`: Inserts a child at this node.

insert(childName) {
  let child = new FamilyTree(childName);
  this.children.push(child);
}

}

module.exports = FamilyTree;
