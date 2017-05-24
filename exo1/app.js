// importer le module "myFs"
const {appendFileUtf8, readFileUtf8} = require('./myFs')
const {join} = require('path')
const readline = require('readline');
const fileEmitter = require('./fileEmitter')

// importer la config
const {FILES_DIRECTORY} = require('./config.json')

const filename = join(__dirname, FILES_DIRECTORY, 'foo.txt')

readFileUtf8(filename)

fileEmitter.on('write:error', (err, filename) => console.error(`Error writing file ${filename}`, err))
fileEmitter.on('write:success', () => console.log('Write file ok'))
fileEmitter.on('read:error', (err, filename) => console.error(`Error reading file ${filename}`, err))
fileEmitter.on('read:success', (data) => {
    console.log(data)
    appendFileUtf8(filename, 'my content')
})
    
// console.log(appendFileUtf8, readFileUtf8, files_directory)

// lire le fichier /"chemin_dans_la_config"/foo.txt et afficher le contenu dans la console
/*const filenameRead = join(__dirname, FILES_DIRECTORY, 'foo.txt')
const filenameWrite = join(__dirname, FILES_DIRECTORY, 'bar.txt')

readFileUtf8(filenameRead, (err, data) => {
    if (err) throw err
    console.log(data)
    appendFileUtf8(filenameWrite, 'my content\n', (err) => {
        if (err) throw err
        console.log('The data was appended to file!')
    })
})*/

/* const callbackAppendFileUtf8 = (err) => {
    if (err) throw err
    console.log('The data was appended to file!')
}

const callbackReadFileUtf8 = (err, data) => {
    if (err) throw err
    console.log(data)
    appendFileUtf8(filenameWrite, 'my content\n', callbackAppendFileUtf8)
}

readFileUtf8(filenameRead, callbackReadFileUtf8)*/

/*const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const filename = join(__dirname, FILES_DIRECTORY, 'readline.txt')

rl.question('What do you want to write?', (data) => {
    appendFileUtf8(filename, data, (err) => {
        if (err) throw err
        readFileUtf8(filename, (err, data) => {
            if (err) throw err
            console.log(data)
        })
    })
  rl.close();
});
*/