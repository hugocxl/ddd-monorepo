// Dependencies
import { Body, Controller, Post } from '@nestjs/common';
import {
  CreateNodeResponse,
  nodesService,
  CreateNodeRequest,
} from '@sygris/core';

@Controller('nodes/create')
export class CreateNodeController {
  @Post()
  getNodes(@Body() req: CreateNodeRequest): Promise<CreateNodeResponse> {
    return nodesService.create(req);
  }
}
