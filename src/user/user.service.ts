import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}

  create(data: Prisma.UserCreateInput) {
    return this.prismaService.user.create({data});
  }

  findAll(params?: {
    skip?: number,
    take?: number,
    cursor?: Prisma.UserWhereUniqueInput,
    where?: Prisma.UserWhereInput,
    orderBy?: Prisma.UserOrderByWithRelationInput
  }) {
    const {skip, take, cursor, where, orderBy} = params;
    return this.prismaService.user.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy
    });
  }

  findOne(where: Prisma.UserWhereUniqueInput) {
    return this.prismaService.user.findUnique({where })
  }

  update(params: {where: Prisma.UserWhereUniqueInput, data: Prisma.UserUpdateInput}) {
    const {where, data} = params;

    return this.prismaService.user.update({where, data})
  }

  remove(where: Prisma.UserWhereUniqueInput) {
    return this.prismaService.user.delete({where })
  }
}
