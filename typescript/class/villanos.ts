export class Villanos{
  nombre:string;
  plan:string;

  constructor(nombre:string, plan:string){
    this.nombre = nombre;
    this.plan = plan;
  }

  imprimir(){
    console.log(`${ this.nombre } - ${this.plan}`);
  }
}
