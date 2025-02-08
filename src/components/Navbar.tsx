"use client";
import React, { act, useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
 
const Navbar = ({ className }: { className?: string }) => {
    const [active, setActive] = useState<string | null>(null);
    return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
        <Menu setActive={setActive}>
            <MenuItem setActive={setActive} active={active} item="Home">
            
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Courses">
            <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/chai">All courses</HoveredLink>
                <HoveredLink href="/interface-design">Music Theory</HoveredLink>
                <HoveredLink href="/seo">Song Writing</HoveredLink>
                <HoveredLink href="/branding">Music Production</HoveredLink>
                <HoveredLink href="/branding">Advanced Composition</HoveredLink>
            </div>
            </MenuItem>
            <Link href="/courses"> <MenuItem setActive={setActive} active={active} item="contact" ></MenuItem> </Link>
            <MenuItem setActive={setActive} active={active} item="Login">
            
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Signup">
            
            </MenuItem>
        </Menu>
    </div>
  )
}

export default Navbar
