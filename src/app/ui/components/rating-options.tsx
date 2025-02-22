"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export default function RatingOptions(rating: number) {
  return (
    <Select defaultValue={rating.toString()}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a rating" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="10">(10) Masterpiece</SelectItem>
          <SelectItem value="9">(9) Great</SelectItem>
          <SelectItem value="8">(8) Very Good</SelectItem>
          <SelectItem value="7">(7) Good</SelectItem>
          <SelectItem value="6">(6) Fine</SelectItem>
          <SelectItem value="5">(5) Average</SelectItem>
          <SelectItem value="4">(4) Bad</SelectItem>
          <SelectItem value="3">(3) Very Bad</SelectItem>
          <SelectItem value="2">(2) Horrible</SelectItem>
          <SelectItem value="1">(1) Appalling</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
