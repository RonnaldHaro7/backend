import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('products', {schema:'ventas'} )
export class ProductEntity{
    @PrimaryGeneratedColumn('sv')
    id:string;
    //Crear
    @CreateDateColumn({
        name:'created_date',
        type:'timestamptz',
        default:() => 'CURRENT_TIMESTAMP',
      })
      createdAt: Date;
      //Actualizar
    @UpdateDateColumn({
      name:'updated_date',
      type:'timestamptz',
      default:() => 'CURRENT_TIMESTAMP',
    })
    updatedAt: Date;
    //Borrar
    @DeleteDateColumn({
      name:'deleted_date',
      type:'timestamptz',
      default:() => 'CURRENT_TIMESTAMP',
    })
    deletedAt: Date;
    //Relaciones
    @ManyToOne(() => CategotyEntity, (category) => category.products)
    category: CategoryEntity;
    //Columna de Titulo
    @Column('varchar', {
      name:'title',
      unique:true,
      comment:'Titulo del producto',
    })
    title: string;
    //Columna de Precio
    @Column('number', {
      name:'price',
      comment:'Precio del producto con dos decimales',
    })
    price: number;
    //Columna de Descripción
    @Column('varchar', {
      name:'description',
      nullable:true,
      comment:'Descripción del producto',
    })
    description: string;
  }
