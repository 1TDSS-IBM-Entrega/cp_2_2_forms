import React, { useState } from "react";
import Pet from "../Pet/Pet";
import  PetCadastro  from "../PetCadastro/PetCadastro";

export default function ListaPet() {


    const [petInit,setPet]=useState([
        {
            nome: "",
            idade: "",
            raca: "",
            tamanho: "",
            dono: "",
            telefone: "",
            foto: "",
            observacoes: ""
    
        }
     
      ])


    const [nPet, setNPet] = useState({

        "nome": "",
        "idade": "",
        "raca": "",
        "tamanho": "",
        "dono": "",
        "telefone": "",
        "foto": "",
        "observacoes": ""
    })

    const addPet = (e) => {
        e.preventDefautl()

        setNPet({
            "nome": "",
            "idade": "",
            "raca": "",
            "tamanho": "",
            "dono": "",
            "telefone": "",
            "foto": "",
            "observacoes": ""
        })

        setPet([...petInit,nPet])
    }

    const captura = (e)=>{
        e.preventDefault()

        //DESESTRUTURAÇÃO
        const {name, value} = e.target

        if(name === "nome"){
            setNPet({
            "nome": value,
            "idade": nPet.idade,
            "raca": nPet.raca,
            "tamanho": nPet.tamanho,
            "dono": nPet.dono,
            "telefone": nPet.telefone,
            "foto": nPet.foto,
            "observacoes": nPet.observacoes
            })  
        }
    }

    return (
        <>
            <PetCadastro
                digit={captura}
            />

            <p>PETS</p>
            {petInit.map((tar, i) => (
                <Pet
                    key={i}
                    pet={tar}
                />
            ))}

        </>
    )
}