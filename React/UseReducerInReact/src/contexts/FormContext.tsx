import { createContext } from "react";
import type { FormAction, FormModel } from "../models/FormModel";

export const FormContext = createContext<FormModel|null>(null);

export const FormContextReducer = createContext<((action:FormAction) => void) | null>(null);