// Dependencies
import { Body, Controller, Post } from '@nestjs/common';
import {
  GetNodesResponse,
  Nodes,
  nodesService,
  GetNodesRequest,
} from '@sygris/core';

@Controller('nodes')
export class GetNodesController {
  @Post()
  getNodes(@Body() req: GetNodesRequest): Promise<Nodes | GetNodesResponse> {
    return nodesService.get(req);
  }
}
