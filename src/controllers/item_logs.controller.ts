import { Controller, Get, Response, Param } from '@nestjs/common';
import {
    ApiBasicAuth,
    ApiOkResponse,
    ApiSecurity,
    ApiTags
} from '@nestjs/swagger';
import { ItemLog } from 'src/entities/item_logs.entity';
import { ItemLogService } from 'src/services/item_logs.service';

@ApiTags('item_logs')
@ApiBasicAuth()
@ApiSecurity('basic')
@Controller('item_logs')
export class ItemLogController {
    constructor(private itemLogService: ItemLogService) {}

    @ApiOkResponse({ description: 'Get all items log' })
    @Get()
    async readAll(@Response() res) {
        try {
            let itemLog: ItemLog[] =
                await this.itemLogService.getAll();
            if (!itemLog || itemLog.length === 0) {
                return res.status(200).json({
                    error: 0,
                    data: 0
                });
            }
            return res.status(200).json({
                errors: 0,
                data: itemLog
            });
        } catch (error) {
            return res.status(500).json({
                error: 1,
                message: 'Server occurred an error'
            });
        }
    }

    @ApiOkResponse({ description: 'Get a item log by id' })
    @Get(':id')
    async readById(@Response() res, @Param('id') id: number) {
        try {
            let itemLog: ItemLog =
                await this.itemLogService.getById(id);

            if (!itemLog) {
                return res.status(200).json({
                    error: 0,
                    data: 0
                });
            }
            return res.status(200).json({
                errors: 0,
                data: itemLog
            });
        } catch (error) {
            return res.status(500).json({
                error: 1,
                message: 'Server occurred an error'
            });
        }
    }
}
