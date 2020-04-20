function Person({ name, age, hobbies, favColor }) {

  const styles = {
    color: favColor
  }

  return (
    <div className="container alert alert-primary" style={styles}>
      <p>
        Learn some information about this person: {name.length > 8 ? name.slice(0,6) : name}, {age} years old
      </p>
      <h3>
        {age >= 18 ? "Please go vote!" : "you must be 18"}
      </h3>
      <ul>
        {hobbies.map(h => <li>{h}</li>)}
      </ul>
    </div>
  );
}

Person.defaultProps = {
  favColor: "darkred"
}