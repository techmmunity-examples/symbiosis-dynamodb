import {
	Column,
	Entity,
	getGlobalRepository,
	PrimaryGeneratedColumn,
} from "@techmmunity/symbiosis";

@Entity({
	isSubEntity: true,
})
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

export const getExampleRepository = () => getGlobalRepository(ExampleEntity);
