import { useEffect, useState } from "react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";
import PropTypes from 'prop-types';
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const statuses = ["primary", "dark", "pastel", "nature", "ocean", "sunset", "monochrome", "candy", "forest", "sakura", "retro", "lava", "ice", "sandstorm", "aurora"];

export function Combobox(props) {
    const { toggleCollapsed } = props || {};
    const [open, setOpen] = useState(false);
    const isDesktop = useMediaQuery("(min-width: 768px)");
    const [selectedStatus, setSelectedStatus] = useState(localStorage.getItem("theme") || "primary");

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", selectedStatus);
        localStorage.setItem("theme", selectedStatus);
    }, [selectedStatus]);

    return isDesktop ? (
        <div className="">
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button variant="outline" className="w-[150px] justify-start text-primary-dark hover:text-theme">
                        {selectedStatus ? `Theme: ${selectedStatus}` : "Choose your theme"}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0" align="start">
                    <StatusList setOpen={setOpen} setSelectedStatus={setSelectedStatus} toggleCollapsed={toggleCollapsed}/>
                </PopoverContent>
            </Popover>
        </div>
    ) : (
        <div className="">
            <Drawer open={open} onOpenChange={setOpen} >
                <DrawerTrigger asChild>
                    <Button variant="outline" className="w-[150px] justify-start text-primary-dark hover:text-theme">
                        {selectedStatus ? `Theme: ${selectedStatus}` : "Choose your theme"}
                    </Button>
                </DrawerTrigger>
                <DrawerContent>
                    <div className="mt-4 border-t bg-primary-light">
                        <StatusList setOpen={setOpen} setSelectedStatus={setSelectedStatus} toggleCollapsed={toggleCollapsed} />
                    </div>
                </DrawerContent>
            </Drawer>
        </div>
    );
}

function StatusList({ setOpen, setSelectedStatus, toggleCollapsed }) {
    return (
        <Command>
            <CommandInput placeholder="Filter theme..." />
            <CommandList >
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup >
                    {statuses.map((status) => (
                        <CommandItem
                            key={status}
                            value={status}
                            onSelect={() => {
                                setSelectedStatus(status);
                                setOpen(false);
                                toggleCollapsed();
                            }}
                        >
                            {status}
                        </CommandItem>
                    ))}
                </CommandGroup>
            </CommandList>
        </Command>
    );
}

// Add prop validation
StatusList.propTypes = {
    setOpen: PropTypes.func.isRequired,
    setSelectedStatus: PropTypes.func.isRequired,
    toggleCollapsed: PropTypes.func.isRequired,
};