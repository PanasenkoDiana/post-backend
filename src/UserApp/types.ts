import { Prisma } from "@prisma/client";

export interface IError {
    status: 'error';
    message: string;
}

export interface ISuccess<T> {
    status: 'success';
    data: T;
}

export type UserRes = Prisma.UserGetPayload<{
    select: {
        id: true;
        username: true;
        email: true;
    }
}>;

export type CreateUser = Prisma.UserCreateInput;
