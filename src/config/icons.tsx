import {
  Backpack,
  BookOpen,
  CircleDollarSign,
  Dumbbell,
  Gamepad2,
  Gem,
  Gift,
  Heart,
  Home,
  LaptopMinimal,
  Leaf,
  Music,
  PenTool,
  Pizza,
  ShoppingCart,
  Star,
  Users,
  Wrench
} from 'lucide-preact';
import { type JSX } from 'preact/jsx-runtime';

export const PROJECT_ICONS: {
  key: string;
  icon: JSX.Element;
}[] = [
  {
    key: 'star',
    icon: <Star aria-label='Star' class='xl:scale-110' />
  },
  {
    key: 'book',
    icon: <BookOpen aria-label='Book' class='xl:scale-110' />
  },
  {
    key: 'laptop',
    icon: <LaptopMinimal aria-label='Laptop' class='xl:scale-110' />
  },
  {
    key: 'leaf',
    icon: <Leaf aria-label='Leaf' class='xl:scale-110' />
  },
  {
    key: 'wrench',
    icon: <Wrench aria-label='Wrench' class='xl:scale-110' />
  },
  {
    key: 'home',
    icon: <Home aria-label='Home' class='xl:scale-110' />
  },
  {
    key: 'pizza',
    icon: <Pizza aria-label='Pizza' class='xl:scale-110' />
  },
  {
    key: 'cart',
    icon: <ShoppingCart aria-label='Shopping Cart' class='xl:scale-110' />
  },
  {
    key: 'backpack',
    icon: <Backpack aria-label='Backpack' class='xl:scale-110' />
  },
  {
    key: 'heart',
    icon: <Heart aria-label='Heart' class='xl:scale-110' />
  },
  {
    key: 'gem',
    icon: <Gem aria-label='Gem' class='xl:scale-110' />
  },
  {
    key: 'gift',
    icon: <Gift aria-label='Gift' class='xl:scale-110' />
  },
  {
    key: 'pen',
    icon: <PenTool aria-label='Pen' class='xl:scale-110' />
  },
  {
    key: 'dumbbell',
    icon: <Dumbbell aria-label='Dumbbell' class='xl:scale-110' />
  },
  {
    key: 'music',
    icon: <Music aria-label='Music' class='xl:scale-110' />
  },
  {
    key: 'gamepad',
    icon: <Gamepad2 aria-label='Gamepad' class='xl:scale-110' />
  },
  {
    key: 'dollar',
    icon: <CircleDollarSign aria-label='Dollar' class='xl:scale-110' />
  },
  {
    key: 'users',
    icon: <Users aria-label='Users' class='xl:scale-110' />
  }
];
