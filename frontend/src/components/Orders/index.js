import { Container } from './styles'
import { Card } from './styles'

export default function Orders(){
  return(
    <Container>
      <Card>
        <header>
          <h3>Pedido <strong>#231321</strong></h3>
          <small>MESA #001</small>
        </header>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Ratione porro laborum, nostrum doloremque rem dolorem nihil?
        </p>
        
        <select>
          <option value="PENDING">Pendente</option>
          <option value="PREPARING">Preparando</option>
          <option value="DONE">Finalizando</option>
        </select>
      </Card>

      <Card status="PREPARING">
        <header>
          <h3>Pedido <strong>#231321</strong></h3>
          <small>MESA #001</small>
        </header>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Ratione porro laborum, nostrum doloremque rem dolorem nihil?
        </p>
        
        <select>
          <option value="PENDING">Pendente</option>
          <option value="PREPARING">Preparando</option>
          <option value="DONE">Finalizando</option>
        </select>
      </Card>

      <Card status="DONE">
        <header>
          <h3>Pedido <strong>#231321</strong></h3>
          <small>MESA #001</small>
        </header>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Ratione porro laborum, nostrum doloremque rem dolorem nihil?
        </p>
        
        <select>
          <option value="PENDING">Pendente</option>
          <option value="PREPARING">Preparando</option>
          <option value="DONE">Finalizando</option>
        </select>
      </Card>

      
    </Container>
  );
}