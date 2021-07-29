import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sale } from '../entities/sales.entity';

@Injectable()
export class SaleService {
    constructor(
        @InjectRepository(Sale)
        private itemRepository: Repository<Sale>,
    ) {};

    getAll(): Promise<Sale[]> {
        return this.itemRepository.find();
    };

    getById(id: number): Promise<Sale> {
        return this.itemRepository.findOne(id);
    };
};
