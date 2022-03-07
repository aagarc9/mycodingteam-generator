const generateCards = answers => {
 
    const manager = answers.manager.map(function(data) {
        let managerHtml = `
        <div class="card" style="width: 18rem;">
        <div class="card-header">
            <h2>${data.name}</h2>
        </div>
        <div class="card-body">
            <h4>Manager<h4>
            <p>ID: ${data.id}</p>
            <p>Email: <a href="mailto:${data.email}">${data.email}</a></p>
            <p>Office Number: ${data.phone}</p>
        </div>
        </div>
        `
        return managerHtml
    });

    const engineer = answers.engineer.map(function(data) {
        let engineerHtml = `
        <div class="card h-100" style="width: 18rem;">
        <div class="card-header">
            <h2>${data.name}</h2>
        </div>
        <div class="card-body">
            <h4>Engineer<h4>
            <p>ID: ${data.id}</p>
            <p>Email: <a href="mailto:${data.email}">${data.email}</a></p>
            <p> Github: <a href="https://github.com/${data.github}" target="_blank">${data.github}</a></p>
        </div>
        </div>
        `
        return engineerHtml
    })

    const intern = answers.intern.map(function(data) {
        let interHtml = `
        <div class="card" style="width: 18rem;">
        <div class="card-header">
            <h2>${data.name}</h2>
        </div>
        <div class="card-body">
            <h4>Intern<h4>
            <p>ID: ${data.id}</p>
            <p>Email: <a href="mailto:${data.email}">${data.email}</a></p>
            <p> School: ${data.school}</p>
        </div>
        </div>
        `
        return interHtml
    })
    return [manager,engineer,intern]
}

module.exports = templateData => {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
            <title>My Coding Team</title>
        </head>
        <header>
            <h1 class="text-center">Meet the Team</h1>
        </header>
        
        <body>
        <main class="d-flex justify-content-between flex-wrap align-items-center"> 
            ${generateCards(templateData)}
        </main>
        </body>
        </html>    
        `
}
