import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn} from 'typeorm';
import Image from './Image';

@Entity('orphanages') //o typeorm entende que a classe esta associada a tabela orphanages
export default class Orphanage{
    @PrimaryGeneratedColumn('increment') 
    id: number;

    @Column()
    name:string;

    @Column()
    latitude: number;

    @Column()
    longitude:number;

    @Column()
    about:string;

    @Column()
    instructions:string;

    @Column()
    opening_hours:string;

    @Column()
    open_on_weekends: boolean;

    @OneToMany(() => Image, image => image.orphanage,{
        cascade:['insert', 'update']  //
    })  //o 1 parametro é uma função que devolve o tipo do retorno, e o 2, dado uma campo que recebi, retorna o relacionamento inverso
    @JoinColumn({name: 'orphanage_id'})  //nome da coluna que armazena o relacionamento de orfanato com imagem.
    images: Image[];
}