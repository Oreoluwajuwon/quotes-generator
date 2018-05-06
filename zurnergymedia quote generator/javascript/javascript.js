var quotes = [
    'My life is my message. - Mahatma Gandhi',
    'Time means a lot to me because, you see, I, too, am also a learner and am often lost in the joy of forever developing and simplifying. If you love life, don’t waste time, for time is what life is made up of. - Bruce Lee',
    'Life is what happens when you’re busy making other plans. -John Lennon',
    'It is better to be hated for what you are than to be loved for what you are not. -Andre Gide',
    'Dost thou love life? Then do not squander time, for that is the stuff life is made of. -Benjamin Franklin',
]
var quotes = setInterval(function() { newQuote() } , 1000);

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    var quotes
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}

var myDate = new Date();
    var hrs = myDate.getHours();

    var greet;

    if (hrs < 12)
        greet = 'Good Morning,';
    else if (hrs >= 12 && hrs <= 17)
        greet = 'Good Afternoon,';
    else if (hrs >= 17 && hrs <= 24)
        greet = 'Good Evening,';

    document.getElementById('Greetings').innerHTML =
        '' + greet + '';
