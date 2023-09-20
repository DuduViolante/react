import { useNavigate, useParams } from "react-router-dom";
import { ListaProdutos } from '../../components/ListaProdutos'
import React, { useState } from "react";

export default function AdicionarProdutos() {
  const [produtoNovo, setProdutoNovo] = useState({
    nome: "",
    desc: "",
    valor: "",
  });

  const [idSequencial, setIdSequencial] = useState(ListaProdutos.length + 1);

  const navigate = useNavigate()

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProdutoNovo({
      ...produtoNovo,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const novoProduto = {
      id: idSequencial,
      ...produtoNovo,
    };

    ListaProdutos.push(novoProduto);

    setIdSequencial(idSequencial + 1);

    setProdutoNovo({
      nome: "",
      desc: "",
      valor: "",
    });
    navigate("/produtos");
  };

  return (
    <div>
      <h1>Cadastrar Produtos</h1>

      <div>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Novo Produto</legend>
            <div>
              <label htmlFor="idNome">Nome do Produto:</label>
              <input type="text" name="nome" id="idNome" value={produtoNovo.nome} onChange={handleInputChange} />
            </div>
            <div>
              <label htmlFor="idDesc">Descrição do Produto:</label>
              <input type="text" name="desc" id="idDesc" value={produtoNovo.desc} onChange={handleInputChange} />
            </div>
            <div>
              <label htmlFor="idValor">Valor do Produto:</label>
              <input type="text" name="valor" id="idValor" value={produtoNovo.valor} onChange={handleInputChange} />
            </div>
            <div>
              <button type="submit">SALVAR</button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
