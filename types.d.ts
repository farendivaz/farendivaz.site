import { ReactNode } from "react";
import { JsxElement } from "typescript";

type BlogPost = {
  id: string;
  title: string;
  date: string;
};

type Project = {
  id: number;
  name: string;
  description: string;
  link: string;
  techStack: {
    name: string;
    description: string;
    link: string;
    icon: JSX.Element;
  }[];
};
