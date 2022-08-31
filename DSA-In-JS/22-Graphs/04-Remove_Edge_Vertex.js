"use strict";

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(v1, v2) {
    this.adjacencyList[v1].splice(this.adjacencyList[v1].indexOf(v2), 1);
    this.adjacencyList[v2].splice(this.adjacencyList[v2].indexOf(v1), 1);
    return this;
  }

  //   Loop throught vertex and pop()
  // Go in poped element and remove original vertex
  removeVertex() {}
}

const g = new Graph();
g.addVertex("India");
g.addVertex("France");
g.addVertex("USA");
g.addVertex("Japan");
g.addEdge("India", "France");
g.addEdge("USA", "France");
g.addEdge("Japan", "France");
g.addEdge("India", "USA");
