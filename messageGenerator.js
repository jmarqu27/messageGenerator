/*
This program outputs a random dad joke to the console each time it is run.
When run with index.html, the 'Generate' button outputs the random dad joke
to the console each time it is clicked.
*/

let joke0 = "I'm afraid for the calendar. Its days are numbered.";
let joke1 = "What do you call a fish wearing a bowtie? Sofishticated.";
let joke2 = "Dear Math, grow up and solve your own problems.";
let joke3 = "What did the ocean say to the beach? Nothing, it just waved.";
let joke4 = "I only know 25 letters of the alphabet. I don't know y.";
let joke5 = "How does the moon cut his hair? Eclipse it.";
let joke6 = "Where do fruits go on vacation? Pear-is!";
let joke7 = "Dad, did you get a haircut? No, I got them all cut!";
let joke8 = "What do you call a poor Santa Claus? St. Nickel-less.";
let joke9 = "How do you get a squirrel to like you? Act like a nut.";

//Return a random number 0 through 9
const getRandomNumber = () => {
    return Math.floor(Math.random() * 9);
};


//Output joke depending on getRandomNumber function return
const getRandomJoke = () => {
    switch(getRandomNumber()) {
        case 0:
            console.log(joke0);
            return joke0;
            break;
        case 1:
            console.log(joke1);
            return joke1;
            break;
        case 2:
            console.log(joke2);
            return joke2;
            break;
        case 3:
            console.log(joke3);
            return joke3;
            break;
        case 4:
            console.log(joke4);
            return joke4;
            break;
        case 5:
            console.log(joke5);
            return joke5;
            break;
        case 6:
            console.log(joke6);
            return joke6;
            break;
        case 7:
            console.log(joke7);
            return joke7;
            break;
        case 8:
            console.log(joke8);
            return joke8;
            break;
        case 9:
            console.log(joke9);
            return joke9;
            break;
    };
}

getRandomJoke();
