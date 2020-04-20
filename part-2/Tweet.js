function Tweet({username, name, date, message, favColor}) {

  const styles = {
    color: favColor
  }

  return (
    <div className="container alert alert-primary" style={styles}>
      <h3>
        {username}, {name} at {date}
      </h3>
      <p>
        {message}
      </p>
    </div>
  );
}

Tweet.defaultProps = {
  favColor: "gray"
}