const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const members = [];

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
function initQuestions() {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'Hello, what is your name?',
            name: 'name'
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email'
        },
        {
            type: 'number',
            message: 'What is your company ID?',
            name: 'id'
        },
        {
            type: 'list',
            message: 'What is your company role?',
            name: 'role',
            choices: [
                'Manager',
                'Engineer',
                'Intern'
            ]
        }
    ]);
}

function internQuestions() {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What school are you attending?',
            name: 'school'
        }
    ]);
}

function engineerQuestions() {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is your Github username?',
            name: 'github'
        }
    ]);
}

function managerQuestions() {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is your office number?',
            name: 'office'
        }
    ]);
}

function addMember() {
    return inquirer.prompt([
        {
            type: 'list',
            message: 'Would you like to add a member to the team?',
            name: 'addmember',
            choices: [
                'Yes',
                'No'
            ]
        }
    ]);
}

function addMemberQuestions() {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is your team member\'s name?',
            name: 'memberName'
        },
        {
            type: 'input',
            message: 'What is your team member\'s email?',
            name: 'memberEmail'
        },
        {
            type: 'number',
            message: 'What is your team member\'s id?',
            name: 'memberId'
        },
        {
            type: 'list',
            message: 'What is your team member\'s role?',
            name: 'memberRole',
            choices: [
                'Manager',
                'Engineer',
                'Intern'
            ]
        }
    ]);
}
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
async function init() {
    try {
        const employee = await initQuestions();
        console.log(employee);
        if(employee.role === 'Manager'){
            const officeNum = await managerQuestions();
            const newManager = new Manager(employee.name, employee.id, employee.email, officeNum.office);
            // const newMember = await addMember();
            console.log(newManager);
        } else if (employee.role === 'Engineer') {
            const github = await engineerQuestions();
        } else {
            const school = await internQuestions();
        }
        console.log(employee);
        // const emArr = Object.values(employee);
        // members.push(emArr);
        // render(members);
        // console.log(members);
    } catch (err) {
        console.log(err);
    }
}
init();

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
