// Dependencies
import { Body, Controller, Post } from '@nestjs/common';
import {
  DeleteNodeResponse,
  nodesService,
  DeleteNodeRequest,
} from '@sygris/core';

@Controller('nodes/delete')
export class DeleteNodeController {
  @Post()
  getNodes(@Body() req: DeleteNodeRequest): Promise<DeleteNodeResponse> {
    return nodesService.delete(req);
  }
}
