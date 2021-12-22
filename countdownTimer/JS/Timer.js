export default class Timer {
  constructor(root){
    root.innerHTML = Timer.getHTML(); 

    this.el = {
      minutes: root.querySelector(".timer__part--minutes"),
      seconds: root.querySelector(".timer__part--seconds"),
      control: root.querySelector(".timer__part--control"),
      reset: root.querySelector(".timer__btn--reset")


    };

    this.interval = null;
    this.remainingSeconds = 90;

    this.updateInterfaceTime();

    this.el.control.addEventListener("click", () =>{
      // ToDO: add in the code
    });

    this.el.reset.addEventListener("click", () =>{
      // ToDO: add in the code
    });
  }

  updateInterfaceTime() {
    const minutes = Math.floor(this.remainigSeconds / 60);
    const seconds = this.remainingSeconds % 60;

    console.log(minutes, seconds);

  }

  static getHTML() {
    return `
    <span class="timer__part timer__part--minutes">00</span>
    <span class="timer__part">:</span>
    <span class="timer__part timer__part--seconds">00</span>

    <button type="button" class="timer__btn timer__btn--control timer__btn--start">start</button>
    <button type="button" class="timer__btn timer__btn--reset">reset</button>
  
    `;
  }
}
