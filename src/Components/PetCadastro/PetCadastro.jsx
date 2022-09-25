import { useState } from "react";
import { PetFicha } from "../PetFicha/PetFicha";
import { PetForm } from "../PetForm/PetForm";

export const PetCadastro = () =>{

    const [ficha, setFicha] = useState([])

    const addFicha = (dataFicha) => {
        setFicha((prevFicha) => {
          return [...prevFicha, dataFicha];
        });
      };

    return (
        <>
            <hr />
            <PetForm addFicha={addFicha} />
            <hr />
            <PetFicha props={ficha} />
        </>
      );
}