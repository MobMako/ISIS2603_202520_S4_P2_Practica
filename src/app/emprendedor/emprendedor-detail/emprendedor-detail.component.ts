import { Component, Input } from '@angular/core';
import { EmprendedorService } from '../emprendedor.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-emprendedor-detail',
  standalone: false,
  templateUrl: './emprendedor-detail.component.html',
  styleUrl: './emprendedor-detail.component.css'
})
export class EmprendedorDetailComponent {
  
  protected emprendedor: any;

constructor(private route: ActivatedRoute, private emprendedorService: EmprendedorService) {}

  ngOnInit() {
  this.route.paramMap.subscribe(params => {
    const id = params.get('id');
    if (id) {
      this.emprendedorService.getEmprendedorById(parseInt(id)).subscribe(data => {
        this.emprendedor = data;
      });
    }
  });
}

}

