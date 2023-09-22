import { GlobalStyle } from "./styles/global";
import { ContainerAboutMe, ContainerAllThings, ContainerBanner, ContainerHeader, ContainerTest } from "./styles/styles";

export function App() {

  return (
    <ContainerAllThings>
      <ContainerHeader>
          <div>
            <h1>Juliana Pereira</h1>

            <p> Influencer Digital </p>
          </div>  
      </ContainerHeader>

      <ContainerAboutMe>

      </ContainerAboutMe>

      <ContainerBanner>

      </ContainerBanner>

      <ContainerTest>
        
      </ContainerTest>

      <GlobalStyle />
    </ContainerAllThings>
  )
}
