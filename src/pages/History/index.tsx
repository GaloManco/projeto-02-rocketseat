import { HistoryComponent, HistoryList, Status } from './styles'

export function History() {
  return (
    <HistoryComponent>
      <h1>Meu histórico</h1>
      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Estudar</td>
              <td>20 minutos</td>
              <td>Há cerca de 2 meses</td>
              <td>
                <Status>Concluído</Status>
              </td>
            </tr>
            <tr>
              <td>Estudar</td>
              <td>20 minutos</td>
              <td>Há cerca de 2 meses</td>
              <td>
                <Status>Concluído</Status>
              </td>
            </tr>
            <tr>
              <td>Estudar</td>
              <td>20 minutos</td>
              <td>Há cerca de 2 meses</td>
              <td>
                <Status>Concluído</Status>
              </td>
            </tr>
            <tr>
              <td>Estudar</td>
              <td>20 minutos</td>
              <td>Há cerca de 2 meses</td>
              <td>
                <Status>Concluído</Status>
              </td>
            </tr>
            <tr>
              <td>Estudar</td>
              <td>20 minutos</td>
              <td>Há cerca de 2 meses</td>
              <td>
                <Status>Concluído</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryComponent>
  )
}
