class Map {
  constructor(arr = []) {
    this.obj = []
    arr.forEach(([key, value]) => this.obj.push({key, value}))
    this.size = this.obj.length
  }
  static isNaNOrIsZero(val) {
    return val.toString() === 'NaN' || val.toString() === '0'
  }
  has(key) {
    let flag = false
    this.obj.forEach(obj => {
      if (Map.isNaNOrIsZero(key)) {
        if (obj.key.toString() === key.toString()) flag = true
      } else {
        if (obj.key === key) flag = true
      }
    })
    return flag
  }
  set(key, value) {
    if (!this.has(key)) {
      this.size++
      this.obj.push({key, value})      
    }
    return this
  }
  get(key) {
    let value
    if (this.has(key)) {
      this.obj.forEach(obj => key === obj.key ? value = obj.value : '')      
    }
    if (Map.isNaNOrIsZero(key)) {
      this.obj.forEach(obj => key.toString() === obj.key.toString() && obj.key !== obj.key.toString() ? value = obj.value : '')
    }
    return value
  }
  delete(key) {
    if (this.has(key)) {
      this.obj.map((obj, index) => {
        if ((Map.isNaNOrIsZero(key) && obj.key.toString() === key.toString()) || obj.key === key) {
          this.obj.splice(index, 1)
          this.size--
        }
      })
      return true
    }
    return false
  }
  clear() {
    this.obj = {}
    this.size = 0
  }
  keys() {
    return this.obj.map(obj => obj.key)
  }
  values() {
    return this.obj.map(obj => obj.value)
  }
  entries() {
    return this.obj.map(obj => {
      return {key: obj.key, value: obj.value}
    })
  }
}