(function() {
    document.getElementById("js-submit").addEventListener("click", function(){
        const inputNumber = document.getElementById("guess").value;

        const secretNumber = randomNumber(1, 22);

        function randomNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }

        console.log(secretNumber);

        if (inputNumber == secretNumber) {
            alert ("Awesome! Your number " + inputNumber + " was correct. You can be named many things, hungry is not being one of them.");
        }

        else if (inputNumber == secretNumber + 1 || inputNumber == secretNumber - 1) {
            alert ("So close, but you just missed it! Are you in a class that started on the thirteenth or what? You guessed " + inputNumber + " and the secret number was " + secretNumber + ".");
        }

        else {
            alert ("Bummer... You guessed " + inputNumber + " and the secret number was " + secretNumber + ".");
        }

    }
    )
})();
