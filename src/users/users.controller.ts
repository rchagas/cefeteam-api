import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { User, UserType } from '@prisma/client';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new User' })
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @ApiOperation({ summary: 'Return all users' })
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get('userType')
  @ApiOperation({ summary: 'Return all user by user type' })
  @ApiQuery({ name: 'userType', enum: UserType })
  async filterByType(@Query('userType') userType: UserType): Promise<User[]> {
    return this.usersService.findByRole(userType);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Return user by id' })
  async findOne(@Param('id') id: string): Promise<User> {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update an User' })
  async update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<User> {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove an User' })
  async remove(@Param('id') id: string): Promise<User> {
    return this.usersService.delete(+id);
  }
}
