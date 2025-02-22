import { fetchItems } from "@/app/lib/data";
import { getRatingValue } from "@/app/lib/utils";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/ui/components/ui/avatar";
import { Badge } from "@/app/ui/components/ui/badge";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/ui/components/ui/table";
import { PencilLineIcon, Trash2Icon } from "lucide-react";

export default async function Page() {
  const items = await fetchItems();
  return (
    <Table className="table-fixed">
      <TableCaption>A list of your items.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead className="hidden md:table-cell">Tags</TableHead>
          <TableHead className="hidden md:table-cell">Experienced</TableHead>
          <TableHead>Your Rating</TableHead>
          <TableHead>Partner Rating</TableHead>
          <TableHead>Average Rating</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {items.map((item) => {
          const { tags, user_items } = item;
          const userItem = user_items[0];
          const partnerItem = user_items[1];
          console.log(partnerItem.experienced);
          return (
            <TableRow key={item.id}>
              <TableCell>{item.title}</TableCell>
              <TableCell className="hidden md:table-cell">
                {tags.map((tag) => (
                  <Badge key={tag.id} className="mx-2">
                    {tag.name}
                  </Badge>
                ))}
              </TableCell>
              <TableCell className="hidden md:flex space-x-5">
                {userItem.experienced && (
                  <div>
                    <Avatar>
                      <AvatarImage src="/tashan.jpg" />
                      <AvatarFallback>TD</AvatarFallback>
                    </Avatar>
                  </div>
                )}
                {partnerItem.experienced && (
                  <div>
                    <Avatar>
                      <AvatarImage src="/christina.png" />
                      <AvatarFallback>CV</AvatarFallback>
                    </Avatar>
                  </div>
                )}
              </TableCell>
              <TableCell>{getRatingValue(userItem.rating)}</TableCell>
              <TableCell>{getRatingValue(partnerItem.rating)}</TableCell>
              <TableCell>{getRatingValue(item.avgRating)}</TableCell>
              <TableCell>
                <div className="flex space-x-4 justify-start align-top">
                  <PencilLineIcon className="hover:text-blue-600 shrink-0 w-4 h-4 md:w-5 md:h-5" />
                  <Trash2Icon className="hover:text-blue-600 shrink-0 w-4 h-4 md:w-5 md:h-5" />
                </div>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
