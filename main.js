
class TypeWriter {
    
    constructor(textElement, words, wait=3000){
        this.textElement = textElement;
        this.cursorElement = document.querySelector('.cursor');
        this.words = words;
        this.wait = parseInt(wait, 10);

        this.typingDelay = 200;
        this.erasingDelay = 100;
        this.wordsIndex = 0;
        this.charIndex = 0;

        this.type();
    }

    type() {
        if(this.charIndex < this.words[this.wordsIndex].length) {
            if(!this.cursorElement.classList.contains('typing')) this.cursorElement.classList.add('typing');
            this.textElement.textContent += this.words[this.wordsIndex].charAt(this.charIndex);
            this.charIndex++;
            setTimeout(()=>this.type(), this.typingDelay);
        } else {
            this.cursorElement.classList.remove('typing');
            setTimeout(()=>this.erase(), this.wait);
        }
    }

    erase() {
        if(this.charIndex > 0) {
            if(!this.cursorElement.classList.contains('typing')) this.cursorElement.classList.add('typing');
            this.textElement.textContent = this.words[this.wordsIndex].substring(0, this.charIndex-1);
            this.charIndex--;
            setTimeout(()=>this.erase(),this.erasingDelay)

        } else {
            this.cursorElement.classList.remove('typing');
            this.wordsIndex++;
            if(this.wordsIndex >= this.words.length) this.wordsIndex=0;
            setTimeout(()=>this.type(), this.typingDelay + 1100);
        }
    }
}



const init = () => {
    const textElement = document.querySelector('.text');
    const words = ['Peter', 'lollo', 'EMELIE', 'Åsa'];

    new TypeWriter(textElement, words)
}

document.addEventListener("DOMContentLoaded", init)
