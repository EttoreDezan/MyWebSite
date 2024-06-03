import {Component} from '@angular/core';
import {ModalComponent} from "../../components/modal/modal.component";
import {FooterComponent} from "../../components/footer/footer.component";
import {CarouselComponent} from "../../components/carousel/carousel.component";
import {ToastMessageComponent} from "../../components/toast-message/toast-message.component";
import {IProject} from "../../interfaces/iproject";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [
    ModalComponent,
    FooterComponent,
    CarouselComponent,
    ToastMessageComponent
  ],
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor() {}
  public projects = [
    {
      id: 0,
      title: "MT-Saúde",
      description: `Sistema para Adesão e Emissão da Carteira de Saúde Digital para Servidores Públicos\n` +
        "do Estado. Atuei desenvolvendo o Front End da aplicação (ReactJS) baseando-se em\n" +
        `protótipos fornecidos pela Equipe e feedback do Cliente.`,
      jobPosition: 'Desenvolvedor FullStack ReactJS',
      company: 'Governo do Estado do Mato Grosso',
      imageUrl: 'assets/images/projects-images/new/project-2-mt-saude-image.png'
    },
    {
      id: 1,
      title: "Portal de Fornecedores",
      description: `Sistema para Cadastro e Cotação (Formato Licitação) para Fornecedores interessados\n` +
        'em vender produtos para a Telebrás. O Sistema já em desenvolvimento, atuei\n' +
        `desenvolvendo novas páginas e adequando outras já existentes utilizando VueJS.`,
      jobPosition: 'Desenvolvedor Front End VueJS',
      company: 'Telebrás',
      imageUrl: 'assets/images/projects-images/new/project-2-mt-saude-image.png'
    },
    {
      id: 2,
      title: "Meu Portal - Site Pessoal",
      description: `Esse projeto é esse Web Site para mostrar meus projetos.<br>
                    O Front End foi construído em Angular 18 utilizando padrão MVVM.<br>
                    O Back End para disparo e armazenamento dos e-emails será desenvolvido em Java (Spring Boot) e MySql.<br>
                    Para Hospedagem, foi utilizado os Serviços Amazon AWS.<br>
                    Para facilitar o desenvolvimento, fiz o design utilizando o Figma. <br>
                    `,
      jobPosition: 'Desenvolvedor FullStack Angular',
      company: 'Pessoal',
      imageUrl: 'assets/images/projects-images/new/project-4-my-web-site-image.png',
      gitHubLink: 'https://github.com/EttoreDezan/MyWebSite',
      projectSiteLink: 'https://portolio-ettore-dezan.com.br',
      designLink: 'https://www.figma.com/design/w85xDESRgjF6zA0AC09VeN/MyPortfolio?node-id=0-1&t=9KLrbQTTUiUH6IeZ-0',
    }

  ]

  toastOpen:boolean = false;

  openToast():void {
    this.toastOpen = true;

    setTimeout(()=>{
      this.toastOpen = false;
    }, 3000)
  }

  onToastClose(event: boolean): void {
    this.toastOpen = event;
  }
}
