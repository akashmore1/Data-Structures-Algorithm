"use strict";

class Graph {
  constructor() {
    this.adjacencyList = {};
  }
}

const g = new Graph();
g.adjacencyList["India"] = [];
g.adjacencyList.India.push("USA");
