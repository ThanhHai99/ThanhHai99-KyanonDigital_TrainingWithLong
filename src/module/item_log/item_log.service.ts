import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ItemLog } from './item_log.entity';

@Injectable()
export class ItemLogService {
    constructor(
        @InjectRepository(ItemLog)
        private itemLogRepository: Repository<ItemLog>
    ) {}

    async getAll(): Promise<ItemLog[]> {
        return await this.itemLogRepository.find();
    }

    async getById(id: number): Promise<ItemLog> {
        return await this.itemLogRepository.findOne({
            where: {
                id: id
            }
        });
    }

    async create(itemLog: ItemLog): Promise<ItemLog> {
        return await this.itemLogRepository.save(itemLog);
    }
}
