class Set {
  constructor(arg = []) {
    this.size = 0
    this[Symbol.species] = this
    this._set = Array.isArray(arg) && arg
    Set.refresh.call(this)
  }
  static refresh() {    
    let _set = []
    this._set.forEach(obj => {
      if(_set.indexOf(obj) === -1 && obj !== undefined) {
        _set.push(obj)
      }
    })
    this._set = _set
    this.size = this._set.length
  }
  add(value) {
    this._set.push(value)
    Set.refresh.call(this)
    return this
  }
  delete(value) {
    if (this._set.indexOf(value) !== -1) {
      this._set[this._set.indexOf(value)] = undefined
    }
    Set.refresh.call(this)
    return this
  }
  has(value) {
    if (this._set.indexOf(value) !== -1) return true
    return false
  }
  clear() {
    this._set.length = 0
    this.size = 0
    return this
  }
  keys() {
    return this[Symbol.iterator]()
  }
  values() {
    return this[Symbol.iterator]()
  }
  entries() {
    let result = []
    this.forEach((key, value) => result.push([key, value]))
    return result
  }
  forEach(fn, ctx) {
    if (typeof fn !== 'function') {
      throw new Error('params is not a function')
    }
    this._set.forEach(value => fn.call(ctx || value, value, value, this))
  }
  *[Symbol.iterator] () {
    let index = 0
    let val = undefined
    while(index < this.size) {
      val = this._set[index]
      yield val
      index++
    }
  }
}