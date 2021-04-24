const person = {
  firstName: "Donald",
  lastName: "Trump",
  fullName() {
    console.log(this)
    return `${this.firstName} ${this.lastName}`
  },
  hisName: () => {
    console.log(this)
    return `${this.firstName} ${this.lastName}`
  },
  shoutName() {
    setTimeout(function () {
      console.log(this.fullName())
    }, 3000)
  },
  //take a look at window.setTimeout
  sayName: function () {
    setTimeout(() => {
      console.log(this)
      console.log(this.fullName())
    }, 3000)
  },
}
