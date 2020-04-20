function App() {
  return (
    <div>
      <Tweet username="sjbrooks" name="Sarah" date={`Monday, April ${20}`} message="Hello, it's Monday and pairing with Genna is great!" favColor="lightblue"/>
      <Tweet username="gmergola" name="Genna" date={`Monday, April ${20}`} message="Hello, it's Monday and pairing with Sarah is great!" favColor="green"/>
      <Tweet username="test" name="tester" date={`Monday, April ${19}`} message="Woah, this is a test!" />
    </div>
  );
}