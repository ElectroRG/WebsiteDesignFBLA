"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { HoverBorderGradientDemo } from "./hover-border-gradient";
import ReactTooltip from 'react-tooltip';

const Navbar = ({ className }: { className?: string })=>{
    const [active, setActive] = useState<string | null>(null);
    return (
        <nav className="sticky z-50">
            <div className={cn("fixed top-0 inset-x-0 max-w-full mx-auto z-50", className)}>
                <Menu setActive={setActive} >
                    <MenuItem setActive={setActive} active={active} item="Information">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/information">Directions</HoveredLink>
                        <HoveredLink href="/interface-design">Seating Charts</HoveredLink>
                        <HoveredLink href="/seo">Policies</HoveredLink>
                        <HoveredLink href="/branding">Amenities</HoveredLink>
                    </div>
                    </MenuItem>
<<<<<<< Updated upstream
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
                    
                    <MenuItem setActive={setActive} active={active} item="Events">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/calendar">Event Calendar</HoveredLink>
                    </div>
                    </MenuItem>



                </Menu>
                </div>
            </nav>
    );
};



export default Navbar;

