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

    const deleteFicha = (id) => {
        setFicha((prevFicha) => {
          return prevFicha.filter((ficha, index) => {
            return index !== id;
          });
        });
      };

        return (
        <>
            <hr />
            <PetForm addFicha={addFicha} />
            {ficha.map((note, index) => (
                <PetFicha 
                    key={index}
                    id={index}
                    name = {note.name}
                    age = {note.age}
                    size = {note.size}
                    breed = {note.breed}
                    tutorName = {note.tutorName}
                    tutorPhone = {note.tutorPhone}
                    petImage = {note.petImage}
                    observations = {note.observations}  
                    onDelete={deleteFicha}             
                />
            ))}
        </>
      );
}