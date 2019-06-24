import { ApiModelProperty } from '@nestjs/swagger';

export class CreateTodo {

  @ApiModelProperty()
  id: number = null;

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
