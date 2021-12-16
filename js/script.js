

const timer = document.getElementById('display');

let sec = 11;
let stoptime = true;
let word = "Happy Independence Day"

let startTimer = () => {
  if (stoptime == true) {
        stoptime = false;
        timerCycle();
    }
}


let timerCycle = () => {
  if (stoptime == false) {

    printTime();

    setTimeout(() => {
      if (stoptime == false) {

        printTime();

        setTimeout(() => {
          if (stoptime == false) {

            printTime();

            setTimeout(() => {
              if (stoptime == false) {

                printTime();

                setTimeout(() => {
                  if (stoptime == false) {

                    printTime();

                    setTimeout(() => {
                      if (stoptime == false) {

                        printTime();

                        setTimeout(() => {
                          if (stoptime == false) {

                            printTime();

                            setTimeout(() => {
                              if (stoptime == false) {

                                printTime();

                                setTimeout(() => {
                                  if (stoptime == false) {

                                    printTime();

                                    setTimeout(() => {
                                      if (stoptime == false) {

                                        printTime();

                                        setTimeout(() => {
                                          if (stoptime == false) {

                                            printTime();
                                          }
                                        }, 1000);
                                      }
                                    }, 1000);
                                  }
                                }, 1000);
                              }
                            }, 1000);
                          }
                        }, 1000);
                      }
                    }, 1000);
                  }
                }, 1000);
              }
            }, 1000);
          }
        }, 1000);
      }
    }, 1000);
  }
}


let printTime = () => {
  sec = parseInt(sec);

    sec = sec - 1;

    if (sec < 10) {
      sec = '0' + sec;
      timer.innerHTML = sec;
    }
    if(sec == 10){
        timer.innerHTML = "10"
    }
    if(sec == 0){
        stoptime = true;
        timer.innerHTML = word;
        sec = 11;
    }
}

startTimer();
