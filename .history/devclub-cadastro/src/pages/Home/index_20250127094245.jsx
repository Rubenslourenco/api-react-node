import "./style.css";
import Trash from "../../assets/trash.svg";

function Home() {
  return (
    <div className="container">
      <form>
        <h1>Cadastro de Usuarios</h1>
        <input name="nome" type="text" />
        <input name="idade" type="number" />
        <input name="email" type="email" />
        <button type="button">Cadastro</button>
      </form>

      <div>
        <div>
          <p>Nome: </p>
          <p>Idade: </p>
          <p>Email: </p>
        </div>

        <button>
          <img src="" alt="" />
        </button>
      </div>
    </div>
  );
}

export default Home;
