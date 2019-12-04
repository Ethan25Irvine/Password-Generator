        //list of characters (Captial Letters Lowercase Letters numbers special characters)
        //var is function level let and const are block level {} so all three will work in this context
        //const means the value cannot be changed once defined
        const capLetters = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
        const lowLetters = ['abcdefghijklmnopqrstuvwxyz'];
        const num = ['1234567890'];
        const sym = ['!@#$%^&*()_-='];
        let charset = '';


        
        // the following is going to allow the user to "cutomize" their password
        function randomPassword(){
            const length = prompt('How many characters do you want your password to be? (8-128)');
            if ((length > 7) && (length <129)) {
                alert ('You chose ' + length);
                
                
            }
            else if ((length < 8) || (length > 128)) {
                alert ('You must chose a number between 8 & 128');
                return;
            };

            // Allows user to choose if they want Capital Letters or Lower Case Letters, or both or neither
            const captial = confirm ('Do you want Capital Letters in your password? Press okay for yes and cancel for no.');
            if (captial === true) {
                alert ('Capital Letters have been added to your password!');
                let yesCap = capLetters;
                console.log (yesCap);
                charset += yesCap;
            } 
            const lowerCase = confirm ('Do you want Lower Case Letters in your password? Press okay for yes and cancel for no.');
            if (lowerCase === true) {
                alert ('Lower Case Letters have been added to your password!');
                let yesLow = lowLetters;
                console.log (yesLow);
                charset += yesLow;
            } 

            // This is where they get to decide if they want numbers or symbols or neither
            const symbols = confirm ('Do you want Special Characters in your password? Press okay for yes and cancel for no.');
            if (symbols === true) {
                alert ('Lower Case Letters have been added to your password!');
                let yesSym = sym;
                console.log (sym);
                charset += yesSym;
                
            } 
            const numbers = confirm ('Do you want Numbers in your password? Press okay for yes and cancel for no.');
            if (numbers === true) {
                alert ('Lower Case Letters have been added to your password!');
                let yesNum = num;
                charset += yesNum;
                console.log (yesNum);
                console.log (charset);
            } 
            if ((captial === false) && (lowerCase === false) && (symbols === false) && (numbers === false)){
                alert ('You must choose at least once option in order for us to make you a secure password!');
                return;
            }
            // This is where all the above will be put into motion for our generator
                let finishedPass = ''
            for (let i = 0; i < length; i++){
                const character = Math.floor(Math.random() * charset.length);
                finishedPass += charset.substring(character, character +1);
                console.log(character);
                console.log(finishedPass);
            }
            return finishedPass;
        };

// This is the copy to clipboard button
function clipboard() {
    const copyText = document.getElementById('password');

    copyText.select();
    copyText.setSelectionRange(0,99999); // for phones

    document.execCommand('copy');

    alert('Copied the text: ' + copyText.value);
}
    



































