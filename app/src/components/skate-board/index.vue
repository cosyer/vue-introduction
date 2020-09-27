<template>
  <div class="skate-board">
    <div id="skate">
      <div id="board-shadow"></div>
      <div id="left-wheel"></div>
      <div id="right-wheel"></div>
      <div id="board">
        <div id="board-inner">
          <div
            class="shoe"
            id="left-shoe"
          >
            <div class="neck"></div>
            <div class="tongue"></div>
          </div>
        </div>
      </div>
    </div>
    <div id="right-shoe-shadow"></div>
    <div
      class="shoe"
      id="right-shoe"
    >
      <div class="neck"></div>
      <div class="tongue"></div>
    </div>
  </div>
</template>

<script>
// https://codepen.io/HugoGroutel/pen/ogqJZP
export default {
  name: "SkateBoard",
};
</script>

<style lang="scss" scoped>
.skate-board {
  margin: 0 auto;
  position: relative;
  width: 400px;
  margin-top: 80px;
  height: 160px;
  @media (max-width: 767px) {
    transform: scale(0.6);
    margin-left: -40px;
    margin-top: 40px;
  }
}

#skate {
  position: absolute;
  animation: skate-acceleration 2s ease-in infinite;
}
@keyframes skate-acceleration {
  0% {
    left: 0;
  }
  30% {
    left: 150px;
  }
  100% {
    left: 0px;
  }
}
#board-shadow {
  position: absolute;
  top: 50px;
  width: 250px;
  height: 45px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  transform: skew(-10deg);
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
}
#left-wheel,
#right-wheel {
  position: absolute;
  bottom: -25px;
  background-color: #bbb;
  width: 5px;
  height: 5px;
  border-radius: 15px;
  border: solid 5px #999;
  box-shadow: 0 0 0 6px white;
}
#left-wheel:before,
#right-wheel:before {
  position: absolute;
  bottom: 0;
  left: 2px;
  content: " ";
  height: 40px;
  width: 10px;
  background-color: #ddd;
  transform: rotate(10deg);
  z-index: -1;
}
#left-wheel {
  left: 40px;
}
#right-wheel {
  left: 190px;
}
#board {
  position: relative;
  width: 250px;
  height: 60px;
  background-color: #4f535a;
  border-radius: 20px 20px 40px 40px / 20px 20px 40px 40px;
  border-left: solid 5px #cc9a51;
  border-bottom: solid 5px #cc9a51;
  border-right: solid 5px #cc9a51;
  transform: skew(-10deg);
}
#board-inner {
  padding: 5px 0 0 0;
  margin: 0 30px;
  height: 55px;
  background-color: #434a54;
}
.shoe {
  position: absolute;
  background-color: #4a89dc;
  width: 100px;
  height: 30px;
  border-left: solid 1px black;
  border-bottom: solid 1px black;
  border-right: solid 1px black;
  border-radius: 15px;
  box-shadow: 2px 5px 0px 5px white;
}
.shoe:after {
  position: absolute;
  content: " ";
  bottom: 0px;
  right: 0px;
  background-color: white;
  width: 20px;
  height: 30px;
  border-radius: 5px 15px 15px 5px / 15px;
}
.shoe .neck {
  position: absolute;
  content: " ";
  bottom: 0px;
  left: 0px;
  background-color: #4a89dc;
  width: 45px;
  height: 60px;
  border-radius: 15px 15px 0 15px / 5px 5px 0 15px;
}
.shoe .neck:after {
  content: " ";
  position: absolute;
  width: 45px;
  height: 10px;
  border-radius: 15px/ 5px;
  background-color: rgb(58, 95, 175);
}
.shoe .tongue {
  position: absolute;
  bottom: 10px;
  right: 15px;
  width: 40px;
  height: 25px;
  border-bottom-left-radius: 25px;
  border-bottom: solid 17px #5d9cec;
  border-left: solid 10px #5d9cec;
}
#left-shoe {
  left: 110px;
}
#right-shoe {
  transform: skew(-10deg);
  animation: foot-kick 2s ease infinite;
}
@keyframes foot-kick {
  0% {
    top: 0px;
    left: 300px;
    transform: rotate(-40deg);
  }
  20% {
    top: 100px;
    left: 200px;
    transform: rotate(0deg);
  }
  40% {
    top: 70px;
    left: 50px;
    transform: rotate(45deg);
  }
  100% {
    top: 0px;
    left: 300px;
    transform: rotate(-40deg);
  }
}
#right-shoe-shadow {
  position: absolute;
  top: 105px;
  height: 35px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  transform: skew(-10deg);
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
  animation: shadow-move 2s ease infinite;
}
@keyframes shadow-move {
  0% {
    left: 320px;
    width: 100px;
  }
  20% {
    left: 200px;
    width: 110px;
  }
  40% {
    left: 50px;
    width: 90px;
  }
  100% {
    left: 320px;
    width: 100px;
  }
}
</style>
