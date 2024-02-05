import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.css'
})
export class FileUploadComponent {
  selectedFile: File | null = null;

  constructor(private http: HttpClient) {}

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
  }


  // uploadFile(): void {
  //   if (this.selectedFile) {
  //     const formData = new FormData();
  //     let result = formData.append('file', this.selectedFile);
  //     console.log(this.selectedFile);
  //     this.http.post('/upload', formData)
  //       .subscribe(response => {
  //         console.log('File uploaded successfully:', response);
  //       }, error => {
  //         console.error('Error uploading file:', error);
  //     });
  //   }
  // }
}
