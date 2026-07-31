import { Role } from "../../generated/prisma/enums"

export type  Iregister={
    name:string,
    email:string,
    password:string,
    phone:string,
    role?:Role
}

export type Ilogin={
    email:string,
    password:string
}