import { Injectable } from '@angular/core';
import {TodoService} from "./todo.service";

@Injectable()
export class TestService {

  constructor(private todoService: TodoService) {
    todoService.log();
  }
}
