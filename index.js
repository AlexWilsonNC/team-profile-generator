const fs = require('fs');
const inquirer = require('inquirer');

// const anotherEmployee = [], // at top

const createHTML = (html) => {
    fs.writeFile('new.html', (html), (error) => {
        if (error) console.log(error);
        console.log('Success, check out the HTML doc!');
    })
};

const renderBaseHTML = (...content) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Alex's Team Builder</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
    <header id="main-header">
    <h1>Alex's Team</h1>
    </header>
        <main id="container">
            <div class="box">
                ${content.join('\n')}
            </div>
        </main>
    <script src="index.js"></script>
    </body>
    </html>`
};

const renderHeader = (employeeName, position) => {
    return `<header class="box-header">
        <h2 class="employee-name">${employeeName}</h2>
        <h3 class="position">${position}</h3>
    </header>`
};

const renderInfo = (employeeId, email, usernameGithub) => {
    return `<ul>
        <li class="employee-id">ID: ${employeeId}</li><hr>
        <li class="email">${email}</li><hr>
        <li class="github-user">Github: <a href="https://github.com/${usernameGithub}" target="_">${usernameGithub}</a></li>
    </ul>`
};

const employeeQuestions = inquirer.prompt([
    {
        name: 'employeeName',
        type: 'input',
        message: 'What is the name of the employee?',
        validate: (input) => !!input
    },
    {
        name: 'position',
        type: 'rawlist',
        message: 'What is their position/role?',
        choices: ['Manager', 'Senior Dev', 'Backend Dev', 'Frontend Dev', 'Intern'],
        validate: (input) => !!input
    },
    {
        name: 'employeeId',
        type: 'input',
        message: 'What is the company ID of the employee?',
        validate: (input) => !!input
    },
    {
        name: 'email',
        type: 'input', // add default email app functionality
        message: 'What is their email?',
        validate: (input) => !!input
    },
    {
        name: 'usernameGithub',
        type: 'input',
        message: 'What is their Github username?',
        validate: (input) => !!input
    },
    // {
    //     name: 'yesOrNo',
    //     type: 'rawlist',
    //     message: 'Add another employee?',
    //     choices: ['Yes', 'No']
    // }
]).then(({ employeeName, position, employeeId, email, usernameGithub }) => {

    const anotherEmployee = () => {
        const againQuestion = [
        {
            name: 'yesOrNo',
            type: 'rawlist',
            message: 'Add another employee?',
            choices: ['yes', 'no'] 
        }
    ]

    inquirer.prompt(againQuestion).then((answers) => {
        if (answers.another == 'yes') {
            init();
        } else {
            process.exit();
        }
    })

    function init() {
        employeeQuestions();
    }
};

    const createMainHeader = renderHeader(employeeName, position);
    const createList = renderInfo(employeeId, email, usernameGithub);
    anotherEmployee();
    const createPage = renderBaseHTML(
        createMainHeader, 
        createList, 
        );
        createHTML(createPage);
});