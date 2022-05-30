import {
	Column,
	Entity,
	getGlobalRepository,
	PrimaryGeneratedColumn,
	SubEntity,
} from "@thothom/core";
import { Repository } from "@thothom/dynamodb";

@SubEntity()
export class SubExampleEntity {
	@Column()
	public foo: number;
}

@Entity()
export class ExampleEntity {
	@PrimaryGeneratedColumn()
	public id: string;

	@Column()
	public string: string;

	@Column(String)
	public list: Array<string>;

	@Column(SubExampleEntity)
	public subEntity: SubExampleEntity;
}

export const getExampleRepository = () =>
	getGlobalRepository<Repository<ExampleEntity>>(ExampleEntity);
