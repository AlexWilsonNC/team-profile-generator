const fs = require('fs');
const inquirer = require('inquirer');

inquirer.prompt([
    {
        name: 'name',
        type: 'input',
        message: 'What is the name of the employee?'
    },
    {
        name: 'position',
        type: 'rawlist',
        message: 'What is their position/role?',
        choices: ['Manager', 'Senior Dev', 'Backend Dev', 'Frontend Dev', 'Intern']
    },
    {
        name: 'employeeId',
        type: 'input',
        message: 'What is the company ID of the employee?'
    },
    {
        name: 'email',
        type: 'input',
        message: 'What is their email?'
    },
    {
        name: 'usernameGithub',
        type: 'input',
        message: 'What is their Github username?'
    },
]).then((answers) =>{
    

    const template =
`
`;

    fs.writeFile(readme.md, template, (error) => {
        if (error) console.log(error);
        console.log('Success, view the HTML doc.');
    })
});