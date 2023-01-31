import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent {
  nome = "João";
  dataNascimento = "1989/05/04";
  urlImagem = "/assets/caipira.jpeg";

  mostrarDataNascimeto() {
    alert(`A data de nascimento é: ${this.dataNascimento}`)
  }
}
