import { JSX } from "react";

export enum SelectedPage {
  HOME = "home",
  PROGRAMS = "programs",
  OUR_CLASSES = "ourclasses",
  CONTACT_US = "contactus",
}

export interface ProgramType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ClassType {
  name: string;
  description: string;
  image: string;
}
