import { Controller, Get, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern, Payload } from '@nestjs/microservices';
import { NovoVeiculo } from './interface/novo-veiculo';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  logger = new Logger (AppController.name)

  @EventPattern('ola')
  getHello(@Payload() texto:string) {
    this.logger.log(texto)
  }

  @EventPattern('adicionar-veiculo')
  adicionarFila(@Payload() novoVeiculo:NovoVeiculo){
    this.logger.log(JSON.stringify(novoVeiculo))
    return this.appService.adicionarVeiculo(novoVeiculo)
  }
}
