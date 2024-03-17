import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Todo  extends BaseEntity{
    @PrimaryGeneratedColumn("uuid")
    TodoId: string;

    @Column()
    Title : string;

    @Column()
    Description : string;

    @Column({
        default: "normal"
    })
    Urgency: string;

    @Column()
    DueDate: string;

    @Column({
        name: "created_at",
    })
    CreatedAt: string;
}