import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FeatureCardProps } from "@/types";
import { Button } from "./ui/button";
import Image from "next/image";

const FeatureCard = ({
  title,
  description,
  image,
  footer,
}: FeatureCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <span className="text-xl">{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex w-full flex-col gap-8">
        <Image
          src={image}
          alt={title}
          width={300}
          height={500}
          className="min-w-full"
        />
        <p className="text-lg">{description}</p>
      </CardContent>
      {footer && (
        <CardFooter>
          <div className="flex w-full justify-center">
            <Button className="bg-green-600 text-lg">{footer}</Button>
          </div>
        </CardFooter>
      )}
    </Card>
  );
};

export default FeatureCard;
