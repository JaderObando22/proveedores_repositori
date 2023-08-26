import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Users } from '../../users/entities/users.entity';
import { Category } from './category.entity';

@Entity()
export class Product {
    @PrimaryGeneratedColumn({type: 'int4' }) //este decorador hace referencia al primari key
    id?: number;

    @Column({ type: 'varchar', length: 100, nullable: false })
    name: string;

    @Column({ type: 'varchar', length: 300, nullable: false })
    description: string;

    @Column({ type: 'int4', nullable: false})
    price: number;

    @Column({ type: 'int4', nullable: false})
    stock: number;  

    @Column({ type: 'int4', nullable: false})
    Users_id: number;

    @Column({ type: 'varchar', nullable: true })
    filename: string;

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP '})
    created_at: Date

    @Column({ type: 'varchar', nullable: true })
    categoria_id: string;

    //relaciones

    @ManyToOne(() => Category)
    @JoinColumn({
    name: 'user_id', //el campo que relaciona a mi tabla
    referencedColumnName: 'id' //este es el ide del usuario
   })
    autor: Category;



    
   
}




    

