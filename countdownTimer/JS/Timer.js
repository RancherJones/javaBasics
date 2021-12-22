export default class Timer {
  constructor(root){
    root.innerHTML = Timer.getHTML(); 

    this.el = {
      minutes: root.querySelector(".timer__part--minutes"),
      seconds: root.querySelector(".timer__part--seconds"),
      control: root.querySelector(".timer__part--control"),
      reset: root.querySelector(".timer__btn--reset")


    };

    this.interval = 40;
    this.remainingSeconds = 90;

    this.updateInterfaceControls();

    this.el.control.addEventListener("click", () =>{
      // ToDO: add in the code
    });

    this.el.reset.addEventListener("click", () =>{
      // ToDO: add in the code
    });
  }

  updateInterfaceTime() {
    const minutes = Math.floor(this.remainingSeconds / 60);
    const seconds = this.remainingSeconds % 60;

    this.el.minutes.textContent = minutes.toString().padStart(2, "0");
    this.el.seconds.textContent = seconds.toString().padStart(2, "0");
  }

  updateInterfaceControls(){
    if (this.interval === null){
      this.el.control.innerHTNL = `<span>"start"</span>`;
      this.el.control.classList.add("timer__btn--start");
      this.el.control.classList.remove("timer__btn--stop");
     }else{
      this.el.control.innerHTNL = `<span>"stop"</span>`;
      this.el.control.classList.add("timer__btn--stop");
      this.el.control.classList.remove("timer__btn--start");
     }
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
