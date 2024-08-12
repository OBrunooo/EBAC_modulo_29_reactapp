import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Title'

import { BotaoTema, Descricao, SidebarContainer } from './styles'

const Sidebar = () => (
  <>
    <aside>
      <SidebarContainer>
        <Avatar></Avatar>
        <Titulo fontSize={20}>Bruno Gomes</Titulo>
        <Paragrafo tipo="secundario" fontSize={16}>
          OBrunooo
        </Paragrafo>
        <Descricao tipo="principal" fontSize={12}>
          Engenheiro Front-end
        </Descricao>
        <BotaoTema>Troca tema</BotaoTema>
      </SidebarContainer>
    </aside>
  </>
)

export default Sidebar
