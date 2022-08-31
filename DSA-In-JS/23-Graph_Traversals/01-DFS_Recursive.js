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

  depthFirstRecursive(start) {
    const adjacencyList = this.adjacencyList;
    const result = [];
    const visited = {};

    function dfs(vertex) {
      if (!vertex) return null;

      visited[vertex] = true;
      result.push(vertex);
      for (let i = 0; i < adjacencyList[vertex].length; i++) {
        if (!visited[adjacencyList[vertex][i]]) dfs(adjacencyList[vertex][i]);
      }
    }
    dfs(start);

    return result;
  }
}

const g = new Graph();
g.addVertex("India");
g.addVertex("France");
g.addVertex("USA");
g.addVertex("Japan");
g.addVertex("Korea");
g.addEdge("France", "USA");
g.addEdge("India", "France");
g.addEdge("USA", "Korea");
g.addEdge("Japan", "France");
g.addEdge("USA", "Japan");
g.addEdge("India", "USA");
console.log(g);
