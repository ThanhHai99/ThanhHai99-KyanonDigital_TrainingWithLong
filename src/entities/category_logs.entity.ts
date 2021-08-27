import {
    BaseEntity,
    Column,
    Entity,
    CreateDateColumn
} from 'typeorm';

@Entity({ name: 'category_logs' })
export class CategoryLog extends BaseEntity {
    @Column({ primary: true, generated: true })
    id: number;

    @Column()
    category_id: number;

    @Column()
    name: string;

    @Column()
    created_by: number;

    @CreateDateColumn({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)'
    })
    created_at: Date;
}
