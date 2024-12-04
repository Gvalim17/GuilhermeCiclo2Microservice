import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { NovoVeiculo } from './interface/novo-veiculo';

@Injectable()
export class AppService {
  constructor(private readonly prismaService:PrismaService){}

  getHello(): string {
    return 'Hello World!';
  }

  async adicionarVeiculo(novoVeiculo:NovoVeiculo){
    novoVeiculo.veiculo_status = 1;
    return await this.prismaService.veiculo.create({
      data:novoVeiculo
    })
  }

  
}
