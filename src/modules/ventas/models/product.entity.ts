@Entity('products', {schema:'ventas'} )
export class ProductEntity{
    @PrimaryKeyColumn(sv)
    id:string;
  }