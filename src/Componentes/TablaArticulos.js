import { Button, Table } from 'react-bootstrap';

const ListProd = (props) =>{

    return(
        
        <div className="tablaArticulos">
            <h1>Productos</h1>
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
                  props.lista.map((a, index) =>
                    <tr key={index}>
                      <td>{a.codigo}</td>
                      <td>{a.descripcion}</td>
                      <td>${(a.precio).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                      <td><Button onClick={()=>props.enviar(a, a.precio)} variant="success">Agregar</Button></td>
                    </tr>
                  )
                }
              </tbody>
            </Table>

            <h1>Total: ${(props.total).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</h1>
          </div>
    );
}

export default ListProd;