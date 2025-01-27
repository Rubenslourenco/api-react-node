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
      name: "MAria",
      age: 23,
      email: "maria@gmail.com",
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
      {users.map((user) => (
        <div key={user.id} className="">
          <div>
            <p>Nome: {user.name} </p>
            <p>Idade: {user}</p>
            <p>Email: {user.email}</p>
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
