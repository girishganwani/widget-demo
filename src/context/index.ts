import { createContext } from "react";
import { IContext } from "../types/interfaces";

const Context = createContext<IContext | null>(null);

export default Context;