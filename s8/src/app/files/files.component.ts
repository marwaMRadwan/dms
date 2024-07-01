import { Component } from '@angular/core';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrl: './files.component.css'
})
export class FilesComponent {
  onFileChanged(event:any) {
    const file = event.target.files[0]
    console.log(file)
  }
}
