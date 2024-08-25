// Imports
import { MoonStar } from 'lucide-react';

// NavBar
interface NAVBARtype {
    title: string;
    navigation: [
        {label:string, root:string},
        {label:string, root:string},
        {label:string, root:string},
        {label:string, root:string},
        {label:string, root:string},
    ];
    theme: typeof MoonStar;
}
export const NAVBAR: NAVBARtype  = {
    title: "BNK4970",
    navigation: [
        {
            label: 'home',
            root: 'home',
        },
        {
            label: 'à propos',
            root: 'apropos',
        },
        {
            label: 'compétences',
            root: 'competences',
        },
        {
            label: 'projets',
            root: 'projets',
        },
        {
            label: 'contact',
            root: 'contact',
        },
    ],
    theme: MoonStar,
}