function Hello(props) {
  //   const name = props.name;

  const { name, age } = props;

  return (
    <div>
      <h1>Hello</h1>
      <h2>World</h2>
    </div>
  );
}

export default Hello;
