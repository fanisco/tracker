import { HttpException, HttpStatus } from '@nestjs/common';

export class ValidationException extends HttpException {
  messages: Record<string, string>;

  constructor(response: Record<string, string>) {
    super(response, HttpStatus.BAD_REQUEST);
    this.messages = response;
  }
}
