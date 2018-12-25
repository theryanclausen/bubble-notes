const randomRange = (min, max, floor = true) => {
  let num = Math.random() * max;
  while (num < min) {
    num += num / 5;
  }
  return floor ? Math.floor(num) : num;
};

module.exports = {
    URL:"https://backend-project-week-lambda.herokuapp.com/api/notes/",
  textBubbles: () => {
    return {
      pos: randomRange(10, 70, false) + "%",
      wiggle: randomRange(2, 180) + "px",
      wiggleDur: randomRange(1500, 8000) + "ms",
      duration: randomRange(8666, 64232) + "ms",
      delayDist: -1 * randomRange(293, 950) + "px",
      z: randomRange(80, 110)
    };
  },
  bubbles: () => {
    return {
      pos: randomRange(0, 99, false) + "%",
      size: randomRange(50, 200) + "px",
      wiggle: randomRange(2, 100) + "px",
      wiggleDur: randomRange(1500, 8000) + "ms",
      duration: randomRange(3500, 33333) + "ms",
      delayDist: -1 * randomRange(200, 750) + "px",
      key: randomRange(1, 999999999, false)
    };
  },
  tinyBubbles: () => {
    return {
      pos: randomRange(0, 99, false) + "%",
      size: randomRange(1, 20) + "px",
      wiggle: randomRange(2, 100) + "px",
      wiggleDur: randomRange(1500, 8000) + "ms",
      duration: randomRange(3500, 33333) + "ms",
      delayDist: -1 * randomRange(100, 750) + "px",
      key: randomRange(1, 999999999, false)
    };
  },
  
};
