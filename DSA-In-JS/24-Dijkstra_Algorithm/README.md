# Dijkstra's Algorithm

## OBJECTIVES

1. Understand the importance of Dijkstra's
2. Implement a Weighted Graph
3. Walk through the steps of Dijkstra's
4. Implement Dijkstra's using a naive priority queue
5. Implement Dijkstra's using a binary heap priority queue

## WHY IS IT USEFUL?

1. GPS - finding fastest route
2. Network Routing - finds open shortest path for data
3. Biology - used to model the spread of viruses among humans
4. Airline tickets - finding cheapest route to your destination
5. Many other uses!

## The Approach

1. Every time we look to visit a new node, we pick the node with the smallest known distance to visit first.
2. Once we’ve moved to the node we’re going to visit, we look at each of its neighbors
3. For each neighboring node, we calculate the distance by summing the total edges that lead to the node we’re checking from the starting node.
4. If the new total distance to a node is less than the previous total, we store the new shorter distance for that node.
