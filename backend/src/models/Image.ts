import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from 'typeorm';
import Orphanage from './Orphanage'

@Entity('images') //o typeorm entende que a classe esta associada a tabela image
export default class Image{
    @PrimaryGeneratedColumn('increment') 
    id: number;

    @Column()
    path:string;
    
    @ManyToOne(() => Orphanage, orphanage => orphanage.images)
    @JoinColumn({name: 'orphanage_id'})
    orphanage: Orphanage;
}