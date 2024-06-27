interface Token {
  webtoken?: string;
}

function Dashboard(props: Token) {
  const { webtoken } = props;
  console.log(webtoken);
  return (
    <>
      <h1>Dashboard</h1>
      <p>{webtoken}</p>
    </>
  );
}

export default Dashboard;
