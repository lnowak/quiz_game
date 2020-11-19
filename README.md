## Project Name & Pitch

Quiz Game

Simple multichoice game, created with React.js, React Hooks, CSS, Fetch, react-loadingg library.

Live Demo: https://lnowak.github.io/quiz_game/

## Project Status

Done

## Project Screen Shots

ChoiceScreen - Desktop
![ChoiceScreen-Desktop](https://user-images.githubusercontent.com/51715910/99662209-3be72680-2a65-11eb-85e1-790ff62e4949.png)

ChoiceScreen - Mobile
![ChoiceScreen-Mobile](https://user-images.githubusercontent.com/51715910/99662436-85377600-2a65-11eb-9313-5735e4a1820e.png)

GameScreen - Desktop
![GameScreen-Desktop](https://user-images.githubusercontent.com/51715910/99662491-9d0efa00-2a65-11eb-854a-8fa95eec8b5f.png)

## Installation and Setup Instructions

Clone down this repository. You will need node and npm installed globally on your device.

Installation:

`npm install`

To Start Server:

`npm start`

To Visit App:

`localhost:3000`

## Documentation

Data (questions, answers) fetched from https://opentdb.com/ .

HTML Encoder function

```javascript
    const encode = mystring => {
        return mystring.replace(/&ouml;/g, 'o').replace(/&Ouml;/g, 'O').replace(/&atilde;/g, 'a').replace(/&uuml;/g, 'u').replace(/&lrm;/g, '').replace(/&oacute;/g, 'o').replace(/&auml;/g, 'a').replace(/&quot;/g, '"').replace(/&ldquo;/g, '"').replace(/&rdquo;/g, '"').replace(/&euml;/g, "e").replace(/&hellip;/g, '...').replace(/&#039;/g, "'").replace(/&rsquo;/g, "'").replace(/&lsquo;/g, "'").replace(/&amp;/g, "&").replace(/&‌pi/g, "π").replace(/&shy;/g, "");
    }
```

If any encoded HTML marks appear, add rule to `encode` function in `QuestionArea` Component.
