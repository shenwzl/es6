class WeakMap {
  constructor(arr = '') {
    if (arr) {
      throw new Error('Constructor cannot pass params')
    } 
    this.obj = []
    this.size = this.obj.length
  }
  static typeError(key) {
    if (typeof key !== 'object') {
      throw new Error(`TypeError: ${key} is not an object!`)
    }
    if (Object.prototype.toString.call(key) !== '[object Object]') {
      throw new Error(`TypeError: Invalid value used as weak map key`)
    } 
  }
  has(key) {
    WeakMap.typeError(key)    
    let flag = false
    this.obj.forEach(obj => {
      if (JSON.stringify(key) === JSON.stringify(obj.key)) {
        flag = true
      }
    })
    return flag
  }
  set(key, value) {
    WeakMap.typeError(key)
    if (!this.has(key)) {
      this.size++
      this.obj.push({key, value})      
    }
    return this
  }
  get(key) {
    WeakMap.typeError(key)
    if (this.has(key)) {
      return this.obj.map(obj => JSON.stringify(key) === JSON.stringify(obj.key) ? obj.value : undefined).toString()  
    }
    return undefined
  }
  delete(key) {
    WeakMap.typeError(key)    
    if (this.has(key)) {
      this.obj.map((obj, index) => {
        if (JSON.stringify(key) === JSON.stringify(obj.key)) {
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