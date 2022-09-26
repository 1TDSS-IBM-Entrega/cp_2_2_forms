import { Div, H2, Button, IMG, P,SPAN, SPAN2 } from "./styled"

export const PetFicha = ({id, name, age, size, breed, tutorName, tutorPhone, petImage, observations, onDelete}) => {
    console.log(id)
    return (
        <>       
            <Div>
                <P>Nome do Pet <SPAN>{name}</SPAN></P>
                <P>Idade do Pet <SPAN2>{age}</SPAN2> </P>
                <P>Tamanho do Pet <SPAN2>{size}</SPAN2></P>
                <P>Raça do Pet <SPAN2>{breed}</SPAN2></P>
                <P>Nome do Dono <SPAN2>{tutorName}</SPAN2></P>
                <P>Telefone do Dono <SPAN2>{tutorPhone}</SPAN2></P>
                <IMG src={petImage} alt="imagem do pet" />
                <P>Observações <SPAN2>{observations}</SPAN2> </P>
                {/* button delete */}
                <Button type="button" onClick={() => onDelete(id)}>Delete</Button>
            </Div>
        </>    
    )
}
