const search = () => {
  console.log(`API called`);
};

//Debouncing
const debounce = (callback, interval) => {
  let timer;
  return function () {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      callback();
    }, interval);
  };
};

let doDebounce = debounce(search, 500);

//Throttling
const clickME = () => {
  console.log(`Like the video`);
};

const throttle = (callback, interval) => {
  return function () {
    document.getElementById("button").disabled = true;
    setTimeout(() => {
      callback();
    }, interval);
  };
};

let doThrottle = throttle(() => {
  document.getElementById("button").disabled = false;
  clickME();
}, 2000);
