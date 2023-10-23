function greet(msg: string): string {
  const user = {
    name: 'shravan',
  }
  const name = user['name']
  return msg + name
}

greet('Hello')
