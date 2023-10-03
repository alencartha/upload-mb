import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app-teste';

  constructor() { }

  ngOnInit(): void {

  }

  onFileChange(event: any): void {
    const files: FileList = event.target.files;
    let totalSizeMB = 0; // Variável para verificar o tamanho total em MB

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const fileSizeMB = file.size / (1024 * 1024); // Tamanho do arquivo em MB

      if (fileSizeMB <= 100) { // Verifica se o arquivo é menor ou igual a 100mb, para incluir no pacote de envio
        totalSizeMB += fileSizeMB; // Adiciona o tamanho do arquivo ao total a ser enviado
        console.log('Tamanho do arquivo', file.name, ':', fileSizeMB.toFixed(2), 'MB'); 

        // Verifica se o tamanho total atingiu 100MB
        if (totalSizeMB >= 100) {
          this.handleTotalSizeReached(); // Chama o método quando 100MB é atingido
          totalSizeMB = 0; // Zera o tamanho total
        }
      }
    }
  }

  handleTotalSizeReached(): void {
    console.log('Tamanho total de 100MB atingido. Chamando outro método.');
  }


}
