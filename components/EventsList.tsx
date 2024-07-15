import { List, ListItem } from "@chakra-ui/react";
import DuskiesStar from "./icons/duskies-star";

export function EventList({ children }: { children: React.ReactNode }) {
    return (
        <List mt={6} className="relative border-s border-white">
            {children}
        </List>
    )
}

export function EventListItem({ children }: { children: React.ReactNode }) {
    return (
        <ListItem className="mb-10 ms-6">
            {children}
        </ListItem>
    )
}

export function EventListTitle({ children }: { children: React.ReactNode }) {
    return (
        <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">{children}</h3>
    )
}

export function EventListIcon() {
    return (
        <span className="absolute flex items-center justify-center w-8 h-8 rounded-full -start-5 ring-8 ring-offset-1 ring-offset-black ring-black dark:bg-black">
            <DuskiesStar />
        </span>
    )
}

export function EventListDate({ children }: { children: React.ReactNode }) {
    return (
        <time className="block mb-2 text-sm font-normal leading-none text-white">{children}</time>
    )
}