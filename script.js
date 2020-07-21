window.addEventListener('load', function(){
    const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','Ñ','O','P','P','Q','R','S','T','U','V','W','X','Y','Z'];

    const inputTag = document.querySelector('#text_input');

    inputTag.addEventListener('input', function(){
        const inputValue = inputTag.value.toString();
        if(inputValue!=""){
            //console.log(numberEncoding(inputValue));
            const outputTag = document.querySelector('#text_output');
            outputTag.innerHTML = numberEncoding(inputValue);
        }
    });

    const numberEncoding = (inputValue) => {
        const chars = inputValue.toUpperCase().split("");
        //console.log(chars);

        for (let i = 0; i < chars.length; i++) {
            const charElement = chars[i];
            //console.log(charElement);
            for (let j = 0; j < alphabet.length; j++) {
                const alphElement = alphabet[j];
                if(charElement==alphElement){
                    chars[i]=(j+1).toString();
                }
            }
        }

        let str = chars.join("");

        return str;
      };
});