npx sequelize-cli 
=> install les différents environnements de travail avec la BDD
    => Visionnable dans le fichier config.json

npx sequelize-cli model:generate --name Post --attributes content:text 
=> COnstruire une nouvelle table User dans la BDD 

sequelize ajoute et créer des éléments triviaux automatiquement => facilite la tâche

obj.getAsyncName() 
    .then(name => console.log('Promised fullfilled  : ${name}'))
    .catch(error => console.error(error))

async function test(){
    try {
        const name = await obj.getAsyncName();
        console.log('Promised fullfilled  : ${name}')
    } catch(error) {console.error(error))}
}

GET /posts
GET /posts/:id


