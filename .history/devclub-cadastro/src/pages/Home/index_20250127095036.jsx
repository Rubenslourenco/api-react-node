import "./style.css";
import Trash from "../../assets/trash.svg";
import e from "express";

function Home() {
  const users = [
    {
      id: "32545sdfafas",
      name: "João",
      age: 33,
      email: "joao@gmail.com",
    },
    {
      id: "32545sdfafas",
      name: "João",
      age: 33,
      email: "joao@gmail.com",
    },
  ];

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
          <img src={Trash} alt="" />
        </button>
      </div>
    </div>
  );
}

export default Home;
