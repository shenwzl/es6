class Map {
  constructor(arr) {
    this.size = 0
    this.obj = {}
    //arr.forEach(([v1, v2]) => this.obj.set(v1, v2))
  }
  has(key) {
    return key in this.obj
  }
  set(key, value) {
    if (!this.has(key)) {
      this.size++
    }
    this.obj[key] = value
  }
  get(key) {
    if (this.has(key)) {
      return this.obj[key]
    }
    return undefined
  }
  delete(key) {
    if (this.obj[key]) {
      delete this.obj[key]
      return true
    }
    return false
  }
  clear() {
    this.obj = {}
    this.size = 0
  }
  keys() {
    return Object.keys(this.obj)
  }
  values() {
    return Object.values(this.obj)
  }
  entries() {
    return Object.entries(this.obj)
  }
}

export default Map