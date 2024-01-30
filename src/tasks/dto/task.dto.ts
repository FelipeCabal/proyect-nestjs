import {TaskStatus} from '../tasks.entity'
import { IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator'

export class CreateTaskDto{
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    title: string;

    @IsString()
    @IsNotEmpty()
    description: string;
}

export class UpdateTaskDto{
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    title?: string;
    
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    description?: string;
    
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    status?: TaskStatus;
}