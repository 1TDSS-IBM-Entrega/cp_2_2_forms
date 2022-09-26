import { useState } from "react";
import { PetFicha } from "../PetFicha/PetFicha";
import { PetForm } from "../PetForm/PetForm";

export const PetCadastro = () =>{

    const [ficha, setFicha] = useState([])

    const addFicha = (petName, petAge,petSize, petBreed, tutorName, tutorPhone, petImage, observations) => {
        setFicha((prevFicha) => {
          return [...prevFicha, {name: petName, age: petAge, size: petSize, breed: petBreed, tutorName: tutorName, tutorPhone: tutorPhone, petImage: petImage, observations: observations}];
        });
      };

    return (
        <>
            <hr />
            <PetForm addFicha={addFicha} />
            <hr />
            {ficha.map((note, index) => (
                <PetFicha 
                    key={index}
                    name = {note.name}
                    age = {note.age}
                    size = {note.size}
                    breed = {note.breed}
                    tutorName = {note.tutorName}
                    tutorPhone = {note.tutorPhone}
                    petImage = {note.petImage}
                    observations = {note.observations}               
                />
            ))}
        </>
      );
}