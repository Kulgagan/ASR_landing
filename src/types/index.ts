import type { ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react'

export type MenuItem = {
    href: string;
    label: string;
    submenu?: {
        href: string;
        icon?: ReactNode;
        label: string;
        desc?: string;
    }[];
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

export type FeatureItem = {
    icon: ReactNode;
    iconBoxColor: string;
    title: string;
    desc: string;
    imgSrc?: string;
};

export type ProcessItem = {
    icon: ReactNode;
    title: string;
    text: string;
};

export type SocialLink = {
    href: string;
    icon: ReactNode;
};