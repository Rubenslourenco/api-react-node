import "./style.css";
import Trash from "../../assets/trash.svg";

function Home() {
  const users = [
    {
      id: "32545sdfafas",
      name: "João",
      age: 33,
      email: "joao@gmail.com",
    },
    {
      id: "345455dadaafas",
      name: "Maria",
      age: 23,
      email: "maria@gmail.com",
    },
  ];

  return (
    <div className="container">
      <form>
        <h1>Cadastro de Usuarios</h1>
        <input placeholder="Nome" name="nome" type="text" />
        <input placeholder="Idade" name="idade" type="number" />
        <input placeholder="Email" name="email" type="email" />
        <button type="button">Cadastro</button>
      </form>
      {users.map((user) => (
        <div key={user.id} className="card">
          <div>
            <p>
              Nome: <span>{user.name} </span>
            </p>
            <p>
              Idade: <span>{user.age}</span>
            </p>
            <p>
              Email: <span>{user.email}</span>
            </p>
          </div>

          <button>
            <img src={Trash} alt="" />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;
