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
  if (this.value === name) {
    return this;
  }
  for (let child of this.children) {
    if (child.value === name) {
      return child;
    }
  }
  return undefined;
}
// `log`: Logs out a specific structure (exampled below) of the family from this point down.

log(depth = 1) {
  let str = '--'.repeat(depth)
  str = str + ` ${this.value}`;
  for (let child of this.children) {
    str = str + `\n${child.log(depth+1)}`;
  }

  return str
}
// `insert`: Inserts a child at this node.

insert(childName) {
  let child = new FamilyTree(childName);
  this.children.push(child);
}

}

module.exports = FamilyTree;
