// Dependencies
import { Body, Controller, Post } from '@nestjs/common';
import { EditNodeResponse, nodesService, EditNodeRequest } from '@sygris/core';

@Controller('nodes/edit')
export class EditNodeController {
  @Post()
  getNodes(@Body() req: EditNodeRequest): Promise<EditNodeResponse> {
    return nodesService.edit(req);
  }
}
