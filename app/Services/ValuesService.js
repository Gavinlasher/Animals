import { ProxyState } from "../AppState.js";
import { ValuesController } from "../Controllers/ValuesController.js";
import { Alligator } from "../Models/Alligator.js";
import { Kelp } from "../Models/Kelp.js";
import { Value } from "../Models/Value.js";

class ValuesService {
  addValue() {
    ProxyState.values = [
      ...ProxyState.values,
      new Value({ title: Math.random() }),
    ];
  }
  removeValue(id) {
    const values = ProxyState.values.filter((v) => v.id !== id);
    ProxyState.values = values;
  }
  SayHello() {
    ValuesController.finw;
  }
}

export const valuesService = new ValuesService();
