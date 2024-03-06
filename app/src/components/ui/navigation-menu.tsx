import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cva } from "class-variance-authority";
import { ChevronDown } from "lucide-react";
import { cn } from "../../lib/utils";

const NavigationMenu = React.forwardRef<
	React.ElementRef<typeof NavigationMenuPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
	<NavigationMenuPrimitive.Root
		ref={ref}
		className={cn(
			"norelative noz-10 noflex nomax-w-max noflex-1 noitems-center nojustify-center",
			className
		)}
		{...props}
	>
		{children}
		<NavigationMenuViewport />
	</NavigationMenuPrimitive.Root>
));
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;

const NavigationMenuList = React.forwardRef<
	React.ElementRef<typeof NavigationMenuPrimitive.List>,
	React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
	<NavigationMenuPrimitive.List
		ref={ref}
		className={cn(
			"nogroup noflex noflex-1 nolist-none noitems-center nojustify-center nospace-x-1",
			className
		)}
		{...props}
	/>
));
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;

const NavigationMenuItem = NavigationMenuPrimitive.Item;

const navigationMenuTriggerStyle = cva(
	"nogroup noinline-flex noh-10 now-max noitems-center nojustify-center norounded-md nobg-white nopx-4 nopy-2 notext-sm nofont-medium notransition-colors hover:nobg-slate-100 hover:notext-slate-900 focus:nobg-slate-100 focus:notext-slate-900 focus:nooutline-none disabled:nopointer-events-none disabled:noopacity-50 data-[active]:nobg-slate-100/50 data-[state=open]:nobg-slate-100/50 dark:nobg-slate-950 dark:hover:nobg-slate-800 dark:hover:notext-slate-50 dark:focus:nobg-slate-800 dark:focus:notext-slate-50 dark:data-[active]:nobg-slate-800/50 dark:data-[state=open]:nobg-slate-800/50"
);

const NavigationMenuTrigger = React.forwardRef<
	React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
	React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
	<NavigationMenuPrimitive.Trigger
		ref={ref}
		className={cn(navigationMenuTriggerStyle(), "nogroup", className)}
		{...props}
	>
		{children}
		{""}
		<ChevronDown
			className='norelative notop-[1px] noml-1 noh-3 now-3 notransition noduration-200 group-data-[state=open]:norotate-180'
			aria-hidden='true'
		/>
	</NavigationMenuPrimitive.Trigger>
));
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;

const NavigationMenuContent = React.forwardRef<
	React.ElementRef<typeof NavigationMenuPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
	<NavigationMenuPrimitive.Content
		ref={ref}
		className={cn(
			"noleft-0 notop-0 now-full data-[motion^=from-]:noanimate-in data-[motion^=to-]:noanimate-out data-[motion^=from-]:nofade-in data-[motion^=to-]:nofade-out data-[motion=from-end]:noslide-in-from-right-52 data-[motion=from-start]:noslide-in-from-left-52 data-[motion=to-end]:noslide-out-to-right-52 data-[motion=to-start]:noslide-out-to-left-52 md:noabsolute md:now-auto",
			className
		)}
		{...props}
	/>
));
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;

const NavigationMenuLink = NavigationMenuPrimitive.Link;

const NavigationMenuViewport = React.forwardRef<
	React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
	React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
	<div className={cn("noabsolute noleft-0 notop-full noflex nojustify-center")}>
		<NavigationMenuPrimitive.Viewport
			className={cn(
				"noorigin-top-center norelative nomt-1.5 noh-[var(--radix-navigation-menu-viewport-height)] now-full nooverflow-hidden norounded-md noborder noborder-slate-200 nobg-white notext-slate-950 noshadow-lg data-[state=open]:noanimate-in data-[state=closed]:noanimate-out data-[state=closed]:nozoom-out-95 data-[state=open]:nozoom-in-90 md:now-[var(--radix-navigation-menu-viewport-width)] dark:noborder-slate-800 dark:nobg-slate-950 dark:notext-slate-50",
				className
			)}
			ref={ref}
			{...props}
		/>
	</div>
));
NavigationMenuViewport.displayName =
	NavigationMenuPrimitive.Viewport.displayName;

const NavigationMenuIndicator = React.forwardRef<
	React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
	React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
	<NavigationMenuPrimitive.Indicator
		ref={ref}
		className={cn(
			"notop-full noz-[1] noflex noh-1.5 noitems-end nojustify-center nooverflow-hidden data-[state=visible]:noanimate-in data-[state=hidden]:noanimate-out data-[state=hidden]:nofade-out data-[state=visible]:nofade-in",
			className
		)}
		{...props}
	>
		<div className='norelative notop-[60%] noh-2 now-2 norotate-45 norounded-tl-sm nobg-slate-200 noshadow-md dark:nobg-slate-800' />
	</NavigationMenuPrimitive.Indicator>
));
NavigationMenuIndicator.displayName =
	NavigationMenuPrimitive.Indicator.displayName;

export {
	navigationMenuTriggerStyle,
	NavigationMenu,
	NavigationMenuList,
	NavigationMenuItem,
	NavigationMenuContent,
	NavigationMenuTrigger,
	NavigationMenuLink,
	NavigationMenuIndicator,
	NavigationMenuViewport,
};
