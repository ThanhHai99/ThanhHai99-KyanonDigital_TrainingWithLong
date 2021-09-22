import { Test, TestingModule } from '@nestjs/testing';
import { ItemLogService } from '@module/item_log/service/item_log.service';

describe('ItemLogService', () => {
    let service: ItemLogService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [ItemLogService]
        }).compile();

        service = module.get<ItemLogService>(ItemLogService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
