import type { LucideIcon } from 'lucide-react'

export type MenuItem = {
    href: string;
    label: string;
    submenu?: SubmenuItem[]
}

export type SubmenuItem = {
    href: string;
    icon: string;
    label: string;
    desc: string;
}

export type IconMap = {
    [key: string]: LucideIcon;
}