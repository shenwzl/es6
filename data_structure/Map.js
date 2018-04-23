class Map {
  constructor(arr = []) {
    this.obj = []
    arr.forEach(([v1, v2]) => this.obj.push({
      key: v1,
      value: v2
    }))
    this.size = this.obj.length
  }
  has(key) {
    let hasKey = this.obj.forEach(o => o === key ? true : false)
    return hasKey
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

//export default Map