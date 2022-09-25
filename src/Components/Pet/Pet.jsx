import React from "react";


export default function Pet(props){
    return(
        <>
        <h2>Nome:{props.pet.nome}</h2>
        <p>Idade:{props.pet.idade}</p>
        <p>Raça:{props.pet.raca}</p>
        <p>Tamanho:{props.pet.tamanho}</p>
        <p>Dono:{props.pet.dono}</p>
        <p>Telefone:{props.pet.telefone}</p>
        <div>
            <img src={props.pet.foto} alt="" />
        </div>
        <p>Observações:{props.pet.observacoes}</p>

        </>
    )
}