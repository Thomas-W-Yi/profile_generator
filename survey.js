const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const output = { Nicknames: 0, activity: 0, music: 0, favoriteMeal: 0, favoriteFood: 0, favoriteSpot: 0, superpower: 0 };
rl.question(`What's your name? Nicknames are also acceptable :)? `, (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer} `);
  output.Nicknames = `${ answer }`;
  rl.question(`What's an activity you like doing? `, (answer) => {
    console.log(`Thank you for your valuable feedback: ${answer}`);
    output.activity = `${ answer }`;
    rl.question(`What do you listen to while doing that? `, (answer) => {
      console.log(`Thank you for your valuable feedback: ${answer}`);
      output.music = `${ answer }`;
      rl.question(`Which meal is your favourite (eg: dinner, brunch, etc.) `, (answer) => {
        console.log(`Thank you for your valuable feedback: ${answer}`);
        output.favoriteMeal = `${ answer }`;
        rl.question(`What's your favourite thing to eat for that meal? `, (answer) => {
          console.log(`Thank you for your valuable feedback: ${answer}`);
          output.favoriteFood = `${ answer }`;
          rl.question(`Which sport is your absolute favourite? `, (answer) => {
            console.log(`Thank you for your valuable feedback: ${answer}`);
            output.favoriteSpot = `${ answer }`;
            rl.question(`What is your superpower? In a few words, tell us what you are amazing at! `, (answer) => {
              console.log(`Thank you for your valuable feedback: ${answer}`);
              output.superpower = `${answer}`;
              console.log(output);
              rl.close();
            });
          });
        });
      });
    });
  });
});
