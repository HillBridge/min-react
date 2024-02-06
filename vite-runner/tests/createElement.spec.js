import { it, expect, describe } from "vitest";
import React from "../core/React.js";

describe("createElement", () => {
  it("props is null", () => {
    const element = React.createElement("div", null, "hi");

    expect(element).toEqual({
      type: "div",
      props: {
        children: [
          {
            type: "TEXT_ELEMENT",
            props: {
              nodeValue: "hi",
              children: [],
            },
          },
        ],
      },
    });
  });

  it("should return for element", () => {
    const element = React.createElement("div", { id: "bridge" }, "hi");

    expect(element).toEqual({
      type: "div",
      props: {
        id: "bridge",
        children: [
          {
            type: "TEXT_ELEMENT",
            props: {
              nodeValue: "hi",
              children: [],
            },
          },
        ],
      },
    });
  });

  it("props is null with matchInlineSnapshot", () => {
    const element = React.createElement("div", null, "hi");

    expect(element).toMatchInlineSnapshot(`
      {
        "props": {
          "children": [
            {
              "props": {
                "children": [],
                "nodeValue": "hi",
              },
              "type": "TEXT_ELEMENT",
            },
          ],
        },
        "type": "div",
      }
    `);
  });

  it("should return for element with matchInlineSnapshot", () => {
    const element = React.createElement("div", { id: "bridge" }, "hi");

    expect(element).toMatchInlineSnapshot(`
      {
        "props": {
          "children": [
            {
              "props": {
                "children": [],
                "nodeValue": "hi",
              },
              "type": "TEXT_ELEMENT",
            },
          ],
          "id": "bridge",
        },
        "type": "div",
      }
    `);
  });
});
