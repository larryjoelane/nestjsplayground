import { ApiModelProperty } from '@nestjs/swagger';
import { PrimaryColumn } from 'typeorm';

export class Todo {

  @ApiModelProperty()
  id: number;

  @ApiModelProperty()
  label: string;

  @ApiModelProperty()
  description: string;

  @ApiModelProperty()
  createdOn: Date = new Date();

  @ApiModelProperty()
  createdBy: string;

  @ApiModelProperty()
  isComplete: boolean;
}
