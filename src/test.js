let username = 'smasher'
let password = '1234'

if (username == 'smasher' && password == '1234') {
    console.log('Login successfful')
} else if (username !== 'smasher' && password == '1234') {
    console.log('Incorrect username ')
} else if (username === 'smasher' && password !== '1234') {
    console.log('Incorrect password ')
} else {
    console.log('invalid username or password ')
}
