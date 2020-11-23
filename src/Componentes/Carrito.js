import { Button, Table } from 'react-bootstrap';

const carrito = (props) =>{
    
    return(
        <div className="carrito">
          <h1>Mi carrito</h1>
            <Table>
              <thead>
                <tr>
                  <th>Codigo</th>
                  <th>Descripcion</th>
                  <th>Precio</th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                {
                  props.carrito.map((a, index) =>
                    <tr key={index}>
                      <td>{a.codigo}</td>
                      <td>{a.descripcion}</td>
                     <td>${(a.precio).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                      <td><Button onClick={()=>props.eliminar(a.precio, index)} variant="danger">Eliminar</Button></td>
                    </tr>
                  )
                }
              </tbody>
            </Table>
          </div>
    );
}

export default carrito;