import React from "react"


export default function PetCadastro(props){
    return (
        <div>
            <h1>Pet Cadastro</h1>

            <form method="post">
                <div>
                    <label>Nome do Pet</label>
                    <input type="text" name="nome" onChange={props.digit} />
                </div>

                <div>
                    <label>Idade</label>
                    <input type="text" name="idade" onChange={props.digit} />
                </div>

                <div>
                    <label>Raça</label>
                    <input type="text" name="raca" onChange={props.digit} />
                </div>

                <div>
                    <label>Tamanho</label>
                    <input type="text" name="tamanho" onChange={props.digit} />
                </div>

                <div>
                    <label>Dono</label>
                    <input type="text" name="dono" onChange={props.digit} />
                </div>

                <div>
                    <label>Telefone</label>
                    <input type="text" name="telefone" onChange={props.digit} />
                </div>

                <div>
                    <label>Foto do Pet</label>
                    <input type="file" name="foto" onChange={props.digit} />
                </div>

                <div>
                    <label>Observações</label>
                    <input type="text" name="observacoes" onChange={props.digit} />
                </div>

                <div>
                    <button type="subimt">Adicionar</button>
                </div>
            </form>
        </div>

    )
}