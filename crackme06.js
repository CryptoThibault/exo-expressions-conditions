let password = '1a2b!AZEAZEAZEAZEAZEAZEAZ'
const crackme6 = (password) => {
  console.log(password[0] === '1' && password[1] === 'a' && password[2] === '2' && password[3] === 'b' && password[4] === '!' && password.length > 13 ? 'OK' : 'BAD')
}
crackme6(password)
