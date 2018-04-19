class Set {
  constructor(arr = []) {
    this.obj = {}
    if (arr.length) {
      arr.forEach(val => !this.obj[val] ? this.obj[val] = val : null)
    }
    this.size = Object.keys(this.obj).length
  }
  add(value) {
    if (this.obj[value]) {
      return this
    }
    this.obj[value] = value
    this.size++
    return this
  }
  delete(value) {
    if (this.obj[value]) {
      delete this.obj[value]
      this.size--
      return this
    }
    return this
  }
  has(value) {
    return value in this.obj
  }
  clear() {
    this.obj = {}
    this.size = 0
  }
  keys() {
    return Object.values(this.obj)
  }
  values() {
    return Object.values(this.obj)
  }
  entries() {
    return [Object.values(this.obj), Object.values(this.obj)]
  }
}

const a = new Set([1,1])
console.log(a)

const unique = [...new Set([1,1,2,3,4,5,6,5,4,3]).values()]
console.log(unique)