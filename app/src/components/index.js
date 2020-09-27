import Introduction from "./introduction";
import SkateBoard from "./skate-board";

const coms = {
  Introduction,
  SkateBoard,
};

export default function install(Vue) {
  Object.keys(coms).forEach((name) => {
    Vue.component(name, coms[name]);
  });
}
