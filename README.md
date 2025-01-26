# React 19 useEffect Cleanup Performance Issue

This repository demonstrates a potential performance issue related to the cleanup function in React's `useEffect` hook, particularly when dealing with frequent state updates.  The issue arises when the cleanup function performs non-trivial operations, which are repeatedly executed with every render. This example showcases a scenario where the cleanup function logs a message, but in real applications, this could involve more computationally expensive tasks.

## Problem

The provided `bug.js` shows a simple counter component. The `useEffect` hook logs the current count and includes a cleanup function that also logs a message.  When the button is clicked rapidly, these log statements will significantly impact performance, potentially leading to noticeable lags or freezes.

## Solution

The `bugSolution.js` offers a solution by using a conditional statement to execute the cleanup function only when necessary. This mitigates the performance degradation caused by unnecessary cleanup execution.