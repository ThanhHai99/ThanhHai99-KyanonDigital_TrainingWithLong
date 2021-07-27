import {
    JoinColumn,
    ManyToOne,
    OneToMany,
    CreateDateColumn,
    UpdateDateColumn,
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
    Unique
} from 'typeorm';
import { IsNotEmpty, Length } from 'class-validator';
import { Price } from '../entities/price.entity';
import { Sale } from './sales.entity';
import { User } from '../entities/users.entity';
import { ItemOrder } from '../entities/item_order.entiy';
import { Category } from './categories.entity';
import { Warehouse } from '../entities/warehouses.entity';

@Entity({ name: 'items' })
export class Item extends BaseEntity {
    @Column()
    @PrimaryGeneratedColumn()
    id: number;

    @Unique(['name'])
    @Column()
    @Length(256)
    name: string;

    @ManyToOne((type) => Category, (category) => category.items)
    @JoinColumn({ name: 'category_id' })
    category: Category;

    @Column()
    @Length(256)
    details: string;

    @Column()
    @Length(256)
    user_manual: string;

    @ManyToOne((type) => User, (user) => user.items)
    @JoinColumn({ name: 'created_by' })
    user: User;

    @Column()
    @IsNotEmpty()
    @CreateDateColumn()
    created_at: Date;

    @Column()
    @IsNotEmpty()
    @UpdateDateColumn()
    updated_at: Date;

    @OneToMany((type) => Price, (price) => price.item)
    prices: Price[];

    @OneToMany((type) => Sale, (sale) => sale.item)
    sales: Sale[];

    @OneToMany((type) => ItemOrder, (itemorder) => itemorder.item)
    itemorders: ItemOrder[];

    @OneToMany((type) => Warehouse, (warehouse) => warehouse.item)
    warehouses: Warehouse[];
}
