function greet(msg: string): string {
  // console.log(msg)
  const user = {
    name: 'shravan',
  }
  const name = user.name
  return msg + name
}

greet('Hello')
