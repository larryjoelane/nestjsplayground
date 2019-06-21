import { ApiModelProperty } from '@nestjs/swagger';

export class UpdateTodo {

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
