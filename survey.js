const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({
  input,
  output
});

const spinner = () => {
  let animation = ['|', '/', '-', '\\'], delay = 100;
  for (const char of animation) {
    setTimeout(() => {
      output.write(`\r${char}   `);
    }, delay += 200);
  }
};
const profileGen = (cb) => {
  const answers = {
    name: ''
  };
  rl.question(`So to start, what's your name?\n`, (answer) => {
    output.write(`So you're ${answer}? Well we don't choose our names I guess.\n`);
    answers.name = answer;
    rl.question('What about this, what is your favorite hobby?\n', (answer) => {
      output.write(`Okay so you like ${answer}.. this is going to be hard.\n`);
      answers.hobby = answer;
      rl.question('What kind of music do you listen to while doing that?\n', (answer) => {
        output.write(`Very.. interesting.\n`);
        answers.music = answer;
        rl.question(`If you could own any animal as a pet, what would it be ${answers.name}?\n`, (answer) => {
          output.write(`Future ${answer} parent incoming..\n`);
          answers.pet = answer;
          rl.question(`If you had a favorite place what would it be, ${answers.name}?\n`, (answer) => {
            output.write(`I guess we'll find you in ${answer}.\n`);
            answers.place = answer;
            rl.question(`If you could have any superpower, what would it be?\n`, (answer) => {
              output.write(`${answer}? You'd abuse it for sure.\n`);
              answers.power = answer;
              rl.question(`Last one, what's your favorite thing to eat at home?\n`, (answer) => {
                output.write(`Alright, compiling.. trying not to judge...\n`);
                answers.food = answer;
                spinner();
                setTimeout(() => {
                  output.write('\r ');
                  cb(answers);
                }, 1200);
                rl.close();
              });
            });
          });
        });
      });
    });
  });

  
};
profileGen((something) => {
  console.log(`\n ${something.name} is a ${something.hobby} enthusiast when not planning to get a pet ${something.pet}!\n ${something.name} can often be found at home listening to ${something.music} while monching on ${something.food},\n pretending to be at ${something.place} instead. If ${something.name} could have any superpower, some problems would be caused by their ${something.power}!`);
});


