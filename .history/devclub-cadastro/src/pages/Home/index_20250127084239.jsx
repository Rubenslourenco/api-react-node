import "./style.css";

function Home() {
  return (
    <div className="container">
      <form>
        <h1>Cadastro de Usuarios</h1>
        <input name="nome" type="text" />
        <input name="idade" type="number" />
        <input name="email" type="email" />
      </form>
    </div>
  );
}

export default Home;
