import { CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('products', {schema:'ventas'} )
export class ProductEntity{
    @PrimaryGeneratedColumn('sv')
    id:string;

    @CreateDateColumn({
        name:'created_date',
        type:'timestamptz',
        default:() => 'CURRENT_TIMESTAMP',
      })
      createdAt: Date;

    @UpdateDateColumn({
      name:'updated_date',
      type:'timestamptz',
      default:() => 'CURRENT_TIMESTAMP',
    })
    updatedAt: Date;
    
    @DeleteDateColumn({
      name:'deleted_date',
      type:'timestamptz',
      default:() => 'CURRENT_TIMESTAMP',
    })
    deletedAt: Date;
  }