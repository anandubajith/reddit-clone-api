import { IsEnum, IsString } from "class-validator";
import { PublisherType } from "components/Publisher/publisherType.enum";
import { Field, InputType } from "type-graphql";

@InputType()
export class PublisherValidator {
    @Field()
    @IsString()
    public name: string;

    @Field(() => PublisherType)
    @IsEnum(PublisherType)
    public type: PublisherType;
}
