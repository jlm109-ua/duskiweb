import React from "react";

export function Title({ children }: { children: string }) {
  return React.createElement("h1", {
    className: "text-5xl text-white text-center font-bold"
  }, children);
}

export function MemberTitle({ children }: { children: string }) {
  return React.createElement("h2", {
    className: "text-5xl text-white text-left font-bold"
  }, children);
}

export function MemberSubTitle({ children }: { children: string }) {
  return React.createElement("h3", {
    className: "text-2xl text-white text-left font-bold"
  }, children);
}