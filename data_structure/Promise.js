const PENDING = 0
const FULLFILLED = 1
const REJECTED = 2

class Promise {
  constructor(cb) {
    this.status = PENDING
    this.value = null
    this.defferd = []
    setTimeout(cb.bind(this, this.resolve.bind(this), this.reject.bind(this)), 0)
  }

  resolve(result) {
    this.status = FULLFILLED
    this.value = result
    this.done()
  }

  reject(error) {
    this.status = REJECTED
    this.value = error
  }

  handle(fn) {
    if (!fn) return
    const value = this.value
    const status = this.status
    let p
    if (status === PENDING) {
      this.defferd.push(fn)
    } else {
      if (status === FULLFILLED && typeof fn.onfulfiled === 'function') {
        p = fn.onfulfiled(value)
      }
      if (status = REJECTED && typeof fn.onrejected === 'function') {
        p = fn.onrejected(value)
      }
      const promise = fn.promise
      if (promise) {
        if (p && p.constructor === Promise) {
          p.defferd = promise.defferd
        } else {
          p = this
          p.defferd = promise.defferd
          this.done()
        }
      }
    }
  }

  done() {
    const status = this.status
    const defferd = this.defferd    
    if (status === PENDING) return
    defferd.forEach(def => this.handle(def))
  }

  then(onfulfilled, onrejected) {
    const o = { onfulfilled, onrejected }
    const status = this.status
    o.promise = new this.constructor(function () {})
    if (status === PENDING) {
      this.defferd.push(o)
    } else if (status === FULLFILLED || status === REJECTED) {
      this.handle(o)
    }
    return o.promise
  }
}