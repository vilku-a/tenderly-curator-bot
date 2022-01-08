import {Entity, Column, BaseEntity, PrimaryGeneratedColumn} from "typeorm";

@Entity('users')
export class Users extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user_id: string;

    @Column({default: 0})
    app_accepted: number;

    @Column({default: 0})
    all_app_accepted: number;

    @Column({default: 0})
    counter_eventers: number;

    @Column({default: 0})
    com_accepted: number;

    @Column({default: 0})
    warn_accepted: number

    @Column({default: false})
    vacation: boolean

    @Column({type: 'timestamp'})
    user_data: Date

}
