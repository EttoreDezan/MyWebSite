import {Component} from '@angular/core';
import {ModalComponent} from "../../components/modal/modal.component";
import {FooterComponent} from "../../components/footer/footer.component";
import {CarouselComponent} from "../../components/carousel/carousel.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [
    ModalComponent,
    FooterComponent,
    CarouselComponent
  ],
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor() {}
  public projects = [
    {
      id: 0,
      title: "MT-Saúde",
      description: "Sistema para Adesão e Emissão da Carteira de Saúde Digital para Servidores Públicos\n" +
        "do Estado. Atuei desenvolvendo o Front End da aplicação (ReactJS) baseando-se em\n" +
        "protótipos fornecidos pela Equipe e feedback do Cliente.",
      jobPosition: 'Developer',
      company: 'Governo do Estado do Mato Grosso',
      imageUrl: 'assets/images/projects-images/new/project-2-mt-saude-image.png'
    },
    {
      id: 1,
      title: "Portal de Fornecedores",
      description: 'Sistema para Cadastro e Cotação (Formato Licitação) para Fornecedores interessados\n' +
        'em vender produtos para a Telebrás. O Sistema já em desenvolvimento, atuei\n' +
        'desenvolvendo novas páginas e adequando outras já existentes utilizando VueJS.',
      jobPosition: 'Developer',
      company: 'Telebrás',
      imageUrl: 'assets/images/projects-images/new/project-2-mt-saude-image.png'
    }
  ]
}
