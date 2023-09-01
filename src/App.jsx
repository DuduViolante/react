//Importando dependências e ou arquivos que vamos utilizar e ou referenciar.
import Cabecalho from "./components/Cabecalho"


export default function App(){

  return (
    <>
      <div className="container">
        {/* Isso é um comentário */}
        
        {/* Vamos criar uma cabeçalho com um header, um h1 com um título e uma lista ul com 3 item com link. */}

      <Cabecalho/>

        {/* Vamos criar uma seção com uma div, com 3 <p></p> e estes <p></p> vão ter 3 linhas de lorem, abaixo dos <p></p> uma img. */}
        <section>
          <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea consectetur quae odit harum debitis blanditiis ipsa quo. Ut quibusdam repellat similique velit libero consequatur, atque aliquid perspiciatis blanditiis, esse at!</p>
            <p>Magnam ratione quo cupiditate nisi voluptatem accusantium consequuntur sint libero porro, ut, atque quas quaerat distinctio sunt ipsa minima, odio quisquam nam unde rerum dolores amet earum! Quo, amet blanditiis.</p>
            <p>Ipsa esse beatae quia facilis recusandae. Ullam soluta nemo, hic optio dolorum corporis iste laborum perspiciatis libero itaque animi explicabo quia. Vel dolorem sint corporis, voluptate debitis recusandae quae voluptatem?</p>
            <img src="" alt="" />
          </div>
        </section>

        {/* Vamos criar um rodapé com uma div, uma lista com 3 itens com links para redes sociais e abaixo um <p></p> com o texto e código do símbolo de direitos reservados. */}
        <footer>
          <div>
            <ul>
              <li><a href="#">GitHub</a></li>
              <li><a href="#">X</a></li>
              <li><a href="#">Reddit</a></li>
            </ul>
            <p>&copy; Todos os direitos reservados - 2023</p>
          </div>
        </footer>
      </div>
    </>
  )
}