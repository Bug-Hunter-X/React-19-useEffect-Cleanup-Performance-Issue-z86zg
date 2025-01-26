```javascript
function MyComponent() {
  const [count, setCount] = useState(0);
  const [shouldCleanup, setShouldCleanup] = useState(false);

  useEffect(() => {
    console.log('Count:', count);
    return () => {
      if (shouldCleanup) {
        console.log('Cleanup');
      }
    };
  }, [count, shouldCleanup]);

  const handleClick = () => {
    setShouldCleanup(true);
    setCount(count + 1);
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
```