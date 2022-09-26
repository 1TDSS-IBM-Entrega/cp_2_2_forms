
export const PetFicha = ({name, age, size, breed, tutorName, tutorPhone, petImage, observations}) => {
    console.log(petImage)
    return (
        <>       
            <div>
                <h2>Nome do Pet {name}</h2>
                <p>Idade do Pet {age}</p>
                <p>Tamanho do Pet {size}</p>
                <p>Raça do Pet {breed}</p>
                <p>Nome do Dono{tutorName}</p>
                <p>Telefone do Dono{tutorPhone}</p>
                <img src={petImage} alt="imagem do pet" width={100} height={100} />
                <p>Observações {observations}</p>
            </div>
        </>    
    )
}
