import { map } from "lodash";

type State = "start" | "done" | "inprocess";

function process(state: State): State {
  switch (state) {
    case "start":
      return "inprocess";
      break;
    case "done":
      return "done";
      break;
    case "inprocess":
      return "done";
    default:
      return never;
  }
}

let processState: State = "start";
console.log(process(processState));
console.log(process(processState));
console.log(process(processState));
