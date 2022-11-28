// Dependencies
import { Body, Controller, Post } from '@nestjs/common';
import {
  CreateNodeResponse,
  Nodes,
  nodesService,
  CreateNodeRequest,
} from '@sygris/core';

@Controller('nodes/create')
export class CreateNodeController {
  @Post()
  getNodes(
    @Body() req: CreateNodeRequest,
  ): Promise<Nodes | CreateNodeResponse> {
    return nodesService.createNew(req);
  }
}
